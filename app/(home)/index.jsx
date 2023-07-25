import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard, Alert
} from "react-native";
import {useCallback, useEffect, useState} from "react";


export default function Home() {

    const [value, setValue] = useState("aras");

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text className={"font-medium text-6xl"}>Home</Text>
        </View>
    );
}
