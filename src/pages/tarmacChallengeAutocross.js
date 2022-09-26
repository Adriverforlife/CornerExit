import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import TextCard from '../Components/TextCard'
import TitlePic from '../pictures/sponsors/Main.png'

import Rules from '../Components/Rules';
import Sponsorgrid from '../Components/Sponsorgrid'
import EventList from '../Components/EventList';
import axios from 'axios';


export default function Create(props) {
  const [getEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  });

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
        pic={TitlePic}
        body='Our Challenge Series is Autocross with a twist! We normally have a couple practice runs in the morning, then the 4 scored runs. However, instead of your single fastest run, we add ALL 4 RUNS together to get your overall time. This rewards the consistent driver over the "banzai" driver that hits lots of cones! We also run a looser class set up as seen below to encourage drivers to bring out their "fun" cars! After we have finished our competition we continue with fun runs for anyone that wants to continue playing. Overall its a very laid back event that is fun for everyone from 1st timers to "professional" autocrossers!'
      />
      <EventList />
      <Sponsorgrid />
      <Rules />
    </Container>
  )
}
