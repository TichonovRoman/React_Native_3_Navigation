import {Main} from "./src/screens/Main";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {store} from "./src/store/store";


// <NavigationContainer> оборачиваем здесь, на верхнем уровне и всю локигу апп прячем в компонент мейн
// Это лучшая практика

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <Main/>
            </Provider>
        </NavigationContainer>
    );
}

