import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import React, { Component } from "react";

export default class MenuListItems extends Component {
  public render() {
    return (
      <List>
        <ListItem button>
          <ListItemText primary="Colaborar" />
        </ListItem>
      </List>
    );
  }
}
