import React, { Component } from "react";
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

interface ILayoutDrawerProps {
  /** Titulo da página */
  title: string;
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
    const { title } = this.props;
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
            {/* Cabeçalho do menu com botão close */}
            <div className={styles.drawerHeader}>
              <IconButton onClick={this.toggleMenu}>
                <ChevronLeftIcon />
              </IconButton>
            </div>

            <Divider />
            {/* Items do menu */}
            <MenuListItems />
          </Drawer>
        </nav>
      </div>
    );
  }

  /** Inverte o estado atual do menu para show ou hide */
  private toggleMenu = () => {
    const { openMenu } = this.state;
    this.setState({ openMenu: !openMenu });
  };
}
