import { StyleSheet, Text, Image, Dimensions, View } from 'react-native'
import React from 'react'
import Layout from "../../components/Layout"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get("screen");
const KrevniZtraty = () => {
    const { navigate } = useNavigation();
    return (
        <Layout>
            <Image source={require("../../assets/bolest.png")} style={{ width: width - 75, height: height - 320, resizeMode: "contain" }} />
        </Layout>
    )
}

export default KrevniZtraty

const styles = StyleSheet.create({
    nadpis: {
        fontSize: 30,
        color: "#003f8b",
        marginTop: 40,
        fontWeight: "bold", textTransform: "uppercase"
    }
})