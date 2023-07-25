import { Tabs } from "expo-router";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";

export default function HomeLayout() {
    return (
        <Tabs>
            <Tabs.Screen name={"index"}
                         options={
                                {
                                    title: "Home",
                                    tabBarIcon: ({color, size}) => <AntDesign name="home" size={size} color={color} />
                                }
            }
            />
            <Tabs.Screen name={"search"}
                         options={
                                {
                                    title: "Search",
                                    tabBarIcon: ({color, size}) => <AntDesign name="search1" size={size} color={color} />,
                                    headerShown: false
                                }
            }
            />
            <Tabs.Screen name={"feed"}
                         options={
                                {
                                    title: "Feed",
                                    tabBarIcon: ({color, size}) => <MaterialIcons name="rss-feed" size={size} color={color}/>,
                                    headerShown: false
                                }
            }
            />
        </Tabs>
    );
}
