import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Page2 = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Text style={styles.text}>Go back</Text>
    </TouchableOpacity>
  </View>
);

Page2.navigationOptions = {
  headerTintColor: '#0f407b',
  headerStyle: {
    backgroundColor: 'white',
    paddingTop: 20,
    height: 80,
    shadowOpacity: 0,
  },
  headerTitle: (
    <Image
      style={{ height: 23, width: 65 }}
      source={require('../../assets/stormLogo.png')}
    />
  ),
  headerRight: (
    <Image
      style={{ height: 40, width: 40, marginRight: 10 }}
      source={require('../../assets/logo.png')}
    />
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Page2;
