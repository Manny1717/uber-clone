import { View, Text, FlatList } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Fullerton, California, USA",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "Irvine, California, USA",
  },
];

//Favorite Routes or Often Visted
//1. List with the two often/favorite locations
//2. A line to seperate the locations.
//3. Locations have an icon & of course name of location, destination description(address)
const NavFavourties = () => {
  return (
    <View>
      <View style={tw`items-center mt-5`}>
        <Text style={tw`text-lg font-semibold`}>Recents</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={[tw`bg-gray-300`, { height: 1 }]} />
        )}
        renderItem={({ item: { location, destination, icon } }) => (
          <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
              name={icon}
              type="ionicon"
              color="white"
              size={18}
            />
            <View>
              <Text style={tw`font-semibold text-lg`}>{location}</Text>
              <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavFavourties;
