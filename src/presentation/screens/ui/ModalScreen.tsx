import React, { useContext, useState } from 'react'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { Button } from '../../components/ui/Button'
import { ThemeContext } from '../../context/ThemeContext'

export const ModalScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { colors } = useContext(ThemeContext);

    return (
        <CustomView margin>
            <Title text='Modal' />

            <Button text='Abrir Modal' onPress={() => setModalVisible(true)} />

            <Modal
                visible={modalVisible}
                animationType='slide'
            >
                <View style={{
                    flex: 1,
                    backgroundColor: colors.background
                }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Title text='Modal COntent' />
                    </View>

                    <View style={{ flex: 1, }}>
                        <Button text='Fechar Modal' onPress={() => setModalVisible(!modalVisible)} />
                    </View>


                </View>
            </Modal>


            {/*  <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View>
                    <Title text='Modal Content' safe />
                </View>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}

        </CustomView>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
