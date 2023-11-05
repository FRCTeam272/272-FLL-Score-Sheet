import { useEffect, useState } from "react"
import { useScoreContext } from "../dataProvider"
import * as React from "react"

function compareObjs(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export default function Head(){
    const [data, setData] = useState({})
    const [sumScores, setSumScores] = useState(0)
    const [scores] = useScoreContext();
    useEffect(() => {
        if(localStorage.getItem("lastStore")){
            setData(localStorage.getItem("lastStore"))
        }
        fetch('../data.json')
        .then(res => res.json())
        .then(res => setData(res))
    }, [])

    useEffect(() => {
        if(compareObjs(data, localStorage.getItem("lastStore"))) return;
        localStorage.setItem('lastStore', data)
    }, [data])

    useEffect(() => {
        setSumScores(scores.reduce((a,b) => a + b, 0))
    }, [scores])

    return <div style={
        {
            margin: 0,
            padding: 0,
            height: "100vh", /* Set the body height to 100% of the viewport height */
            display: "flex",
            flexDirection: "column"
        }
    }>
        {/* scoring Content */}
        <div style={{flex: 1}}></div>
        {/* sum */}
        <div style={
            {   
                position: "sticky",
                bottom: 0, /* Stick to the bottom of the viewport */
                backgroundColor: "green", /* Add a background color for visibility */
                padding: "10px"
            }
        }><h2>Score: {sumScores}</h2></div>
    </div>
}