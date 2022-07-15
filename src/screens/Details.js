import React from 'react'
import { View, Text, StyleSheet } from "react-native"

export default function Details() {
    return (
        <View style={Styles.container}>
            <Text> Details</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
