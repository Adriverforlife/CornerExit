import React from 'react'
import { Typography, Button, ButtonGroup, Container, makeStyles } from '@material-ui/core'
import { Home, ImportContacts, Send } from '@material-ui/icons'
import TextCard from '../Components/TextCard'
import TitlePic from '../pictures/996gt3.jpeg'
import Subiefest from '../pictures/subiefest.jpg'
import EventFrontPage from '../Components/EventFrontPage'

const useStyles = makeStyles({

})

export default function Create() {
const classes = useStyles()

  return (
    <Container>
      <TextCard 
        title='Who Are We'
        pic={TitlePic}
        body='We are a group of Motorsport enthusiasts that can be hired to provide management and equipment for Automotive Events such as Arrive and Drives, AutoXes, RallyX, Demo courses, etc. '
        />

      <TextCard 
        title='What Size of Events Can We Handle'
        // pic={Subiefest}
        body='We have helped with individual car testing all the way to staffing large autocross event as Subiefest and the Porsche Owners Club Autocross Series! If you just need a couple cones all the way to a full autocross series we can handle it all!Clients have included Speed Ventures, 86Fest, Subiefest, Triumph Club, SCCA Rallycross, various BMW Club Chapters, and more! We can accommodate events of almost any size, as we have several sets of timing equipment, and WAY too many cones!'
        />
      <EventFrontPage/>
    </Container>
  )
}
