import { StyleSheet, Text, Image, Dimensions, View } from 'react-native'
import React from 'react'
import Layout from "../../components/Layout"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get("screen");
const HladinyEstradiolu = () => {
    const { navigate } = useNavigation();
    return (
        <Layout>
            <Text style={styles.nadpis}>Hladiny estradiolu</Text>
            <Text style={{ fontSize: 20 }}> <Text style={{ color: "#003f8b" }}>- modifikováno dle:</Text> Friedman. Am J Obstet Gynecol. 1990 Oct;163(4 Pt 1): 1114-9.</Text>

            <Image source={require("../../assets/mechanismus_03.png")} style={{ width: width - 150, height: height - 370, resizeMode: "contain" }} />
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => {
                    //@ts-ignore
                    navigate("mechanismus-ucinku/relugolix")
                }}>
                    <Image style={{ width: 100, height: 100, marginRight: 10 }} source={require("../../assets/mNahled1.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //@ts-ignore
                    navigate("mechanismus-ucinku/kombinovanaterapie")
                }}>
                    <Image style={{ width: 100, height: 100, marginRight: 10 }} source={require("../../assets/mNahled2.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //@ts-ignore
                    navigate("mechanismus-ucinku/hladinyEstradiolu")
                }}>
                    <Image style={{ width: 100, height: 100, marginRight: 10 }} source={require("../../assets/mNahled3.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //@ts-ignore
                    navigate("video3min")
                }}>
                    <Image style={{ width: 100, height: 100, marginRight: 10 }} source={require("../../assets/video1.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //@ts-ignore
                    navigate("video5min")
                }}>
                    <Image style={{ width: 100, height: 100 }} source={require("../../assets/video2.png")} />
                </TouchableOpacity>
            </View>
        </Layout>
    )
}

export default HladinyEstradiolu

const styles = StyleSheet.create({
    nadpis: {
        fontSize: 30,
        color: "#003f8b",
        marginTop: 40,
        fontWeight: "bold", textTransform: "uppercase"
    }
})