import {NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootTabParamList = {
    //а это мы указываем, что внутри Home будет еще онда навигация и уточняем ее тип RootStackParamList
    Home: NavigatorScreenParams<RootStackParamList>,
    //при переходе на "Details" в него должны передасться след. параметры:
    Details: undefined
// {
//         id: number,
//         name: string
//     },
    Users: undefined
}

export type RootStackParamList = {
    ButtonScreen: undefined,
    Reg: undefined,
    Login: NavigatorScreenParams<RootStackParamList2> | undefined,
    Forgot: undefined
}
export type RootStackParamList2 = {
    Forgot: undefined
}

//типизация пропсов для водных параметров

export type DetailsPropsType = NativeStackScreenProps<RootTabParamList, 'Details'>

// uswAppNavigation hook helper
type UseNavigationType = NavigationProp<RootTabParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()