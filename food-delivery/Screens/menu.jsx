import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import {useCart} from '../Contexts/CartContext';

const menuItems = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Classic pizza topped with fresh tomatoes, mozzarella, and basil.',
    price: 'R130.00',
    image: require('../assets/pizza.jpg'),  
  },
  {
    id: '2',
    name: 'Cheeseburger',
    description: 'Juicy beef patty with cheddar cheese, lettuce, and tomato.',
    price: 'R88.00',
    image: require('../assets/burger.jpg'),  
  },
  {
    id: '3',
    name: 'Chicken Caesar Salad',
    description: 'Crisp romaine lettuce, parmesan, and croutons, dressed with Caesar dressing.',
    price: 'R55.00',
    image: require('../assets/salad.jpg'),  
  },
  {
    id: '4',
    name: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy sauce, pancetta, and parmesan.',
    price: 'R120.00',
    image: require('../assets/spaghetti.jpg'),  
  },
  {
    id: '5',
    name: 'Sushi Platter',
    description: 'Assorted sushi with fresh fish, served with soy sauce and wasabi.',
    price: 'R200.00',
    image: require('../assets/sushi2.jpg'),  
  },
  {
    id: '6',
    name: 'Tacos',
    description: 'Soft tacos filled with seasoned beef, lettuce, cheese, and salsa.',
    price: 'R100.00',
    image: require('../assets/tacos.jpg'),  
  },
];

export default function MenuScreen() {
    const { addToCart}= useCart();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Button title="Add to Cart" onPress={() => addToCart(item)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#02A9EA',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
