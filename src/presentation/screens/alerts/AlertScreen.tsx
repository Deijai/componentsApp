import React from 'react'
import { Alert, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { Button } from '../../components/ui/Button';

export const AlertScreen = () => {
    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);



    const showPrompt = () => Alert.prompt('Qual é o seu e-mail?',
        'Informe seu e-mail',
        (value: string) => {
            console.log(value)
        },
        'default',
        '',
        '',
        {}
    );

    return (
        <CustomView margin>
            <Title safe text="Alertas" />


            <Button text="Alerta - 2 Botões" onPress={createTwoButtonAlert} />
            <Button text="Alerta - 3 Botões" onPress={createThreeButtonAlert} />
            <Button text="Prompt" onPress={showPrompt} />
        </CustomView>
    )
}
