// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {toggleMealSelection} from "./mealsSlice";

const mealsTotalCost = calculateTotalCost("meals");

const calculateTotalCost = (section) => {
    let totalCost = 0;
    if (section === "venue"){
        venueItems.forEach((item) => {
            totalCost += item.cost * item.quantity;
        });
    } else if (section === "av"){
        avItems.forEach((item) => {
            totalCost += item.cost * item.quantity;
        });
    } else if (section === "meals") {
        mealsItem.forEach((item) => {
         
                if (item.selected){
                    totalCost += item.cost * numberOfPeople;
                }
        });
    }
    return totalCost;
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    { name: 'Breakfast', cost: 50, selected: false},
    { name: 'High Tea', cost: 25, selected: false},
    { name: 'Lunch', cost: 65, selected: false},
    { name: 'Dinner', cost: 70, selected: false},
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
        state[action.payload].selected = !state[action.payload].selected;
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
