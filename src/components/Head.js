import { useEffect, useState } from "react";
import * as styles from "./styles";
import * as React from "react";
import data from "./data";
import styled from "styled-components";

const storageKey = "refreshProtector";

export const Container = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

export const StickyDiv = styled.div`

  background-color: darkgreen;
  color: white;
  padding: 1rem;
  position: sticky;
  bottom: 0;
  white-space: nowrap; /* Prevents children from starting new lines */
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ContentDiv = styled.div`
  padding: 1rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Checkbox = styled.input`
  display: none;

  &:checked + label {
    background-color: darkgreen;
  }
`;

export const Label = styled.label`
  display: block;
  padding: 5px;
  background-color: white;
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function Head() {
  const [missions, setMissions] = useState(data);

  const toggleOption = (missionIndex, optionIndex) => {
    const updatedMissions = [...missions];
    updatedMissions[missionIndex].options[optionIndex] *= -1; // Toggle on/off
    setMissions(updatedMissions);
  };

  const calculateSum = () => {
    if (!(missions instanceof Array)) {
      return 0;
    }
    let totalSum = 0;
    missions.forEach((mission) => {
      mission.options.forEach((option) => {
        if (option < 0) {
          totalSum -= option;
        }
      });
    });
    return totalSum;
  };

  useEffect(() => {
    // TODO: reenable before deploy
    if(localStorage.getItem(storageKey)){
        setMissions(JSON.parse(localStorage.getItem(storageKey)))
        console.log(localStorage.getItem(storageKey))
        return
    }
    localStorage.setItem(storageKey, JSON.stringify(missions));
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(missions));
  }, [missions]);

  return (
    <Container>
      <ContentDiv>
        {missions &&
          missions.length > 0 &&
          missions instanceof Array &&
          missions.map((mission, missionIndex) => (
            <div key={missionIndex}>
              <h2>{mission.name}</h2>
              <p>{mission.helpText}</p>
              {mission.photo && <img src={mission.photo} alt={mission.name} width="300" height="300"/>}
              <List>
                {mission.options.map((option, optionIndex) => (
                  <ListItem key={optionIndex}>
                    <Label style={{backgroundColor: option < 0 ? "green": "white", color: option < 0 ? "white": "black"}}>
                      <Checkbox
                        type="checkbox"
                        checked={option < 0}
                        onChange={() => toggleOption(missionIndex, optionIndex)}
                      />
                      {mission.optionText[optionIndex]}
                    </Label>
                  </ListItem>
                ))}
              </List>
            </div>
          ))} 
      </ContentDiv>
      <StickyDiv>
        <h2 style={{marginRight: "5px"}}>Total Sum:</h2>
        <p style={{marginRight: "5px"}}>{calculateSum()}</p>
        <button style={{marginRight: "5px"}} onClick={() => setMissions(data)}>Clear Inputs</button>
      </StickyDiv>
      <br/><br/><br/>
    </Container>
  );
}