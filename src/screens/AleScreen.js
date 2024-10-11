import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function AleScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Ale Screen</Text>
      <Text> </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ale')}>
        <Text style={styles.buttonText}>Go to Ale... again</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Go back to first screen in stack</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AleScreen;
