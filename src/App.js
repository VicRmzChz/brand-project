import React, { Fragment } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Info } from "./components/Info";

export function App() {
  return (
    <Fragment>
      <div className="hero-img"></div>
      <div className="wrapper">
        <Header />
        <Main />
        <Info />
      </div>
    </Fragment>
  );
}