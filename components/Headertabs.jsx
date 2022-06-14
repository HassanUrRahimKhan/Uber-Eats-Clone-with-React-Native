import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Home from '../screens/Home'
import { React, useState } from 'react'

const HeaderButton = (props) => {

  return (
    <View>
      <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 30,
      }}
        onPress={() => { props.setActiveTab(props.text) }}
      >
        <Text style={{
          color: props.activeTab === props.text ? "white" : "black",
          fontWeight: 'bold',
          fontSize: 15,
        }}>{props.text}</Text>

      </TouchableOpacity>
    </View>
  )
}
const Headertabs = (props) => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{
      flexDirection: "row",
      alignSelf: 'center',
    }}>

      <HeaderButton
        text="Delivery"
        btncolor="black" 
        textColor="white" 
        activeTab={props.activeTab} 
        setActiveTab={props.setActiveTab} />
      <HeaderButton text="PickUp" btncolor="white" textColor="black" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />

    </View>
  )
}

export default Headertabs

const styles = StyleSheet.create({
  headerTabs: {
    flexDirection: "row",
    alignSelf: 'center',

  },
  buttons: {
    backgroundColor: 'black',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 30,

  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,

  }


})