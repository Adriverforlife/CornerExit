import React from 'react'
import { Container, Link } from '@material-ui/core'
import TextCard from '../Components/TextCard'
import Main from '../pictures/sponsors/Main.png'
import Subiefest from '../pictures/subiefest.jpg'
import EventFrontPage from '../Components/EventFrontPage'

export default function Create() {

  return (
    <Container>
      <TextCard 
        title='Who Are We'
        pic={Subiefest}
        body='We are a group of Motorsport enthusiasts that can be hired to provide Event Management and Rent Equipment for Automotive Events such as Arrive and Drives, Autocrosses, Rallycrosses, Demo Courses, etc. We have helped with individual car testing all the way to staffing large autocross event as Subiefest and the Porsche Owners Club Autocross Series! If you just need a couple cones all the way to a full autocross series we can handle it all!Clients have included Speed Ventures, 86Fest, Subiefest, Triumph Club, SCCA Rallycross, various BMW Club Chapters, and more! We can accommodate events of almost any size as we have several sets of timing equipment, and WAY too many cones!'
        />

      <Link href='/autocross'>
      <TextCard
        pic={Main}
        body='Our Challenge Series is Autocross with a twist! We normally have a couple practice runs in the morning, then the 4 scored runs. However, instead of your single fastest run, we add ALL 4 RUNS together to get your overall time. This rewards the consistent driver over the "banzai" driver that hits lots of cones! We also run a looser class set up as seen below to encourage drivers to bring out their "fun" cars! After we have finished our competition we continue with fun runs for anyone that wants to continue playing. Overall its a very laid back event that is fun for everyone from 1st timers to "professional" autocrossers!'
      />
      </Link>
      <EventFrontPage/>
    </Container>
  )
}
