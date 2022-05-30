import {  SafeAreaView,StyleSheet, Text, View, StatusBar } from 'react-native';
//import SafeAreaView from 'react-native-safe-area-context';
import React from 'react';
import Headertabs from '../components/Headertabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';



const Home = () => {
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
     <Categories/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {

  },
})