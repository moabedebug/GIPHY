import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ImageBackground, TextInput } from "react-native"

import { Ionicons } from "react-native-vector-icons"

export default function Result({route}) {

    const choose = route.params.choose
    const link = `api.giphy.com/v1/${choose}/search`

    const [text, setText] = useState("")
    
    return (
        <ImageBackground
            source={require("../../assets/BG.png")}
            style={Styles.container}
        >
            <SafeAreaView style={Styles.view}>
                <View style={Styles.row}>
                    <Ionicons
                        name="chevron-back"
                        size={40}
                        color="white"m
                        onPress={() => {}}
                    /> 
                    <TextInput
                        placeholder='Pesquisar'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={text}
                        onChangeText={(value) => setText(value)}
                        style={Styles.TextInput}
                    />
                    <Ionicons
                        name="search"
                        size={40}
                        color="white"
                        onPress={() => {}}
                    />
                </View>
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
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    TextInput: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 25,
        fontSize: 20,
        paddingHorizontal: 20
    }
})
