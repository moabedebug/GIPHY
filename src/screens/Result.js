import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ImageBackground, TextInput, keyboard, Keyboard } from "react-native"

import SearchBar from '../components/SearchBar.js'

import axios from 'axios'
import API_KEY from '../services/API_KEY.js'

export default function Result({navigation, route}) {

    const choose = route.params.choose
    const link = `https://api.giphy.com/v1/${choose}/search`

    
    const [data, setData] = useState([])
    const [text, setText] = useState("")

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
                <SearchBar
                    navigation={navigation}
                    text={text}
                    setText={setText}
                    request={request}
                />
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
