import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

// var x = new XMLHttpRequest();
// x.open('GET', 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api');
//           // I put "XMLHttpRequest" here, but you can use anything you want.
//           x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

//           x.send();
const SearchBar = (props) => {
  { console.reportErrorsAsExceptions = false }
  return (

    <View style={{ marginTop: 15, flexDirection: 'row' }}>


      <GooglePlacesAutocomplete
      
        query={{ key: 'AIzaSyBmptsLtkxJn2DwHxDVo6xrTIQqJZM-npM' }}
        requestUrl={{
          useOnPlatform: 'web', // or "all"
          url:
            'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
          headers: {

            Authorization: `an auth token`, // if required for your proxy
          },
        }}
        onPress={(data = null) => {
          // 'details' is provided when fetchDetails = true
          const city = (data.description.split(",")[0]);
          console.log(city)
          props.cityHandler(city)
        }}



     



        placeholder='Search'
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,

          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,

          }
        }}

        renderLeftButton={() =>
          <View style={{ marginLeft: 10 }}>

            <Ionicons name="location-sharp" size={24} />
          </View>}

        renderRightButton={() => (
          <View style={{
            flexDirection: 'row',
            marginRight: 8,
            backgroundColor: "white",
            padding: 9,
            borderRadius: 30,
            alignItems: 'center'

          }}>
            <AntDesign name='clockcircle' size={11} />
            <Text>search</Text>
          </View>
        )}
      />

    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})