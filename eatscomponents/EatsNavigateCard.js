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
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import NavFavourties from "../components/NavFavourties";
import { Icon } from "react-native-elements";

const EatsNavigateCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`border-gray-200`}>
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
              navigation.navigate("EatsOptionsCard");
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
      <View style={tw`flex-row justify-evenly py-2 border-t border-gray-100`}>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full bg-black`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="white"
            size={16}
          />
          <Text style={tw`text-center text-white`}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full `}
        >
          <Icon name="fast-food-outline" type="ionicon" size={16} />
          <Text style={tw`text-center`}>Pickup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EatsNavigateCard;

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
