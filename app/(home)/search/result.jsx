import {View, Text, Button} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {showMessage} from "react-native-flash-message";

export default function Result() {

    const params = useLocalSearchParams();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {/*<Text style={{fontSize: 60}}>Search Result</Text>*/}
            <Text>{JSON.stringify(params, null, 3)}</Text>

            <Button title={"Show message"} onPress={() => showMessage({message: "Hi!"})} />
        </View>
    );
}
