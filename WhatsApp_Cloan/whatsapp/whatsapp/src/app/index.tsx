import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import {
    useFonts,
    Poppins_700Bold_Italic,
    Poppins_300Light,
} from "@expo-google-fonts/poppins"
import imagePath from "../constants/imagePath";
import * as SplashScreen  from "expo-splash-screen";

const Home = () => {
    const [loaded, error] = useFonts({
        Poppins_700Bold_Italic,
        Poppins_300Light,
    });

    useEffect(()=>{
        if(loaded) {
            SplashScreen.hideAsync();
        }
    },[loaded])
    return (
        <View 
            style={{
                flex:1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black"
            }}
        >
            <Text style={{
                fontSize: 32,
                fontWeight: "600",
                color: "orange",
                fontFamily: "Poppins_300Light"
            }}
        >
            Home
        </Text>
            <Image source={imagePath.react_logo} />
        </View>
    );
};

export default Home;