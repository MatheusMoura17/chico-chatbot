import React, { Component, ReactNode } from "react";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuListItems from "./MenuListItems";

import styles from "./LayoutDrawer.scss";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

interface ILayoutDrawerProps {
  /** Titulo da página */
  title: string;
  children: ReactNode;
}

interface ILayoutDrawerStates {
  /** Abre ou fecha o menu */
  openMenu: boolean;
}

/** Drawer padrão de todas as telas do app */
export default class LayoutDrawer extends Component<
  ILayoutDrawerProps,
  ILayoutDrawerStates
> {
  public state: ILayoutDrawerStates = {
    openMenu: false
  };

  public render() {
    const { children, title } = this.props;
    const { openMenu } = this.state;
    return (
      <div>
        {/* Cabeçalho */}
        <AppBar position="fixed">
          <Toolbar>
            <IconButton onClick={this.toggleMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Barra de navegação responsiva */}
        <nav>
          <Drawer
            variant="temporary"
            anchor="left"
            open={openMenu}
            onClose={this.toggleMenu}
            classes={{
              paper: styles.drawer
            }}
            ModalProps={{
              // melhora a performance no mobile
              keepMounted: true
            }}
          >
            <List>
              <ListItem onClick={this.toggleMenu} button>
                <ListItemIcon>
                  <ChevronLeftIcon />
                </ListItemIcon>
                <ListItemText primary="Menu" />
              </ListItem>
            </List>

            <Divider />
            {/* Items do menu */}
            <MenuListItems />
          </Drawer>
        </nav>

        {/** Conteúdo da página */}
        <main className={styles.content}>
          <div>{children}</div>
        </main>
      </div>
    );
  }

  /** Inverte o estado atual do menu para show ou hide */
  private toggleMenu = () => {
    const { openMenu } = this.state;
    this.setState({ openMenu: !openMenu });
  };
}
