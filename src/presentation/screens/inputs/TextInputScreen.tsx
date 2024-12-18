import React, { useState } from 'react'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Card } from '../../components/ui/Card'
import { ScrollView, Text, TextInput, View } from 'react-native'

export const TextInputScreen = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })

  return (
    <ScrollView>
        <CustomView margin>
        <Title text='Text Inputs' safe />


        <Card>
            <TextInput style={globalStyles.input}
            placeholder='Nome completo'
            value={form.name}
            onChangeText={(value) => setForm({...form, name: value})}
            autoCapitalize={'words'}
            autoCorrect={false}

             />

         <TextInput style={globalStyles.input}
            placeholder='E-mail'
            value={form.email}
            onChangeText={(value) => setForm({...form, email: value})}
            autoCapitalize={'none'}
            keyboardType='email-address'
            autoCorrect={false}
            inputMode='email'

             />

        <TextInput style={globalStyles.input}
            placeholder='Phone'
            value={form.phone}
            onChangeText={(value) => setForm({...form, phone: value})}
            autoCapitalize={'none'}
            keyboardType='phone-pad'
            inputMode='tel'
            autoCorrect={false}

             />
        </Card>

        <View style={{height: 10}}></View>

        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>
        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>

        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>

        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>

        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>

        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>

        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>

        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>
        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>
        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>
        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>
        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>
        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>
        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>
        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>
        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>
        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>
        <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
        </Card>



    </CustomView>
    </ScrollView>
  )
}
