import {Stack} from "expo-router";

export default function (){
    return(
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#fff",
                },
                headerTintColor: "#000",
                headerTitleStyle: {
                    fontWeight: "bold",
                }
            }}
        >
            <Stack.Screen
                name={"index"}
                options={{
                    title: "Feed",

                }}
            />
        </Stack>
    )
}
