import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.container2}><Image source={require('./assets/icon6.png')} style={styles.logo} /></View>
      <Text style={styles.title}> Discover{'\n'} Nature's{'\n'} Remedies</Text>
      <Text style={styles.texting}>This app allows users to scan Ayurvedic plants and instantly 
      retrieve detailed information about their properties and benefits. Simply press "Get Started" to launch the camera and begin your journey 
      into the world of Ayurvedic knowledge, all from the convenience of your smartphone.</Text>
       <View style={styles.buttonContainer}>
      <Button style={styles.button1} title="Get Started" onPress={() => navigation.navigate('Camera') } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container2:{
    alignItems:'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
    //marginLeft: 20,
    alignContent: 'left',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',        // title styles the bold text
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  texting: {
    fontSize: 18,
    fontWeight: 'regular',
    marginBottom: 40,
    marginVertical: 5,          // texting styles the paragraph1
    marginRight:30,
    marginLeft:30,
    textAlign: 'center',
  },
  buttonContainer: {
    borderRadius: 40, 
    backgroundColor: 'white',
    width: 300,
    height: 100,
  },
  button1: {

  },

  });
