import React, {useEffect, } from 'react'
import { makeStyles } from '@material-ui/core'
import Subiefest2022 from '../results/subiefest202.htm'
import { useState } from 'react'

const useStyles = makeStyles({

})

export default function Results() {
    const classes = useStyles()
    let[htmlFileString, setHtmlFileString] = useState();
    async function fetchHtml() {setHtmlFileString(await( await fetch(Subiefest2022)).text());
    }
    useEffect(()=> {
        fetchHtml();
    },[]);
      return (
        <div dangerouslySetInnerHTML={{__html: htmlFileString }}></div>
        // <Container>
        //   <TextCard 
        //     title='Who Are We'
        //     pic={TitlePic}
        //     body='We are a group of Motorsport enthusiasts that can be hired to provide management and equipment for Automotive Events such as Arrive and Drives, AutoXes, RallyX, Demo courses, etc. '
        //     />
    
        //   <TextCard 
        //     title='What Size of Events Can We Handle'
        //     // pic={Subiefest}
        //     body='We have helped with individual car testing all the way to staffing large autocross event as Subiefest and the Porsche Owners Club Autocross Series! If you just need a couple cones all the way to a full autocross series we can handle it all!Clients have included Speed Ventures, 86Fest, Subiefest, Triumph Club, SCCA Rallycross, various BMW Club Chapters, and more! We can accommodate events of almost any size, as we have several sets of timing equipment, and WAY too many cones!'
        //     />
        //   <EventFrontPage/>
        // </Container>
      )
    }
    
