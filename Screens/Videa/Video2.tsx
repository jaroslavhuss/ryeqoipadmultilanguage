import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Video } from 'expo-av'
import Layout from '../../components/Layout';
const { width, height } = Dimensions.get("screen");
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
const Video2 = () => {

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
            <View style={{ position: "absolute", flexDirection: "row", zIndex: 122222, top: 0 }}>
                <TouchableOpacity onPress={() => {
                    navigate("video3min")
                }}>
                    <AntDesign name="caretleft" size={50} color="black" />
                </TouchableOpacity>

            </View>
            {loadComponent && <View style={{ justifyContent: "center", alignItems: "center" }}>

                <Video
                    ref={video}
                    style={styles.video}
                    source={require("../../assets/5minsm.mp4")}
                    useNativeControls
                    resizeMode="contain"
                />

            </View>}
        </Layout>
    )
}

export default Video2

const styles = StyleSheet.create({
    video: {
        width: width - 250,
        height: height - 250,
        zIndex: 1000,

    },
})