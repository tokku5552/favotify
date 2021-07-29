import * as React from "react";
import Link from "next/link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = ({ pathname }: { pathname?: string }) => {
  const classes = useStyles();
  return (
    <header>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Favotify
            </Typography>
            <Link href="/">
              <Button color="inherit">Top</Button>
            </Link>
            <Link href="/login">
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      {/* <Link href="/">
        <a className={pathname === "/" ? "is-active" : ""}>Favotify</a>
      </Link>
      <Link href="/about">
        <a className={pathname === "/about" ? "is-active" : ""}>About</a>
      </Link> */}
    </header>
  );
};

export default Header;
