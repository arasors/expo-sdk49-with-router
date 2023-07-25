import {Stack} from "expo-router";

export default function (){
    return (
        <Stack>
            <Stack.Screen
                name={"index"}
                options={{
                    title: "Search"
                }}
            />
            <Stack.Screen
                name={"result"}
                options={{
                    title: "Search Result"
                }}
            />
        </Stack>
    )
}
