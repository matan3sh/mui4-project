import { useState } from "react";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Search, Mail, Notifications, Cancel } from "@material-ui/icons";

type StyleProps = {
  open: boolean;
};

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badges: {
    display: "flex",
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Matan's Project
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          MatanDev
        </Typography>

        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search…" className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>

        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <div className={classes.badges}>
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="secondary" className={classes.badge}>
              <Notifications />
            </Badge>
            <Avatar src="/static/images/avatar/1.jpg" />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
