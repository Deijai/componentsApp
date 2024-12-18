import React, { useState } from 'react'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { FadeInImage } from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {
        console.log('loadMore')
        const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);


        setTimeout(() => {
            setNumbers([...numbers, ...newArray])
        }, 3000);

    }


    return (
        <View style={{backgroundColor: 'black'}}>
            <FlatList
            showsVerticalScrollIndicator={false}
                onEndReached={loadMore}
                onEndReachedThreshold={0.6}
                data={numbers}
                renderItem={({ item }) => <ListItem number={item} />}
                ListFooterComponent={() => (
                    <View style={{height: 150, justifyContent: 'center'}}>
                        <ActivityIndicator size={40} color={colors.primary} />
                    </View>
                )}
            />
        </View>
    )
}


interface ListItemProps {
    number: number
}



const ListItem = ({ number }: ListItemProps) => {
    return (
        <FadeInImage style={{ height: 400, width: '100%' }} uri={`https://picsum.photos/id/${number}/500/400`} />
    )
}
