import { View, Text } from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function Result() {

    const params = useLocalSearchParams();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {/*<Text style={{fontSize: 60}}>Search Result</Text>*/}
            <Text>{JSON.stringify(params, null, 3)}</Text>
        </View>
    );
}
