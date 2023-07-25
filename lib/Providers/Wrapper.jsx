import React, {memo} from 'react';
import {useColorScheme} from "react-native";
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {Provider as AuthProvider} from "../context/auth";

function Wrapper({children}) {
    const colorScheme = useColorScheme();

    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}

export default memo(Wrapper);
