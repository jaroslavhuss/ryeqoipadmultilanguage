import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { URL } from '../Global_URL'
import AsyncStorage from '@react-native-async-storage/async-storage'
import WebView from 'react-native-webview'
const MultiPDF = ({nameOfThePDF}:{nameOfThePDF:string}) => {
    const [pdf, setPdf] = useState<string>("")
    const [loadComponent, setLoadComponent] = useState<boolean>(false)


    useFocusEffect(
        useCallback(()=>{
         
            if(Platform.OS === "ios" || Platform.OS === "android"){
                (async()=>{
                    const getTheRightImageUri:string|null = await AsyncStorage.getItem(nameOfThePDF);
                    if(getTheRightImageUri){
                      setPdf(getTheRightImageUri)
                    }
                  })()
               
            }
            else{
                (async()=>{
                    const data:string|null = await AsyncStorage.getItem("i18");
                    if(data){
                        const getUrl = JSON.parse(data);
                        setPdf(URL+getUrl[nameOfThePDF].data.attributes.url)
                    }  
                 })()
                 
            }
            setLoadComponent(true)
            return () =>{
                setLoadComponent(false)
            }
        },[nameOfThePDF])
    )


  return (
    <View style={{ width: "100%", height: "100%" }}>
                    {
                        loadComponent && <WebView
                            originWhitelist={["*"]}
                            source={{ uri: pdf }}
                            allowFileAccess = {true}
                            allowUniversalAccessFromFileURLs = {true}
                            allowFileAccessFromFileURLs = {true}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            useWebView2={true}
                            startInLoadingState={true}
                            style={{ width: "100%", height: "100%" }}
                        ></WebView>
                    }
                </View>
  )
}

export default MultiPDF

const styles = StyleSheet.create({})