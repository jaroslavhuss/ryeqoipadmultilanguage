import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("screen");
const MainPage = () => {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity onPress={() => {
            //@ts-ignore
            navigate("mechanismus-ucinku/relugolix")
        }}>
            <Image style={{
                resizeMode: "contain",
                width,
                height,

            }} width={width} height={height} source={width === 1180 ? require("../assets/ryeqo_main_bigger.png") : require("../assets/ryeqo_main_original.png")} />
        </TouchableOpacity>
    )
}

export default MainPage

const styles = StyleSheet.create({})