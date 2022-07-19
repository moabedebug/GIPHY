import React from 'react'
import { View, Text, StyleSheet, ImageBackground, StatusBar, TouchableOpacity } from "react-native"

export default function HomeScreen({ navigation }) {
    return (
        <ImageBackground 
            style={Styles.container}
            source={require("../../assets/HomePage.png")}
        >
            <StatusBar
                barStyle="light-content"
            />
            <Text style={Styles.mainText}>Pesquisar por:</Text>
                <View style={Styles.row}>
                    <TouchableOpacity 
                        style={Styles.button} 
                        onPress={() => navigation.navigate("Result")}
                    >
                        <Text style={Styles.textButton}>GIFs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={Styles.button}
                        onPress={() => navigation.navigate("Result")}
                    >
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
    mainText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold"
    },
    row: {
        flexDirection: "row",
    },
    button: {
        width: 100,
        height: 50,
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 10,
        backgroundColor: "white",
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold"
    }
})
