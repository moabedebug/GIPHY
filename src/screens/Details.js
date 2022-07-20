import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native"

export default function Details({ route }) {
    const data = route.params.item
    return (
        <View style={Styles.container}>
            <Text> Details </Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})
