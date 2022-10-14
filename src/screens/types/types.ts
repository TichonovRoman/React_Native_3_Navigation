import {NavigationProp, useNavigation} from "@react-navigation/native";

export type RootStackParamList = {
    Home: undefined,
    Details: undefined,
    Users: undefined
}
// uswAppNavigation hook helper
type UseNavigationType = NavigationProp<RootStackParamList>

export const uswAppNavigation = () => useNavigation<UseNavigationType>()