import React, { useState } from 'react'
import { 
    StyleSheet,
    StatusBar,
    SafeAreaView,
    ImageBackground,
    Keyboard,
    FlatList,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native"

import SearchBar from '../components/SearchBar.js'
import InfoText from "../components/InfoText"
import Loading from '../components/Loading.js'
import Error from '../components/Error.js'


import axios from 'axios'
import API_KEY from '../services/API_KEY.js'

export default function Result({navigation, route}) {

    const choose = route.params.choose
    const link = `https://api.giphy.com/v1/${choose}/search`

    
    const [data, setData] = useState([])
    const [text, setText] = useState("")
    const [showMessage, setShowMessage] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [showError, setShowError] = useState(false)

    async function request(text) {
        Keyboard.dismiss()
        showError && setShowError(false) 
        setShowMessage(false)
        setIsLoading(true)

        try {
            const results = await axios.get(link, {
                params: {
                    api_key: API_KEY,
                    q: text,
                    lang: "pt"
                }
            })
            // console.log(results.data.data);
            setIsLoading(false)
            setData(results.data.data)
        } catch (err) {
            console.log(err);
            setIsLoading(false)
            setShowError(true)
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
                    ListHeaderComponent={
                        <>
                            <InfoText showMessage={showMessage}/>
                            <Loading isLoading={isLoading} />
                            <Error showError={showError}/>
                        </>
                    }
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => 
                                    navigation.navigate("Details", {
                                        item:item,
                                    })
                                }
                            >
                                <Image
                                    style={Styles.image}
                                    source={{uri: item.images.preview_gif.url}}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </SafeAreaView>
        </ImageBackground>
    )
}

const {width, height} = Dimensions.get("window")
const COLUMN_WIDTH = width / 2
const IMAGE_WIDTH = COLUMN_WIDTH * 0.9

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },  
    view: {
        marginTop: StatusBar.currentHeight
    },
    image: {
        width: IMAGE_WIDTH,
        height: IMAGE_WIDTH,
        margin: IMAGE_WIDTH * 0.05
    }
})
