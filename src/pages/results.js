import React, {useEffect, } from 'react'
import Subiefest2022 from '../results/subiefest202.htm'
import { useState } from 'react'

export default function Results() {
    let[htmlFileString, setHtmlFileString] = useState();
    async function fetchHtml() {setHtmlFileString(await( await fetch(Subiefest2022)).text());
    }
    useEffect(()=> {
        fetchHtml();
    },[]);
      return (
        <div dangerouslySetInnerHTML={{__html: htmlFileString }}></div>
      )
    }
    
