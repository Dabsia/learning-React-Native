import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

const GoalItem = ({todoItem}) => {
  return (
    <View  style = {styles.todoItem}>
              <Text style = {styles.text}>        {todoItem.value}</Text>
            </View>
  )
}


export default GoalItem

const styles = StyleSheet.create({
   todoItem: {
    backgroundColor: '#ccc',

    padding: 10,
    marginVertical: 10
  },
  text: {
    color: '#ffffff'
  },
})