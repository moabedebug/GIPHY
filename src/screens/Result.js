import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native"

export default function Result({route}) {

    const choose = route.params.choose
    const link = `api.giphy.com/v1/${choose}/search`
    
    return (
        <View style={Styles.container}>
            <Text> Result </Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        padding: 5,
        backgroundColor: "#FF0000",
        borderRadius: 5,
    },
    textBtn: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 18
    }
})
