import { StyleSheet, Text, Image, Dimensions, View } from 'react-native'
import React from 'react'
import Layout from "../../components/Layout"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import SecuredMarkdown from '../../components/SecuredMarkdown';
const { width, height } = Dimensions.get("screen");
const Relugolix = () => {
    const { navigate } = useNavigation();
    return (
        <Layout>            
        <SecuredMarkdown element='text' style={styles.nadpis} keyName="ActionMechanismHeadline1" />
           <View style={{flexDirection:"row", alignItems:"center"}}>
            <View style={{width:width/2}}>
            <SecuredMarkdown element='markdown' keyName="ActionMechanismParagraph1" />
            </View>
          
            <Image source={require("../../assets/mechanismus_01.png")} style={{ width:400, height: height - 350, resizeMode: "contain" }} />
           </View>
       
            
            
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

export default Relugolix

const styles = StyleSheet.create({
    nadpis: {
        fontSize: 30,
        color: "#003f8b",
        marginTop: 40,
        fontWeight: "bold", textTransform: "uppercase"
    }
})