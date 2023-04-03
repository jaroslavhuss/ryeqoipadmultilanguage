import React, { useEffect, useState } from 'react'
import { Dimensions, View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native'
type dim = {
    width: number,
    height: number
}
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Layout = ({ children }: any) => {
    const { navigate } = useNavigation()
    const { width, height }: dim = Dimensions.get("window");
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
    const { name } = useRoute();
    useEffect(() => {
        if (name === "mechanismus-ucinku/relugolix") {
            setIsMenuOpened(true)
        }
    }, [])
    const Menu = () => (
        <View style={{ zIndex: 3003030, height, width: width / 5, backgroundColor: "purple" }}>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <TouchableOpacity onPress={() => {
                setIsMenuOpened(false)
                //@ts-ignore
                navigate("mechanismus-ucinku/relugolix")
            }}>
                <Text style={styles.menuItem}>Mechanismus{"\n"}účinku</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setIsMenuOpened(false)
                //@ts-ignore
                navigate("menstruacni-krvaceni/52tyden")
            }}>
                <Text style={styles.menuItem}>Menstruační{"\n"}krvácení</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setIsMenuOpened(false)
                //@ts-ignore
                navigate("bolest")
            }}>
                <Text style={styles.menuItem}>Bolest</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setIsMenuOpened(false)
                //@ts-ignore
                navigate("bezpecnost/nezadouciPrihody")
            }}>
                <Text style={styles.menuItem}>Bezpečnost</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setIsMenuOpened(false)
                //@ts-ignore
                navigate("qol")
            }}>
                <Text style={styles.menuItem}>QoL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setIsMenuOpened(false)
                //@ts-ignore
                navigate("doporucenePostupy")
            }}>
                <Text style={styles.menuItem}>Doporučené{"\n"}postupy</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setIsMenuOpened(false)
                //@ts-ignore
                navigate("spc")
            }}>
                <Text style={styles.menuItem}>SPC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                position: "absolute",
                bottom: 0,
                left: "40%"
            }} onPress={() => {
                setIsMenuOpened(!isMenuOpened)
            }}>
                <AntDesign name="closecircleo" size={44} color="white" />
            </TouchableOpacity>

        </View>
    )
    return (
        <View style={{ width, height }}>
            {
                !isMenuOpened &&
                <TouchableOpacity style={{
                    position: "absolute",
                    bottom: 0,

                    marginLeft: 75,
                    marginBottom: 5,
                    backgroundColor: "pink",
                    borderRadius: 12
                }} onPress={() => {
                    setIsMenuOpened(!isMenuOpened)
                }}>
                    <Entypo name="menu" size={44} color="white" />
                </TouchableOpacity>

            }
            {isMenuOpened &&
                <View style={{
                    position: "absolute",
                    top: 0,
                    left: 0
                }}>
                    <Menu />
                </View>}
            <ImageBackground style={[styles.mainLayout, styles.bg, { width, height, zIndex: -1 }]} source={width === 1180 ? require("../assets/ryeqo_bg_bigger.png") : require("../assets/ryeqo_bg_original.png")}>
                <View style={styles.children}>

                    {children}
                </View>
                <TouchableOpacity onPress={() => {
                    //@ts-ignore
                    navigate("Main")
                }} style={{ position: "absolute", width: 170, height: 120, bottom: 0, right: 0, zIndex: 100 }}>

                </TouchableOpacity>

            </ImageBackground>
        </View>

    )

}

export default Layout

const styles = StyleSheet.create({
    mainLayout: {
        flex: 1,
        flexDirection: "row",
        position: "relative",
        zIndex: -1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    menu: {
        flex: 3,
    },
    children: {
        flex: 10,
        flexDirection: "column",
        position: "relative",
        zIndex: 1
    },
    bg: {
        backgroundColor: "white",
        position: "relative"
    },
    menuItem: {
        color: "white",
        padding: 4,
        margin: 5,
        fontSize: 25
    }
});
