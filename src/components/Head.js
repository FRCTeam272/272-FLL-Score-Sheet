import { useEffect, useState } from "react";
import * as React from "react";
import data from "./data"
import styled from "styled-components";

const storageKey = "refreshProtector";

const DarkMode = styled.div`
background-color: black;
color: white;
height: 100%;
`

export default function Head() {
  const [missions, setMissions] = useState(data);

  const toggleOption = (missionIndex, optionIndex) => {
    const updatedMissions = [...missions];
    updatedMissions[missionIndex].options[optionIndex] *= -1; // Toggle on/off
    setMissions(updatedMissions);
  };

  const calculateSum = () => {
    if(!(missions instanceof Array)){
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
    // if(localStorage.getItem(storageKey)){
    //     setMissions(JSON.parse(localStorage.getItem(storageKey)))
    //     console.log(localStorage.getItem(storageKey))
    //     return
    // }
    localStorage.setItem(storageKey, JSON.stringify(missions))
  }, [])

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(missions))
  }, [missions])

  return (
    <DarkMode>
      <h1>Missions</h1>
      {missions && missions.length > 0 && missions instanceof Array && missions.map((mission, missionIndex) => (
        <div key={missionIndex}>
          <h2>{mission.name}</h2>
          <p>{mission.helpText}</p>
          {mission.photo && <img src={mission.photo} alt={mission.name} />}
          <ul>
            {mission.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type="checkbox"
                    checked={option < 0}
                    onChange={() => toggleOption(missionIndex, optionIndex)}
                  />
                  {mission.optionText[optionIndex]}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h2>Total Sum:</h2>
        <p>{calculateSum()}</p>
        <button onClick={() => setMissions(data)}>Clear Inputs</button>
      </div>
    </DarkMode>
  );
}

export function MissionComp({ mission }) {}
