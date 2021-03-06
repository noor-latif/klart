import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";

const welcome_bg = require("../assets/background.jpg");
const logo = require("../assets/logo.png");

export default function Welcome() {
	return (
		<ImageBackground style={styles.background} source={welcome_bg}>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={logo} />
				<Text>Sell what you're done with. Klart!</Text>
			</View>
			<View style={styles.registerButton}></View>
			<View style={styles.loginButton}></View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	logo: {
		height: 200,
		width: 200,
	},
	logoContainer: {
		position: "absolute",
		top: "15%",
		alignItems: "center",
	},
	loginButton: {
		width: "100%",
		height: 50,
		backgroundColor: "#69C4DA",
	},
	registerButton: {
		width: "100%",
		height: 50,
		backgroundColor: "#1F9DC6",
	},
});
