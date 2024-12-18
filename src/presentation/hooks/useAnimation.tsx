import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({ duration = 300, toValue = 1, callBack = () => { } }) => {
        /* Animated.timing(animatedTop, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.elastic(2)
        }).start(); */

        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
        }).start(callBack);
    }

    const fadeOut = ({ duration = 300, toValue = 0, callBack = () => { } }) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true
        }).start(callBack);

        // () => animatedTop.resetAnimation()
    }

    const startMovingTopPosition = ({
        initialPosition = 0,
        toValue = 0,
        duration = 300,
        easing = Easing.linear,
        callback = () => {}
    }) => {
        animatedTop.setValue(initialPosition);
        Animated.timing(animatedTop, {
            duration: duration,
            useNativeDriver: true,
            easing: easing,
            toValue: toValue
        }).start(callback)
    }

    return {

        // properties,
        animatedOpacity,
        animatedTop,

        // methods
        fadeIn,
        fadeOut,
        startMovingTopPosition,

    }
}
