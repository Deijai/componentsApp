import React, { useState } from 'react'
import { Image, ImageStyle, StyleProp, Animated, View, ActivityIndicator } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {

    const { animatedOpacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState<boolean>(true);



    return (
        <View style={[{ justifyContent: 'center', alignItems: 'center' }]}>

            {
                isLoading && (<ActivityIndicator style={{ position: 'absolute' }} color={'grey'} size={30} />)
            }

            <Animated.Image style={[style, { opacity: animatedOpacity }]} source={{ uri }} onLoadEnd={() => {
                fadeIn({ duration: 1000 });
                setIsLoading(false);
            }} />
        </View>
    )
}
