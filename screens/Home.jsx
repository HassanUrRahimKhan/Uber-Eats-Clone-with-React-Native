import {  SafeAreaView,StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
//import SafeAreaView from 'react-native-safe-area-context';
import {React, useState, useEffect} from 'react';
import Headertabs from '../components/Headertabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem, { localRestaurants } from "../components/RestaurantItem"
 
// const [activeTab, setActiveTab] = useState("Delivery");

// const YELP_API_KEY = "";

const Home = () => {
  const [city, setCity] = useState("illionis");
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  // console.log("🚀 ~ file: Home.jsx ~ line 14 ~ Home ~ restaurantData", restaurantData)

  // const getRestaurantFromYelp =  () =>{
  //   const YelpUrl= "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=Illinois"


  //   const apiOptions ={
  //     headers:{
  //        "Authorization": `Bearer JUTjB52l3DETgz3YWbFIvxzZR3ev7CQlhxJ6HK3i_DoomCmDcFfQGEk6xdtseGwylDhOmF3LaDrcL0uVJAgNb33vAEab3qn-PRJzKwdWTXt296JZOjWXgrhkZpmUYnYx`,
        
       
  //     }
  //   }

  //   const res =  fetch(YelpUrl, apiOptions);
  //    res.json();
  //   setRestaurantData(json.businesses);
  //   // console.log(res)
  // };

  // const  getRestaurantsFromYelp = () =>{
   
    //******************************************************************************* */
useEffect(()=>{
  fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`, {
    "method": "GET",
    
    "headers": {
        "x-rapidapi-host": "e-commerce12.p.rapidapi.com",
        "x-rapidapi-key": "8e54de1340msh5c27c70969fa0f9p1c55abjsnf1f932c971d3",
        Authorization: `Bearer JUTjB52l3DETgz3YWbFIvxzZR3ev7CQlhxJ6HK3i_DoomCmDcFfQGEk6xdtseGwylDhOmF3LaDrcL0uVJAgNb33vAEab3qn-PRJzKwdWTXt296JZOjWXgrhkZpmUYnYx`,
        
      }
    })
    
    .then(response => response.json())
    .then(json => {
      // console.log(json)
      setRestaurantData(json.businesses);
      //console.log("🚀 ~ file: Home.jsx ~ line 14 ~ Home ~ restaurantData", restaurantData)
      
    })
    .catch(err => {
      console.error(err);
    })
    
    console.log(city)
  },[city])
  
  
  
  
  
  // }



  return (
    <SafeAreaView style={{
      flex: 1,
      // marginTop: StatusBar.currentHeight,
      backgroundColor:"#eee",
      paddingTop:40,
     
    }}>
     <View style={{backgroundColor:'white', padding:15}}>
     <Headertabs />
     <SearchBar cityHandler={setCity}/>
     </View>

     <ScrollView showsVerticalScrollIndicator={false}>
     

     <Categories/>
     <RestaurantItem restaurantData={restaurantData} />
     
     </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {

  },
})