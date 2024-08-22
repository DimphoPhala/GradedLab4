import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../Contexts/CartContext';

export default function Form3() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigation = useNavigation();
  const { clearCart } = useCart();

  const handlePayment = () => {
    // Add payment processing logic here
    clearCart(); // Clear the cart after successful payment
    navigation.navigate('Menu'); // Navigate back to the Menu screen
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Card Number:</Text>
          <TextInput
            value={cardNumber}
            onChangeText={setCardNumber}
            style={styles.input}
            keyboardType="numeric"
            maxLength={16}
          />
          <Text style={styles.label}>Expiry Date (MM/YY):</Text>
          <TextInput
            value={expiryDate}
            onChangeText={setExpiryDate}
            style={styles.input}
            keyboardType="numeric"
            maxLength={4}
          />
          <Text style={styles.label}>CVV:</Text>
          <TextInput
            value={cvv}
            onChangeText={setCvv}
            style={styles.input}
            keyboardType="numeric"
            maxLength={3}
          />
          <Button title="Submit Payment" onPress={handlePayment} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Background color for the safe area
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center', // Center content vertically
    padding: 16,
    backgroundColor:'#02A9EA'
  },
  formContainer: {
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: '100%', // Full width of the container
    borderColor: '#ccc', // Light grey border color
    borderBottomWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff', // White background for input fields
    borderRadius: 4, // Slightly rounded corners
  },
});
