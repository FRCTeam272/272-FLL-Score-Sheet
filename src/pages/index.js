import * as React from "react"
import { ScoreProvider } from "../dataProvider";
import Head from "../components/headComp";
export default function Home() {
  return <ScoreProvider>
    <Head />
  </ScoreProvider>
}
