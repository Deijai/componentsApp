import React, { useContext } from 'react'
import { Platform, Text, View } from 'react-native'
import { colors, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    text: string;
    safe?: boolean;
}

export const SubTitle = ({ text, safe = false}: Props) => {
    const { top } = useSafeAreaInsets();
    const { colors } = useContext(ThemeContext);
  return (
    <Text style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        //backgroundColor: colors.background
    }}>
        {text}
    </Text>
  )
}
