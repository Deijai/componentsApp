
import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';
import { ThemeContext } from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {

  const { setTheme, currentTheme } = useContext(ThemeContext);

  return (
    <CustomView margin>
        <Title text={`Change Theme: ${currentTheme}`} safe />


        <Button text='Ligth' onPress={() => setTheme('light')} />
        <Button text='Dark' onPress={() => setTheme('dark')} />
    </CustomView>
  )
}
