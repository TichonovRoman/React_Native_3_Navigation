import {Main} from "./src/screens/Main";
import {NavigationContainer} from "@react-navigation/native";


// <NavigationContainer> оборачиваем здесь, на верхнем уровне и всю локигу апп прячем в компонент мейн
// Это лучшая практика

export default function App() {
    return (
        <NavigationContainer>
            <Main/>
        </NavigationContainer>
    );
}

