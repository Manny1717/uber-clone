import { createSlice } from "@reduxjs/toolkit";

//Origin is the users point A.
//Destination is the users point B.
//TravelTimeInformation is the time of travel from point A => point B.
//Everything is setted to null because the user has not added any info.//
const initialState = {
  origin: null,
  destination: null,
  travelTimeInfor: null,
};

//State is the users inputting the origin,destination, & traveltimeinfo.
//Action is pushing the users info into the data.
//Which will result with an updated state(new info)
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfor: (state, action) => {
      state.travelTimeInfor = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInfor } =
  navSlice.actions;

//Selectors
//Pulling the users input data
//When calling each Selector, it should pull the users current origin, destination, & traveltime.
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfor = (state) => state.nav.travelTimeInfor;

export default navSlice.reducer;
