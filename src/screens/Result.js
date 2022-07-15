import React from 'react'
import { View, Text, StyleSheet } from "react-native"

export default function Result() {
    return (
        <View style={Styles.container}>
            <Text> Result</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
