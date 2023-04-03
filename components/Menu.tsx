import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const { navigate }: any = useNavigation();
    return (
        <View style={{ zIndex: 200 }}>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>


            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>

        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    menuText: {
        color: "white",
        fontWeight: "bold",
        marginBottom: 18,
        fontSize: 20,
        marginLeft: 20,
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 2000
    }
})