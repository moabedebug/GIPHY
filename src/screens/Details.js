import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView
 } from "react-native"

import { Ionicons } from "react-native-vector-icons"

export default function Details({  navigation, route }) {
    const data = route.params.item
    return (
        <ImageBackground
        source={require("../../assets/BG.png")}
        style={Styles.container}
        >
            <SafeAreaView>
                <View style={Styles.header}>
                    <Ionicons
                        name="chevron-back"
                        size={40}
                        color="white"
                        onPress={() => navigation.pop()}
                    />
                    <Text style={Styles.text}> Details </Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,

    },
    header: {
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 22
    }
})
