import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'

export default function GoalInput({ onAddPress, visible, closeModal }) {
    const [inputStr, setInputStr] = useState('');

    const inputHandler = (value) => {
        setInputStr(value)
    }

    const addGoalHandler = () => {
        onAddPress(inputStr)
        setInputStr('')
    }

    return (
      <Modal visible={visible} animationType={'slide'}>
        <View style={styles.inputContainer}>
          <Image source={require('../assets/images/goal.png')} style={styles.image} />
            <TextInput
              style={styles.textInput}
              onChangeText={inputHandler}
              placeholder='Your course goal'
              value={inputStr}
            />
            <View style={styles?.buttonContainer}>
              <View style={styles?.button}>
               <Button title='Add goal' onPress={addGoalHandler} color='#b180f0' />
              </View>
              <View style={styles?.button}>
                <Button title='Cancel' onPress={closeModal} color='#f31282' />
              </View>
            </View>
          </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      image: {
        width: 100,
        height: 100,
        margin: 20,
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120348',
        borderRadius: 6
,        width: '100%',
        padding: 16,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 8
      },
      button: {
        width: 100,
        marginHorizontal: 8
      }
})