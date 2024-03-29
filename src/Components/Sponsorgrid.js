import React, {useEffect } from 'react'
import { Grid, Link, Typography, Paper } from '@material-ui/core'
import TextCard from './LinkCard'
import Alpine from "../pictures/sponsors/Alpine.png";
import FMC from "../pictures/sponsors/FMC.png";
import Motomates from "../pictures/sponsors/Motomates.png";
import Swift from "../pictures/sponsors/Swift.png";
import TPM from "../pictures/sponsors/TPM.png";
import OS from "../pictures/sponsors/OS.png";


export default function Sponsorgrid() {
    useEffect(()=> {
  
    },[]);
    return (
      <Grid container spacing={2} component={Paper}>
        <Grid item xs={12}>
        
          <Grid item xs={12}>

        </Grid>
        <Typography variant="h5" component="h2">
           Sponsors and Partners
        </Typography>
        <Typography variant="body1" component="p">
         Our title Sponsor <Link href="https://osgikenusa.com/">OS Giken </Link>along with the following Series Sponsors and Partners allow us to hold our series! We want to thank all of them for making our series possible!
        </Typography>
        <Grid item xs={12}>
          <Link href="https://osgikenusa.com/">
        <TextCard pic={OS} />
        </Link>
        </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link href="https://www.alpinestars.com/auto">
        <TextCard pic={Alpine} />
        </Link>
        </Grid>			<Grid item xs={12} md={6}>
          <Link href="https://trueperformancemotorsport.com/">
        <TextCard pic={TPM} />
        </Link>
        </Grid>			<Grid item xs={12} md={6}>
          <Link>
        <TextCard pic={Motomates} />
          </Link>
        </Grid>			<Grid item xs={12} md={6}>
          <Link href="https://www.swiftsprings.com/">
        <TextCard pic={Swift} />
        </Link>
        </Grid><Grid item xs={12}>
          <Link href="https://www.apmortgage.com/mission-viejo-ca-0">
        <TextCard pic={FMC} />
        </Link>
        </Grid>
      </Grid>
    );
    
    }