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
            <Text style={{fontSize: 60}}>Home</Text>
        </View>
    );
}
