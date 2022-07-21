import React from "react";
import { View, Text, StyleSheet } from "react-native"

export default function Error({ showError }) {
    return showError ? (
        <Text style={Styles.text}>
            We're having problems loading the data
        </Text>
    ) : null
}

const Styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginTop: 40,
        color: "white",
        width: "80%",
        textAlign: "center",
        alignSelf: "center",
    }
})