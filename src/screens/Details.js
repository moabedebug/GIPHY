import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from "react-native"

export default function Details({ route }) {
    const data = route.params.item
    return (
        <ImageBackground
            source={require("../../assets/BG.png")}
            style={Styles.container}
        >
            <View style={Styles.}>
                <Text> Details </Text>
            </View>
        </ImageBackground>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
