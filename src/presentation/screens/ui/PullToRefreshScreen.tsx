import React, { useContext, useState } from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native'
import { Title } from '../../components/ui/Title'
import { CustomView } from '../../components/ui/CustomView'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemeContext } from '../../context/ThemeContext'

export const PullToRefreshScreen = () => {

    const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

    const { top } = useSafeAreaInsets()
    const { colors } = useContext(ThemeContext);

    const onRefresh = () => {
        setIsRefreshing(true);

        setTimeout(() => {
            setIsRefreshing(false)
        }, 5000);       

    }

  return (
    <ScrollView style={{backgroundColor: colors.background}}
    refreshControl={ 
    <RefreshControl
        progressViewOffset={top}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        colors={[colors.primary, 'red', 'orange', 'green']}
         /> }
    >
        <CustomView margin>
        <Title text='Pull To Refresh' safe />
    </CustomView>
    </ScrollView>
  )
}
