import React, { useContext, useRef } from 'react'
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation'
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';
import { colors } from '../../../config/theme/theme';

export const Animation101Screen = () => {
    const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();
    const { colors } = useContext(ThemeContext);
    return (
        <CustomView margin style={{alignItems:'center', justifyContent: 'center'}}>
            <Animated.View style={[styles.purpleBox, {
                opacity: animatedOpacity,
                transform: [{
                    translateY: animatedTop
                }]
            }]}></Animated.View>

            <Pressable onPress={() =>  {
                fadeIn({})
                startMovingTopPosition({initialPosition: -100, easing: Easing.elastic(10), duration: 1000})
            }} style={{ marginTop: 10 }}>
                <Text style={{color: colors.text}}>FadeIn</Text>
            </Pressable>

            <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }}>
                <Text style={{color: colors.text}}>FadeOut</Text>
            </Pressable>
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150
    }
})
