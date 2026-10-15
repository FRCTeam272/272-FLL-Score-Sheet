import { useEffect, useState } from "react";
import * as React from "react";
import data from "./data";
import {
  GlobalStyle,
  Container,
  Header,
  ContentDiv,
  Card,
  CardHeader,
  Points,
  HelpText,
  PhotoToggle,
  List,
  Checkbox,
  Label,
  Mark,
  OptionText,
  OptionPoints,
  StickyDiv,
  Total,
  ClearButton,
} from "./styles";

const storageKey = new Date().toISOString().split('T')[0];

// One true/false per option, per mission
const emptySelections = () => data.map((mission) => mission.options.map(() => false));

const missionScore = (mission, selected) =>
  mission.options.reduce((sum, points, i) => (selected[i] ? sum + points : sum), 0);

// The picture is only downloaded once the user opens it
function Photo({ mission }) {
  const [open, setOpen] = useState(false);
  return (
    <PhotoToggle onToggle={(e) => setOpen(e.currentTarget.open)}>
      <summary>{open ? "Hide picture" : "Show picture"}</summary>
      {open && <img src={mission.photo} alt={mission.name} loading="lazy" />}
    </PhotoToggle>
  );
}

export default function Head() {
  const [selections, setSelections] = useState(emptySelections);

  const toggleOption = (missionIndex, optionIndex) => {
    const exclusive = data[missionIndex].exclusive;
    setSelections((prev) =>
      prev.map((selected, i) => {
        if (i !== missionIndex) return selected;
        return selected.map((on, j) => {
          if (j === optionIndex) return !on;
          return exclusive ? false : on;
        });
      })
    );
  };

  const total = data.reduce((sum, mission, i) => sum + missionScore(mission, selections[i]), 0);

  useEffect(() => {
    // TODO: reenable before deploy
    // Object.keys(localStorage).forEach(key => {
    //   if (key !== storageKey) {
    //     localStorage.removeItem(key);
    //   }
    // });
    // if(localStorage.getItem(storageKey)){
    //     setSelections(JSON.parse(localStorage.getItem(storageKey)))
    //     return
    // }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(selections));
  }, [selections]);

  return (
    <Container>
      <GlobalStyle />
      <Header>
        <h1>FLL Robot Game Score Sheet</h1>
      </Header>
      <ContentDiv>
        {data.map((mission, missionIndex) => {
          const selected = selections[missionIndex];
          const score = missionScore(mission, selected);
          const inputType = mission.exclusive ? "radio" : "checkbox";
          return (
            <Card key={missionIndex} $scored={score > 0}>
              <CardHeader>
                <h2>{mission.name}</h2>
                <Points $scored={score > 0}>{score}</Points>
              </CardHeader>
              {(mission.helpText || mission.exclusive) && (
                <HelpText>
                  {mission.helpText}
                  {mission.exclusive && " (pick one)"}
                </HelpText>
              )}
              {mission.photo && <Photo mission={mission} />}
              <List>
                {mission.options.map((points, optionIndex) => {
                  const checked = selected[optionIndex];
                  return (
                    <li key={optionIndex}>
                      <Label $checked={checked}>
                        <Checkbox
                          type="checkbox"
                          role={inputType}
                          checked={checked}
                          onChange={() => toggleOption(missionIndex, optionIndex)}
                        />
                        <Mark $checked={checked} $round={mission.exclusive}>
                          {checked && "✓"}
                        </Mark>
                        <OptionText>{mission.optionText[optionIndex]}</OptionText>
                        <OptionPoints>+{points}</OptionPoints>
                      </Label>
                    </li>
                  );
                })}
              </List>
            </Card>
          );
        })}
      </ContentDiv>
      <StickyDiv>
        <Total>
          Total<strong>{total}</strong>
        </Total>
        <ClearButton
          type="button"
          onClick={() => {
            if (window.confirm("Clear all scores?")) {
              setSelections(emptySelections());
              window.scrollTo(0, 0);
            }
          }}
        >
          Clear
        </ClearButton>
      </StickyDiv>
    </Container>
  );
}
