import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { data } from "../constants/data";
import tw from "tailwind-react-native-classnames";

//Horizontal categories that is displayed below the search
const EatsCategories = (activeCategory, handleChangeCategory) => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatlistContainer}
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <CategoryItem
          isActive={activeCategory == item}
          handleChangeCategory={handleChangeCategory}
          title={item}
          index={index}
        />
      )}
    />
  );
};

//Visual of the horziontal category list
const CategoryItem = ({ title, index, isActive, handleChangeCategory }) => {
  let color = isActive ? "white" : "black";
  let backgroundColor = isActive ? "rgba(10,10,10,0)" : "#e5e5e5";
  return (
    <View>
      <Pressable
        onPress={() => handleChangeCategory(isActive ? null : title)}
        style={[styles.category, { backgroundColor }]}
      >
        <Text style={[styles.title, { color }]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default EatsCategories;

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: 10,
    gap: 8,
  },
  category: {
    padding: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 16,
    borderCurve: "continuous",
  },
});
