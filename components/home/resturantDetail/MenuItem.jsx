import React from 'react';
import { View, Text, StyleSheet, Image ,ScrollView} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';


const foods = [
    {
        title: "lasgana",
        description: 'with white butter lettuce and white whine',
        price: "$12.40",
        image: "https://www.acouplecooks.com/wp-content/uploads/2020/07/White-Wine-Sauce-010.jpg",
    },
    {
        title: "Tandoori Chicken",
        description: 'shirmps with butter and garlic',
        price: "$13.40",
        image: "https://www.whiskaffair.com/wp-content/uploads/2019/06/Garlic-Butter-Shrimp-1-3.jpg"

    },
    {
        title: "lasgana",
        description: 'with white butter lettuce and white whine',
        price: "$12.40",
        image: "https://carlsbadcravings.com/wp-content/uploads/2019/10/chicken-lasagna-28.jpg"
    },
  
  
    {
        title: "lasgana",
        description: 'with white butter lettuce and white whine',
        price: "$12.40",
        image: "https://carlsbadcravings.com/wp-content/uploads/2019/10/chicken-lasagna-28.jpg"
    },

]


const MenuItem = ({restaurantName}) => {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue)=>dispatch({
    type:'ADD_TO_CART',
    payload: {...item, restaurantName: restaurantName, checkboxValue:checkboxValue},
});  
const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items 
    );

    const isFoodInCart = (food,cartItems)=>(
       Boolean(cartItems.find((item)=> item.title === food.title ))
       ) 
    return (



        <ScrollView showsVerticalScrollIndicator>
            {foods.map((food, index) => (
                <View key={index}>

                    <View style={styles.menuItemStyle}>
                        <BouncyCheckbox
                        iconStyle={{borderColor: 'lightgrey', borderRadius: 0}}
                        fillColor="green"
                        onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                        isChecked={isFoodInCart(food,cartItems )}
                        />

                        <FoodInfo food={food} />
                        <FoodImage food={food.image} />

                    </View>


                    <Divider width={0.5} orientation="vertical" style={{marginHorizontal:20}}/>
                </View>
                
            ))}

        </ScrollView>

    )
}
export default MenuItem;

const FoodInfo = (props) => {
    return (
        <View style={{ width: 240, justifyContent: 'space-evenly' }}>
            <Text style={styles.titleStyle}>{props.food.title}</Text>
            <Text>{props.food.description}</Text>
            <Text>{props.food.price}</Text>
        </View>
    )
}


const FoodImage = ({ food }) => (
    <View>
        <Image
            source={{ uri: food }}
            style={{ width: 100, height: 100, borderRadius: 8 }}
        />
    </View>
)

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: 600,

    }
})


