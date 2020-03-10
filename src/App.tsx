import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Link as LogicLink } from "react-router-dom";

import dotenv from "dotenv";
import "./App.css";
import Product from "./pages/Product";
import User from "./pages/User";
import Admin from "./pages/Admin";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    navLink: {
      flexGrow: 1,
      textAlign: "center",
      color: "white",
      textDecoration: "none",
      fontSize: "1.5rem"
    }
  })
);

const App: FC = () => {
  dotenv.config();

  const classes = useStyles();

  const userId = 123456789;

  return (
    <div className={classes.root}>
      <BrowserRouter>
        {/* App Bar */}
        <AppBar position="static">
          <Toolbar>
            <LogicLink className={classes.navLink} to="/api/v1/products/all">
              Product
            </LogicLink>
            <LogicLink className={classes.navLink} to="/api/v1/admin/products">
              Admin
            </LogicLink>
            <LogicLink className={classes.navLink} to={`/api/v1/user/user/${userId}`}>
              User
            </LogicLink>
          </Toolbar>
        </AppBar>

        <p>Hello, testing ...</p>
        <hr></hr>
        <Switch>
          <Route path="/api/v1/products/all" component={Product} />
          <Route path="/api/v1/admin/products" component={Admin} />
          <Route path={`/api/v1/user/user/${userId}`} component={User} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
