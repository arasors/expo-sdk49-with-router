import React, {memo} from 'react';
import {useColorScheme} from "react-native";
import { HoldMenuProvider as HoldMenuProviderWrapper } from 'react-native-hold-menu';
import {useSafeAreaInsets} from "react-native-safe-area-context"

function HoldMenuProvider({children}) {
    const colorScheme = useColorScheme();
    const insets = useSafeAreaInsets();

    return (
        <HoldMenuProviderWrapper theme={colorScheme === "dark" ? "dark" : "light"} safeAreaInsets={insets}>
            {children}
        </HoldMenuProviderWrapper>
    );
}

export default memo(HoldMenuProvider);
