import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const product_image = require("../assets/table.jpg");

export default function ViewProduct() {
	return (
		<View style={styles.container}>
			<Image
				resizeMode="contain"
				style={styles.image}
				source={product_image}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "black",
		flex: 1,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});
