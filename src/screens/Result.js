import React from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native"

export default function Result({route}) {

    const choose = route.params.choose
    const link = `api.giphy.com/v1/${choose}/search`
    
    return (
        <SafeAreaView style={Styles.view}>
            <Text> Result </Text>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    view: {
        marginTop: StatusBar.currentHeight
    },
})
