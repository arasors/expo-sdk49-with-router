import React, {memo} from 'react';
import {useColorScheme, View} from "react-native";
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as ReduxProvider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import Loader from "@/lib/Components/Loader";
import {persistor, store} from "@/lib/context/store";
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import HoldMenuProvider from './HoldMenuProvider';
import {SafeAreaProvider} from "react-native-safe-area-context"

function Wrapper({children}) {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <SafeAreaProvider>
                <HoldMenuProvider>
                    <GestureHandlerRootView style={{flex: 1}}>
                        <ReduxProvider store={store}>
                            <PersistGate loading={<Loader/>} persistor={persistor}>
                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, zIndex: 9999}}>
                                    <FlashMessage
                                        position={"top"}
                                        hideStatusBar={true || Platform.OS !== "android"}
                                    />
                                </View>
                                <BottomSheetModalProvider>
                                    <ActionSheetProvider>
                                        {children}
                                    </ActionSheetProvider>
                                </BottomSheetModalProvider>
                            </PersistGate>
                        </ReduxProvider>
                    </GestureHandlerRootView>
                </HoldMenuProvider>
            </SafeAreaProvider>
        </ThemeProvider>
    );
}

export default memo(Wrapper);
