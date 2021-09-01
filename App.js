import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from './context/cartContext';
import ProductList from './screens/ProductList';
import { ProductDetails } from './screens/ProductDetails';
import { CartIcon } from './components/CartIcons';
import { Cart } from './screens/Cart';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductList}
            options={({ navigation }) => ({
              title: 'Products',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />
            })} />
          <Stack.Screen name="ProductDetails" component={ProductDetails}

            options={({ navigation }) => ({
              title: 'Product details',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />

          <Stack.Screen name='Cart' component={Cart}
            options={({ navigation }) => ({
              title: 'My cart',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })} />


        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, headerTitle: {
    fontSize: 20
  }
});
