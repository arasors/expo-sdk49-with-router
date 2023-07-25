import {Slot} from "expo-router";
import Wrapper from "@/lib/Providers/Wrapper";

export default function MainLayout(){

    return(
        <Wrapper>
            <Slot />
        </Wrapper>
    )
}
