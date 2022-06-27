import React from "react";
import {
	Typography,
	Button,
	ButtonGroup,
	Container,
	makeStyles,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextCard from "../Components/TextCard";
import Street from "../pictures/Street.jpg";
import SuperStreet from "../pictures/SuperStreet.jpg";
import Prep from "../pictures/Prep.jpg";
import Mod from "../pictures/Mod.jpg";

const useStyles = makeStyles({});

export default function Rules(props) {
	const classes = useStyles();

	function createData(name, Street, Prep, Race) {
		return { name, Street, Prep, Race };
	}
	const rows = [
		createData(
			"Car",
			"(Factory Rated Horsepower x 5) < Factory Listed Weight",
			"Any",
			"Any"
		),
		createData("Wheels", "+/-1inch Diameter and Width", "Any", "Any"),
		createData("Tires", "200+ Treadwear", "200+ Treadwear", "Any"),
		createData(
			"Brakes",
			"Any pads and lines, and ABS can be disabled",
			"Any",
			"Any"
		),
		createData(
			"Suspension",
			"Any Swaybars and Shocks",
			"Any springs/shocks/swaybars(no mount relocations)",
			"Any"
		),
		createData(
			"Engine/Turbo",
			"Stock",
			"Electronic Controls allowed. No Hardware changes between throttle and turbo",
			"Any"
		),
		createData("Intake/Exhaust", "Filter, Cat Back Exhaust", "Any", "Any"),
		createData(
			"Body/Weight",
			"Stock except for comfort/convience(radios, shift knobs)",
			"Any hood/trunk, seats, shifter, steering wheel. Ground effects and 'showy'",
			"Any"
		),
		createData(
			"Spirit of the Rules",
			"If a car is classed unfairly, we reserve the right to adjust its reclass according to how we feel it best fits in the spirit of our rules"
		),
	];
	return (
		<TableContainer component={Paper}>
			<Typography variant="h5" component="h2">
				Car Classification/Rules
			</Typography>
			<Typography variant="body2" component="p">
				We have 4 basic classes that are broken down in the images below. We are
				open to creating more specialty classes for car clubs/groups if there is
				enough interest. Just go to our contact page to message us if you are
				intested in this!
			</Typography>
			<TextCard pic={Street} /> <TextCard pic={SuperStreet} />{" "}
			<TextCard pic={Prep} /> <TextCard pic={Mod} />
		</TableContainer>
	);
}
