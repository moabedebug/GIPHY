import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ImageBackground, TextInput, keyboard, Keyboard } from "react-native"

import { Ionicons } from "react-native-vector-icons"

import axios from 'axios'
import API_KEY from '../services/API_KEY.js'

export default function Result({navigation, route}) {

    const choose = route.params.choose
    const link = `https://api.giphy.com/v1/${choose}/search`

    const [text, setText] = useState("")
    const [data, setData] = useState([])

    async function request(text) {
        Keyboard.dismiss()

        try {
            const results = await axios.get(link, {
                params: {
                    api_key: API_KEY,
                    q: text,
                    lang: "pt"
                }
            })
            console.log(results.data.data);
            setData(results.data.data)
        } catch (err) {
            console.log(err);
        }
    }

    
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
                        onPress={() => {navigation.navigate("HomeScreen")}}
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
                        onPress={() => {request(text)}}
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
