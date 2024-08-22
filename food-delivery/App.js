import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './Screens/menu';
import CartScreen from './Screens/cart';
import ProfileScreen from './Screens/profile';
import PaymentDetails from './Screens/PaymentDetails'; // Import the PaymentDetails screen
import { MaterialIcons } from '@expo/vector-icons';
import { CartProvider } from './Contexts/CartContext';
import UserDetailsScreen from './Screens/UserDetails';
import AddressScreen from './Screens/UserAddress';
import {UserProvider} from './Contexts/UserContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="restaurant-menu" size={28} color="blue" />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="shopping-cart" size={28} color="blue" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="person" size={28} color="blue" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
      <UserProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="UserDetails"
            component={UserDetailsScreen}
          />
          <Stack.Screen
            name="AddressDetails"
            component={AddressScreen}
          />
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PaymentDetails"
            component={PaymentDetails}
            options={{ title: 'Payment Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </UserProvider>
    </CartProvider>
  );
}
