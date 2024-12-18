import React, { useState } from 'react'
import { Switch, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { CustomSwitch } from '../../components/ui/CustomSwitch'
import { Separator } from '../../components/ui/Separator'

export const SwitchScreen = () => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  })


  return (
    <CustomView margin style={{  paddingHorizontal: 0, justifyContent: 'center'  }}>

      <Card>

        {/* <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> */}


        <CustomSwitch
          text='Habilitar biometria'
          onChange={(value) => setState({ ...state, isActive: value })}
          isOn={state.isActive} />
        <Separator />


        <CustomSwitch
          text='Habilitar voz'
          onChange={(value) => setState({ ...state, isHungry: value })}
          isOn={state.isHungry} />
        <Separator />

        <CustomSwitch
          text='Habilitar Leitura QR code'
          onChange={(value) => setState({ ...state, isHappy: value })}
          isOn={state.isHappy} />
      </Card>

    </CustomView>
  )
}
