import React, { useState } from 'react'
import { 
    StyleSheet,
    StatusBar,
    SafeAreaView,
    ImageBackground,
    Keyboard,
    FlatList,
    Image,
    Dimensions
} from "react-native"

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
                <FlatList
                    data={data}
                    keyExtractor={(element) => element.id}
                    numColumns={2}
                    renderItem={({item}) => {
                        return (
                            <Image
                                style={Styles.image}
                                source={{uri: item.images.preview_gif.url}}
                            />
                        )
                    }}
                />
            </SafeAreaView>
        </ImageBackground>
    )
}

const {width, height} = Dimensions.get("window")
const IMAGE_WIDTH = width

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },  
    view: {
        marginTop: StatusBar.currentHeight
    },
    image: {
        width: IMAGE_WIDTH/2,
        height: IMAGE_WIDTH/2
    }
})
