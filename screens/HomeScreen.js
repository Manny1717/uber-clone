import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import NavFavourites from "../components/NavFavourties";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

//1. Image of the UBER brand
//2. Placing the the 'Where From?' below the UBER brand
//2A. Users are able to input a location.
//2B. Once input is filled, origin will be dispatched to the MapScreen
//3. Click on the NavOptions ('Get a Ride' & 'Order Food') then the user will be
//directed to the MapScreen.
//4. Under NavOptions is the NavFav. which is suggested/recent locations/
const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
