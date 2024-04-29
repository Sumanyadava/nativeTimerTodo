import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing  = ({onChangeTime}) => {
  return (
    <>
    <View style={styles.container}>
      <RoundedButton size={75} title='10' onPress={ ()=> {onChangeTime(10)}} />
    </View>

    <View style={styles.container}>
      <RoundedButton size={75} title='5' onPress={ ()=> {onChangeTime(5)}} />
    </View>

    <View style={styles.container}>
      <RoundedButton size={75} title='30' onPress={ ()=> {onChangeTime(30)}} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

