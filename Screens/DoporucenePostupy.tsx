import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview';
import Layout from '../components/Layout';
import { useFocusEffect } from '@react-navigation/native';

const DoporucenePostupy = () => {
    const [loadComponent, setLoadComponent] = useState<boolean>(false)
    let pdf = require("../assets/pdf2.pdf");
    useFocusEffect(() => {
        setLoadComponent(true)
        return () => {
            setLoadComponent(false)
        }
    })
    return (
        <Layout>
            <View >
                <View style={{ width: "100%", height: "100%" }}>
                    {
                        loadComponent && <WebView
                            originWhitelist={["file://*", "http://*", "https://*"]}
                            source={pdf}
                            allowFileAccess
                            allowUniversalAccessFromFileURLs
                            allowFileAccessFromFileURLs
                        ></WebView>
                    }

                </View>
            </View>
        </Layout>
    )
}

export default DoporucenePostupy

const styles = StyleSheet.create({})