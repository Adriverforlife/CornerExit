import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin:50
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  bannerImage: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    maxWidth: "sm"
  },

});

export default function TextCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
          <Container className={classes.bannerImage}>
          <img width="50%" src={props.pic} />
          </Container>
        <Typography variant="h5" component="h2">
            {props.title}
            <br/>
        </Typography>
        <Typography variant="body2" component="p">
        {props.body}<br/>

        </Typography>
      </CardContent>
    </Card>
  );
}