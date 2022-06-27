import React, { useState, useEffect } from 'react';
import { Typography, Button, ButtonGroup, Container, makeStyles } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link'
import Moment from 'react-moment';
import axios from 'axios';

const useStyles = makeStyles({})


export default function EventList(props) {
  const classes = useStyles()

  const [events, getEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  }, []);

  function getAllEvents() {
    axios.get(`https://api.motorsportreg.com/rest/calendars/organization/F19F66B9-D516-5FEE-B4ABB9A12E335B59.json`)
      .then(res => {
        const allEvents = res.data.response.events;
        getEvents(allEvents)
      })
  }


  return (

    <TableContainer component={Paper}>
      <Typography variant="h5" component="h2">
        Upcoming Events</Typography>
        <Typography variant="body2" component="p">We host an Autocross Series of our own. Our upcoming events are listed below. Go to the <Link href='/autocross'>Autocross Challenge</Link> Page for more details!</Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Venue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.name}>
              <TableCell component="th" scope="event">
                <Link href={event.detailuri}> {event.name}</Link>
              </TableCell>
              <TableCell align="right"><Moment format="MM/DD/YYYY">{event.start}</Moment></TableCell>
              <TableCell align="right">{event.venue.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )

}