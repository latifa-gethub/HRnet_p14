import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  infoEmployee: []
};
 
//creer une partie d'etat de store pour employee
export const employeeSlice = createSlice({
  name: 'employeeSlice',
  //l'etat ou données que le store peut gérer pour moi
  initialState,
  //les interaction possible avec mes données
  //une fonction qui accepte l'etat actuelle et l'action quand peut faire
  reducers: {
    saveEmployee: (state, action) => {
      state.infoEmployee.push(action.payload);
    }
  }
});
export const { saveEmployee} = employeeSlice.actions;

export const store = configureStore({
  reducer: {
    employeeSlice: employeeSlice.reducer
  }
});
