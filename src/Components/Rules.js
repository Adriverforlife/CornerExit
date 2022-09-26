import React from "react";
import {
	Typography,
	Container,
	Grid,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Street from "../pictures/Street.jpg";
import SuperStreet from "../pictures/SuperStreet.jpg";
import Prep from "../pictures/Prep.jpg";
import Mod from "../pictures/Mod.jpg";


export default function Rules(props) {

	return (
		<Grid container spacing={2} component={Paper}>
			<Grid item xs={10}>
			<Typography variant="h5" component="h2">
				Car Classification/Rules
			</Typography>

			<Typography variant="body2" component="p">
				We have 4 basic classes that are broken down in the images below. We are
				open to creating more specialty classes for car clubs/groups if there is
				enough interest. Just go to our contact page to message us if you are
				intested in this!
			</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
			<Container><img width="100%" src={Street} alt="Street Class"/></Container> 
			</Grid>			<Grid item xs={12} md={6}>
			<Container><img width="100%" src={SuperStreet} alt="Super Street Class"/></Container> 
			</Grid>			<Grid item xs={12} md={6}>
			<Container><img width="100%" src={Prep} alt="Prep Class" /></Container> 
			</Grid>			<Grid item xs={12} md={6}>
			<Container><img width="100%" src={Mod} alt="Mod Class" /></Container> 
			</Grid>
		</Grid>
	);
}
