import {  Text, View,TouchableOpacity } from 'react-native';
import React from 'react';


const ViewCart = () => {
  return (
    <View style={{
      flex: 1,
      flexDirection:'row',
      position: 'absolute',
      alignItems:'center',
      justifiyContent:'center',
      left: 73,
      bottom: 40,
    
       zIndex:999,
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
      }}>
        <TouchableOpacity style={{
          marginTop: 20,
          backgroundColor: "#000000",
          alignItems: "center",
          padding: 13,
          borderRadius: 30,
          width: 275,
          position: "relative"
        }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ViewCart;
