import { StyleSheet, Text, Image, Dimensions, View } from 'react-native'
import React from 'react'
import Layout from "../../components/Layout"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get("screen");
const VetsinaPacientek = () => {
    const { navigate } = useNavigation();
    return (
        <Layout>
            <Image source={require("../../assets/menstruace_03.png")} style={{ width: width - 150, height: height - 320, resizeMode: "contain" }} />
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <TouchableOpacity onPress={() => {
                    //@ts-ignore
                    navigate("menstruacni-krvaceni/52tyden")
                }}>
                    <Image style={{ width: 100, height: 100, marginRight: 10 }} source={require("../../assets/men1.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //@ts-ignore
                    navigate("menstruacni-krvaceni/krevni-ztraty")
                }}>
                    <Image style={{ width: 100, height: 100, marginRight: 10 }} source={require("../../assets/men2.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //@ts-ignore
                    navigate("menstruacni-krvaceni/vetsina-pacientek")
                }}>
                    <Image style={{ width: 100, height: 100, marginRight: 10 }} source={require("../../assets/men3.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //@ts-ignore
                    navigate("menstruacni-krvaceni/klinicky-vyznamne")
                }}>
                    <Image style={{ width: 100, height: 100, marginRight: 10 }} source={require("../../assets/men4.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //@ts-ignore
                    navigate("menstruacni-krvaceni/snizeni-objemu")
                }}>
                    <Image style={{ width: 100, height: 100, marginRight: 10 }} source={require("../../assets/men5.png")} />
                </TouchableOpacity>


            </View>
        </Layout>
    )
}

export default VetsinaPacientek

const styles = StyleSheet.create({
    nadpis: {
        fontSize: 30,
        color: "#003f8b",
        marginTop: 40,
        fontWeight: "bold", textTransform: "uppercase"
    }
})