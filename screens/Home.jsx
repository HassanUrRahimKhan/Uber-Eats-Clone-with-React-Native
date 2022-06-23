import {  SafeAreaView,StyleSheet, Text, View, StatusBar, ScrollView, Alert } from 'react-native';

import {React, useState, useEffect} from 'react';
 import Headertabs from '../components/home/Headertabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItem, { localRestaurants } from "../components/home/RestaurantItem"
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';
 
// const [activeTab, setActiveTab] = useState("Delivery");

// const YELP_API_KEY = "";

const Home = ({navigation}) => {
  const [city, setCity] = useState("Hollywood");
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const [activeTab, setActiveTab] = useState("Delivery");
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
        "x-rapidapi-key": "AIzaSyBr5CFgi1ZZlYPrBFhwgXi15_qkaqUJOck",
        Authorization: `Bearer JUTjB52l3DETgz3YWbFIvxzZR3ev7CQlhxJ6HK3i_DoomCmDcFfQGEk6xdtseGwylDhOmF3LaDrcL0uVJAgNb33vAEab3qn-PRJzKwdWTXt296JZOjWXgrhkZpmUYnYx`,
        
      }
    })
    
    .then(response => response.json())
    .then(json => {
      setRestaurantData(json.businesses.filter((business)=>
      business.transactions.includes(activeTab.toLowerCase())));
      // if(json.error.code=== "loc"){
      //   setRestaurantData(json.businesses);
      // }
      // else{
      //   Alert.alert(
      //     "OOPS!",
      //     "Empty Todo",
      //     [
      //       {
      //         text: "err",
      //         onPress: () => console.log("Cancel Pressed"),
      //         style: "cancel"
      //       },
      //       { text: "OK", onPress: () => console.log("OK Pressed") }
      //     ]
      //   );
      // }
     
      //console.log("🚀 ~ file: Home.jsx ~ line 14 ~ Home ~ restaurantData", restaurantData)
      
    })
    .catch(err => {
      console.log(err)
    })
    
    console.log(city)
  },[city,activeTab])
  
  
  
  
  
  // }



  return (
    <SafeAreaView style={{
      flex: 1,
      // marginTop: StatusBar.currentHeight,
      backgroundColor:"#eee",
      paddingTop:40,
     
    }}>
     <View style={{backgroundColor:'white', padding:15}}>
     <Headertabs activeTab={activeTab} setActiveTab={setActiveTab}/>
     <SearchBar cityHandler={setCity}/>
     </View>

     <ScrollView showsVerticalScrollIndicator={false}>
     

     <Categories/>
     <RestaurantItem restaurantData={restaurantData} navigation={navigation}  />
     
     </ScrollView>
     <Divider width={1}></Divider>
     <BottomTabs></BottomTabs>
    </SafeAreaView>
  )
}

export default Home

