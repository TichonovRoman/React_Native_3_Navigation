import React from 'react';
import {Button, Text, View} from "react-native";
import {DetailsPropsType, uswAppNavigation} from "../types/types";

//параметры при наигации приходят в пропсах

const DetailsScreen = ({route}: DetailsPropsType) => {

    const params = route.params

    const navigation = uswAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            {/*такая проверка обязательна т.к. при нажатии рна меню (кроме кнопки) данные не приходят сразу*/}
            {params && <>
                <Text>{params.id}</Text>
                <Text>{params.name}</Text>
            </>
            }

            <Button title={'step users'} onPress={() => {
                navigation.navigate('Users')
            }}/>
        </View>
    );
};

export default DetailsScreen;