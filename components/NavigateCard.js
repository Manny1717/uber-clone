import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourties from "./NavFavourties";
import { Icon } from "react-native-elements";

//1. Top screen is the Map & Bottom is the NavigateCard.
//2. GoodMorning Message & Input of your 'Where to' location
//3. After giving the 'Where to' location, the screen will be directed to RideOptionsCard'

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Manny</Text>
      <View style={tw`border-t border-gray-200`}>
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            placeholder="Where to?"
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesAPI"
            debounce={400}
          />
        </View>
        <NavFavourties />
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly py-2  border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
          onPress={() => {
            navigation.navigate("RideOptionsCard");
          }}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
        >
          <Icon name="fast-food-outline" type="ionicon" color="" size={16} />
          <Text style={tw`text-center`}>Eates</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 10,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
