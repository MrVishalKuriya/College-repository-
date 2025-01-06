import React, { useEffect, useState } from "react";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
    const [isLogin, setIsLogin] = useState(true);
    useEffect(() => {
        SplashScreen.hideAsync();
    }, []);
    return (
        <>
        <Stack />
        { isLogin ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} /> }
        </>
    );
};

export default RootLayout;