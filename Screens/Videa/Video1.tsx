import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Video } from 'expo-av'
import Layout from '../../components/Layout';
const { width, height } = Dimensions.get("screen");
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
const Video1 = () => {

    const video = React.useRef(null);
    const [loadComponent, setLoadComponent] = useState<boolean>(false)
    const { navigate }: any = useNavigation();
    useFocusEffect(() => {
        setLoadComponent(true)
        return () => {
            setLoadComponent(false)
        }
    })
    return (
        <Layout>
            <View style={{ position: "relative", width: "100%", zIndex: 122222, flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => {
                    navigate("mechanismus-ucinku/relugolix")
                }}>
                    <AntDesign name="caretleft" size={50} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: "flex-end", alignContent: "flex-end" }} onPress={() => {
                    navigate("video5min")
                }}>
                    <AntDesign style={{ textAlign: "right", justifyContent: "flex-end", alignContent: "flex-end" }} name="caretright" size={50} color="black" />
                </TouchableOpacity>
            </View>


            {loadComponent && <View style={{ justifyContent: "center", alignItems: "center" }}>

                <Video
                    ref={video}
                    style={styles.video}
                    source={require("../../assets/3minsm.mp4")}
                    useNativeControls
                    resizeMode="contain"
                />

            </View>}
        </Layout>
    )
}

export default Video1

const styles = StyleSheet.create({
    video: {
        width: width - 250,
        height: height - 250,
        zIndex: 1,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
})