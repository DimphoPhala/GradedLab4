
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function AddressScreen({ route, navigation }) {
  const { name, email, phone } = route.params; // Retrieve user details

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleNext = () => {
    if (address && city && state && zipCode) {
      // Pass all details to the MainTabs
      navigation.navigate('MainTabs');
    } else {
      alert('Please fill in all address fields');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Enter Delivery Address</Text>
        <TextInput
          placeholder="Address"
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          placeholder="City"
          style={styles.input}
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          placeholder="State"
          style={styles.input}
          value={state}
          onChangeText={setState}
        />
        <TextInput
          placeholder="Zip Code"
          style={styles.input}
          value={zipCode}
          onChangeText={setZipCode}
          keyboardType="numeric"
        />
        <Button title="Next" onPress={handleNext} color="#007BFF" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#02A9EA', 
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff', // White background for the form
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Dark color for title
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#f9f9f9', // Light gray background for input fields
  },
});
