import React from 'react'
import {View, TextInput,Button, StyleSheet} from 'react-native'

const GoalInput = ({goalInputHandler, enteredGoal, alertGoal}) => {
  return (
    <View>
        <TextInput style = {styles.inputContainer} placeholder = 'What do you want to learn today'
        onChangeText = {goalInputHandler}
        value = {enteredGoal}
         />
        <Button onPress = {alertGoal} title = 'Add' />

      </View>
  )
}

export default GoalInput


const styles = StyleSheet.create({
    inputContainer: {
    borderWidth: 1,
    borderBottomColor: 'red',
    borderStyle: 'solid',
    paddingLeft: 5,
    marginBottom: 5
  },
})