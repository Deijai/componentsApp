import React, { ReactNode, useContext } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  margin: boolean
}

export const CustomView = ({ style, children, margin }: Props) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[
      globalStyles.mainContainer, 
      style, 
      margin ? globalStyles.globalMargin : null,
      {
        backgroundColor: colors.background
      }
      ]}>
      {children}
    </View>
  )
}