import React, { useState, useEffect } from 'react';
import { Typography, Button, ButtonGroup, Container, makeStyles } from '@material-ui/core';
import TextCard from '../Components/TextCard'
import TitlePic from '../pictures/997gt3.jpg'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rules from '../Components/Rules';
import EventList from '../Components/EventList';
import axios from 'axios';

const useStyles = makeStyles({})

export default function Create(props) {
  const classes = useStyles()

  function createData(name, Street, Prep, Race,) {
    return { name, Street, Prep, Race, };
  }
  const rows = [
    createData('Car', "(Factory Rated Horsepower x 5) < Factory Listed Weight", "Any", "Any"),
    createData('Wheels', "+/-1inch Diameter and Width", "Any", "Any"),
    createData('Tires', "200+ Treadwear", "200+ Treadwear", "Any"),
    createData('Brakes', "Any pads and lines, and ABS can be disabled", "Any", "Any"),
    createData('Suspension', "Any Swaybars and Shocks", "Any springs/shocks/swaybars(no mount relocations)", "Any"),
    createData('Engine/Turbo', "Stock", "Electronic Controls allowed. No Hardware changes between throttle and turbo", "Any"),
    createData('Intake/Exhaust', "Filter, Cat Back Exhaust", "Any", "Any"),
    createData('Body/Weight', "Stock except for comfort/convience(radios, shift knobs)", "Any hood/trunk, seats, shifter, steering wheel. Ground effects and 'showy'", "Any"),
    createData('Spirit of the Rules', "If a car is classed unfairly, we reserve the right to adjust its reclass according to how we feel it best fits in the spirit of our rules",),
  ];
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
    <Container>
      <TextCard
        title='Autocross Challenge Series'
        pic={TitlePic}
        body='Our Challenge Series is Autocross with a twist! We normally have a couple practice runs in the morning, then the 4 scored runs. However, instead of your single fastest run, we add ALL 4 RUNS together to get your overall time. This rewards the consistent driver over the "banzai" driver that hits lots of cones! We also run a looser class set up as seen below to encourage drivers to bring out their "fun" cars! After we have finished our competition we continue with fun runs for anyone that wants to continue playing. Overall its a very laid back event that is fun for everyone from 1st timers to "professional" autocrossers!'
      />
      <EventList />
      <Rules />
    </Container>
  )
}
