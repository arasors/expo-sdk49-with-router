import React, {memo} from "react";
import { View, Text } from 'react-native';

const Loader = () => {
    return(
        <View style={{
            flex: 1,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            zIndex: 50,
            top: 0,
            left: 0,
        }}>
            <View
            >
                <Text>Loading..</Text>
            </View>
        </View>
    )
}

export default memo(Loader);
