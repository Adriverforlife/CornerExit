import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SimpleMenu from '../Components/Menu'
import { Container } from '@material-ui/core';
import bannerPicture from '../pictures/cornerExit.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bannerImage: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    maxWidth: "sm"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.bannerImage}>
          <img width="50%" src={bannerPicture} alt="Logo" />
      </Container>
      <AppBar position="sticky">
        <Toolbar>
            <SimpleMenu />
          <Typography variant="h6" className={classes.title}>
            Automotive Event Management
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}