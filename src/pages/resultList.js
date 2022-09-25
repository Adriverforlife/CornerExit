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
import App from '../App'

const useStyles = makeStyles({
})


export default function EventList(props) {
    const classes = useStyles()
  
    const [results, getEvents] = useState([]);
  
    useEffect(() => {
    //   getAllEvents();
    }, []);
  
  
  
    return (
  
      <TableContainer component={Paper}>
        <Typography variant="h5" component="h2">
          Upcoming Events</Typography>
          <Typography variant="body2" component="p">Results for Events Are Below.</Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Event</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Venue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((event) => (
              <TableRow key={event.name}>
                <TableCell component="th" scope="event">
                  <Link href={event.detailuri}> {event.name}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  
    )
  
  }