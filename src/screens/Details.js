import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Linking
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
                    <Text style={Styles.text}> Results </Text>
                </View>
                
                <View style={Styles.imageContainer}>
                    <Image
                        style={Styles.image}
                        source={{uri: data.images.original.url}}
                        resizeMode="contain"
                    />
                </View>
                <View style={Styles.textContainer}>
                    <Text style={Styles.textTitle}>{data.title}</Text>
                    <TouchableOpacity 
                        onPress={() => 
                            Linking.openURL(data.images.original.url)
                        }
                    >
                        <Ionicons
                            name="globe"
                            size={40}
                            color="white"
                        />
                    </TouchableOpacity>
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
        fontSize: 22,
        width: "80%"
    },
    imageContainer: {
        width: "100%",
        height: "50%",
        backgroundColor: "rgba(171,171,171,0.8)"
    },
    image: {
        flex: 1
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10
    },
    textTitle: {
        color: "white",
        fontSize: 18
    }
})
