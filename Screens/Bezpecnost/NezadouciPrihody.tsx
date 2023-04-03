import { StyleSheet, Text, Image, Dimensions, View } from 'react-native'
import React from 'react'
import Layout from "../../components/Layout"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get("screen");
const NezadouciPrilohy = () => {
    const { navigate } = useNavigation();
    return (
        <Layout>
            <Image source={require("../../assets/bezpecnost_01.png")} style={{ width: width - 150, height: height - 350, resizeMode: "contain" }} />
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => {
                    //@ts-ignore
                    navigate("bezpecnost/nezadouciPrihody")
                }}>
                    <Image style={{ width: 100, height: 100, marginRight: 10 }} source={require("../../assets/bnahled1.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //@ts-ignore
                    navigate("bezpecnost/zmenyBMD")
                }}>
                    <Image style={{ width: 100, height: 100, marginRight: 10 }} source={require("../../assets/bnahled2.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //@ts-ignore
                    navigate("bezpecnost/vlivLecby")
                }}>
                    <Image style={{ width: 100, height: 100 }} source={require("../../assets/bnahled3.png")} />
                </TouchableOpacity>
            </View>
        </Layout>
    )
}

export default NezadouciPrilohy

const styles = StyleSheet.create({
    nadpis: {
        fontSize: 30,
        color: "#003f8b",
        marginTop: 40,
        fontWeight: "bold", textTransform: "uppercase"
    }
})