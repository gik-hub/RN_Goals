import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const addGoalHandler = (newGoal) => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {id: Math.random().toString(), text: newGoal}]);
    setModalIsVisible(false)
  };

  const deleteGoalHandler = (id) => {
    // console.log('id>>>>>$$$$',id)
    setCourseGoals((currentGoals) => {
      return currentGoals?.filter(goal => goal?.id !== id)
    })
  }

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' onPress={startAddGoalHandler} color='#b180f0' />
      <GoalInput onAddPress={addGoalHandler} visible={modalIsVisible} closeModal={endAddGoalHandler} />
      <View style={styles.goalContainer}>
        {/* <ScrollView >
          {courseGoals?.map((goal, idx) => {
            return (
              <View key={`${goal}+${idx}`} style={styles.goalItem}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            );
          })}
        </ScrollView> */}
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem data={itemData?.item} onDeleteItem={deleteGoalHandler} />
            )
          }}
          keyExtractor={(item, index) =>{
            return `${item}+${index}`
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 7,
  }
});
