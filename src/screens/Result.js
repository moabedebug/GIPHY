import React from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ImageBackground } from "react-native"

export default function Result({route}) {

    const choose = route.params.choose
    const link = `api.giphy.com/v1/${choose}/search`
    
    return (
        <ImageBackground
            source={require("../../assets/BG.png")}
            style={Styles.container}
        >
            <SafeAreaView style={Styles.view}>
                <Text> Result </Text>
            </SafeAreaView>
        </ImageBackground>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },  
    view: {
        marginTop: StatusBar.currentHeight
    },
})
