import { Image, Dimensions } from 'react-native'
import React from 'react'
import Layout from "../../components/Layout"
const { width, height } = Dimensions.get("screen");
const QoL = () => {
    return (
        <Layout>
            <Image source={require("../../assets/qol.png")} style={{ width: width - 75, height: height - 320, resizeMode: "contain" }} />
        </Layout>
    )
}

export default QoL
