import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import EatsOptionsCard from "../eatscomponents/EatsOptionsCard";
import EatsNavigateCard from "../eatscomponents/EatsNavigateCard";

const EatsScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-full`}>
        <Stack.Navigator>
          <Stack.Screen
            name="EatsOptions"
            component={EatsOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default EatsScreen;

const styles = StyleSheet.create({});
