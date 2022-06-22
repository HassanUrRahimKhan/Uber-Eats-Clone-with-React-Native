import {  Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';


const ViewCart = () => {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items
  .map((item=>Number(item.price.replace('$', ""))))
  .reduce((prev,curr)=> prev+curr,0);

  const totalUSD = total.toLocaleString('en',{
    style:'currency',
    currency: 'USD',

  });
 
  console.log(totalUSD)
  return (
    <>
    {total ?  (
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
          flexDirection:'row',
          
          alignItems: "center",
          padding: 13,
          borderRadius: 30,
          width: 275,
          position: "relative"
        }}
        >
          <Text style={{ color: "#fff", fontSize: 20, marginRight: 30  }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>) : (<></>)}
    </>
  )
}

export default ViewCart;
