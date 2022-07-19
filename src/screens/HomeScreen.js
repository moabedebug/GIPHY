import React from 'react'
import { View, Text, StyleSheet, ImageBackground, StatusBar, TouchableOpacity } from "react-native"

export default function HomeScreen() {
    return (
        <ImageBackground 
            style={{ flex: 1 }}
            source={require("../../assets/HomePage.png")}
        >
            <StatusBar
                barStyle="light-content"
            />
            <Text style={Styles.mainText}>Pesquisar por:</Text>
                <View style={Styles.row}>
                    <TouchableOpacity style={Styles.button}>
                        <Text style={Styles.textButton}>GIFs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.button}>
                        <Text style={Styles.textButton}>Stickers</Text>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})
