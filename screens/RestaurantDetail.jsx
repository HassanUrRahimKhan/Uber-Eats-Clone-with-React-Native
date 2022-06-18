import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import About from '../components/home/resturantDetail/About';
import MenuItem from '../components/home/resturantDetail/MenuItem';
import ViewCart from '../components/home/resturantDetail/ViewCart';

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name}  />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  )
}

