import { createSlice } from '@reduxjs/toolkit';
import { FormData } from '../../components/schema';
import { Country } from './countrySlice';

type FormsState = (FormData & Country & { id: number })[];

const initialState = {
  dataForm: [] as FormsState,
};

const dataFormSlice = createSlice({
  name: 'dataForm',
  initialState,
  reducers: {
    addForm: (state, action) => {
      state.dataForm.push({ ...action.payload, id: Date.now() });
    },
    delForm: (state, action) => {
      state.dataForm = state.dataForm.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addForm, delForm } = dataFormSlice.actions;
export default dataFormSlice.reducer;
