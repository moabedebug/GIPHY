import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar
 } from "react-native"

import { Ionicons } from "react-native-vector-icons"

export default function Details({  navigation, route }) {
    const data = route.params.item
    return (
        <ImageBackground
            source={require("../../assets/BG.png")}
            style={Styles.container}
        >
            <View style={Styles.a}>
                <Ionicons
                    name="chevron-back"
                    size={40}
                    color="white"
                    onPress={() => navigation.navigate("Result")}
                />
                <Text> Details </Text>
            </View>
        </ImageBackground>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        
    },
})
