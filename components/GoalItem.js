import { Pressable, StyleSheet, Text, View } from 'react-native'

const GoalItem = ({ data, onDeleteItem }) => {

    const deleteCaller = () => {
        onDeleteItem(data?.id);
    }

  return (
    <View style={styles.goalItem}>
        <Pressable 
        //   onPress={onDeleteItem.bind(this, data?.id)}
        onPress={deleteCaller}
        android_ripple={{color: 'aliceblue'}}
        style={({ pressed }) => pressed && styles.pressed }
        >
        
            <Text style={styles.goalText}>{data?.text}</Text>
        </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: 'blue',
      },
      goalText: {
        color: 'white',
      },
      pressed: {
        opacity: 0.5
      }
})