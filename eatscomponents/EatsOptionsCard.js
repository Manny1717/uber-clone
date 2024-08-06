import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { UseSelector } from "react-redux";
import GooglePlacesAutocomplete from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { Input } from "react-native-elements";
import EatsCategories from "./EatsCategories";

const foodSelectionData = [
  {
    id: "1",
    title: "Food",
    multiplier: 1.5,
    image:
      "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?t=st=1722614280~exp=1722617880~hmac=1e626d0c330df76a6e1bd1d4745b573aee8c5a28f224da596624c0f4d0b3dec3&w=1380",
  },
  {
    id: "2",
    title: "Drink",
    multiplier: 2,
    image:
      "https://img.freepik.com/free-vector/coffee-cup-tan-colour_78370-3051.jpg",
  },
  {
    id: "3",
    title: "Snack",
    multiplier: 1,
    image:
      "https://img.freepik.com/premium-photo/chocolate-bar-with-caramel-peanut-isolated-white-background_176402-2503.jpg?ga=GA1.1.1419381932.1722617346&semt=sph",
  },
];

const SURGE_CHARGE_RATE = 1.5;

const EatsOptionsCard = () => {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View>
        <Text style={tw`text-center font-semibold text-xl mt-5`}>
          Food Selection
        </Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Food Search" />
      </View>

      {/*CATEGORIES */}
      <View style={styles.categories}>
        <EatsCategories />
      </View>

      <FlatList
        data={foodSelectionData}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            source={{ uri: image }}
          />
        )}
      />

      <View style={tw`mt-auto`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`rounded-full bg-black p-3 mx-10`}
        >
          <Text style={tw`text-xl text-white text-center`}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EatsOptionsCard;

const styles = StyleSheet.create({
  input: {
    marginVertical: 30,
    marginHorizontal: 10,
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#e8eaed",
  },
});
