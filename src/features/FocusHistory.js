import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import { colors } from '../utils/color';

const FocusHistory = ({history}) => {
    if (!history || !history.length) return <Text style={styles.item} >You havent focused today</Text>;
    
    const renderItem = ({item}) => <Text style={styles.item}> * {item} </Text>
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Hello, React Native!</Text>
      <FlatList
      data={history}
      renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    
    // alignItems: 'center',
  },
  tittle:{
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold"
  },
  item: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    padding: 2,
  }
});

export default FocusHistory;
