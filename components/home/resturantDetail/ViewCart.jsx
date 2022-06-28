import { Text, View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import { getDatabase, ref, onValue, set,  } from 'firebase/database';
import { initializeApp,updateDoc } from 'firebase/app';
import { getFirestore, setDoc, doc, serverTimestamp } from 'firebase/firestore';

const ViewCart = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyBmptsLtkxJn2DwHxDVo6xrTIQqJZM-npM",
    authDomain: "uber-eats-clone-351909.firebaseapp.com",
    projectId: "uber-eats-clone-351909",
    storageBucket: "uber-eats-clone-351909.appspot.com",
    messagingSenderId: "69358063823",
    appId: "1:69358063823:web:846325a3077204fbb027ba"
  }  

  initializeApp(firebaseConfig);






  const [modalVisible, setModalVisible] = useState(false);
  const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',

  });

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: "rgba(0,0,0,0.7)",

    },

    modalCheckoutContainer: {
      backgroundColor: "#fff",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },

    restaurantName: {
      textalign: 'center',
      marginLeft: "35%",
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10,

    },

    subTotalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    subTotalText: {
      textalign: 'left',
      fontWeight: '600',
      fontSize: 15,
      marginBottom: 10,

    }
  })
  function generatePassword() {
    var length = 20,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

  const addOrderToFirebase = async() =>{
    const firestore = getFirestore();

    await setDoc(doc(firestore, "orders", generatePassword()), {
    items:items,
    restaurantName:restaurantName,
    createdAt: serverTimestamp()
    

    });
    setModalVisible(false);
  }



  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (

              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: 'center',
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                }}
                onPress={() =>{addOrderToFirebase();}}
              >
                <Text style={{ color: 'white', fontSize: 20 }}>Checkout</Text>
                <Text style={{ position: "absolute", right: 20, color: "white", fontSize: 15, top: 17 }}>{total ? totalUSD : ""}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    )
  }


  console.log(totalUSD)
  return (
    <>
      <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={{
          flex: 1,
          flexDirection: 'row',
          position: 'absolute',
          alignItems: 'center',
          justifiyContent: 'center',
          left: 73,
          bottom: 40,

          zIndex: 999,
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
          }}>
            <TouchableOpacity style={{
              marginTop: 20,
              backgroundColor: "#000000",
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: "center",
              padding: 15,
              padding: 13,
              borderRadius: 30,
              width: 275,
              position: "relative"
            }}
              onPress={() => setModalVisible(true)}
            >

              <Text style={{ color: "#fff", fontSize: 20, marginRight: 30 }}>View Cart</Text>
              <Text style={{ color: "#fff", fontSize: 20 }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>) : (<></>)
      }
    </>
  )
}

export default ViewCart;