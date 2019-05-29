import React, { Component } from "react";
import LayoutDrawer from "../components/LayoutDrawer";

/** Page inicial com informações e instruções sobre o app */
export default class Home extends Component {
  public render() {
    return (
      <LayoutDrawer title="Chicó - Home">
        <div>Olá mundo!</div>
      </LayoutDrawer>
    );
  }
}
