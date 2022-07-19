import React from 'react'
import { View, Text, StyleSheet, ImageBackground, StatusBar } from "react-native"

export default function HomeScreen() {
    return (
        <ImageBackground 
            style={{ flex: 1 }}
            source={require("../../assets/HomePage.png")}
        >
            <StatusBar
                barStyle="light-content"
            />
        </ImageBackground>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})
