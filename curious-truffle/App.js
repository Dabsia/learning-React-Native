import {useState} from 'react'
import { Text, View, StyleSheet, TextInput, Button, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('')

  const [goals, setGoals] = useState([])

const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
    
  }
  const alertGoal = () => {

    if (enteredGoal.length === 0){
      alert('Input can not be empty')
    }
    else{
      setGoals(prev => [...prev, 
        {id: Math.random().toString(), value: enteredGoal}
      ])
      setEnteredGoal('')
    }
  }

  

  return (
    <View style={styles.container}>
    <GoalInput goalInputHandler = {goalInputHandler} enteredGoal = {enteredGoal} alertGoal = {alertGoal} />
      
      <FlatList 
      data = {goals}
       keyExtractor = {(item) => item.id}
       renderItem = { todoItem => 
         <GoalItem todoItem = {todoItem.item} /> } >

      </FlatList>
      
     </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: 'red',
    borderStyle: 'solid',
    paddingLeft: 5,
    marginBottom: 5
  },
 
});
