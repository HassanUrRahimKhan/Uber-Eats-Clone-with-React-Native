import {  SafeAreaView,StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
//import SafeAreaView from 'react-native-safe-area-context';
import {React, useState} from 'react';
import Headertabs from '../components/Headertabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem, { localRestaurants } from "../components/RestaurantItem"



const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  return (
    <SafeAreaView style={{
      flex: 1,
      // marginTop: StatusBar.currentHeight,
      backgroundColor:"#eee",
      paddingTop:40,
     
    }}>
     <View style={{backgroundColor:'white', padding:15}}>
     <Headertabs />
     <SearchBar/>
     </View>

     <ScrollView showsVerticalScrollIndicator={false}>
     

     <Categories/>
     <RestaurantItem restaurantData={restaurantData}/>
     
     </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {

  },
})