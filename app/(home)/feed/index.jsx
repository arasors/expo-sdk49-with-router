import {View, Text, TouchableOpacity, ImageBackground} from "react-native";
import {Stack} from "expo-router";
import {useState} from "react";


const Logo = () => {
    return (
        <View style={{padding: 2}}>
            <Text>Git</Text>
        </View>
    );
};

export default function Index() {
    const [counter, setCounter] = useState(0);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Stack.Screen options={{
                headerTitle: (props) => <Logo {...props} />,
                headerRight: () => (
                    <TouchableOpacity onPress={() => setCounter(prev => prev+1)}>
                        <Text style={{fontSize: 40}}>+</Text>
                    </TouchableOpacity>
                )
            }} />

            <Text style={{fontSize: 60}}>Feed</Text>
            <Text style={{fontSize: 25}}>{counter}</Text>

        </View>
    );
}
