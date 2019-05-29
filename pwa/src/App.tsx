import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";

import LayoutDrawer from "./components/LayoutDrawer";

/** Aplicação principal */
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <LayoutDrawer title="Chicó ChatBot" />
      </React.Fragment>
    );
  }
}
