import { View, Text, Image } from 'react-native'
import React from 'react'



const yelpRestaurantInfo = {
    name: "Farmhouse Kitchen Thai Cuisine",
    image: "https://s23209.pcdn.co/wp-content/uploads/2019/07/Thai-Chicken-ThighsIMG_0039-600x900.jpg?p=30891",
    price: '$$',
    reviews: "1500",
    rating: 4.5,
    categories: [{ title: "Indian" }, { title: "Comfort Food" }, { title: "Coffee" }],
};




export default function About(props) {
    const { name, image, price, reviews, categories, rating } = props.route.params ;

    const formattedCategories = categories.map((eat) => eat.title).join(" • ")

    const description = `${formattedCategories} ${price ? " • " + price : " "} • 🎫 • ${rating} ⭐ ${reviews ? " • " + reviews : ""}`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
)

const RestaurantName = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15
    }}>{props.title}</Text>
)

const RestaurantDescription = (props) => <Text style={{
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15.5,
}}
>{props.description}</Text>