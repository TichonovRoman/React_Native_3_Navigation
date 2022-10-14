import {NavigationProp, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined,
    //при переходе на "Details" в него должны передасться след. параметры:
    Details: undefined
// {
//         id: number,
//         name: string
//     },
    Users: undefined
}

//типизация пропсов для водных параметров

export type DetailsPropsType = NativeStackScreenProps<RootStackParamList, 'Details'>

// uswAppNavigation hook helper
type UseNavigationType = NavigationProp<RootStackParamList>

export const uswAppNavigation = () => useNavigation<UseNavigationType>()