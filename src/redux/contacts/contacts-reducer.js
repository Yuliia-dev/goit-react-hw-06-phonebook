import { combineReducers, createReducer } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { addContacts, deleteContacts, filterChange } from './contacts-actions';

const items = createReducer([], {
  [addContacts]: (state, { payload }) =>
    state.find(contact => contact.name.toLowerCase() === payload.name)
      ? Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: `The name ${payload.name} is already in the list`,
        })
      : [...state, payload],
  [deleteContacts]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
