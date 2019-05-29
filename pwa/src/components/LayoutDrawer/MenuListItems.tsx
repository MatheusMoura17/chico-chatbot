import React, { Component } from "react";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { ListItemIcon } from "@material-ui/core";

/** Items do menu principal */
export default class MenuListItems extends Component {
  public render() {
    return (
      <List>
        <ListItem button>
          <ListItemIcon>
            <NoteAddIcon />
          </ListItemIcon>
          <ListItemText primary="Colaborar" />
        </ListItem>
      </List>
    );
  }
}
