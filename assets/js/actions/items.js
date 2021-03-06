/*
 * action types
 */
export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SET_VISIBLITY_FILTER = 'SET_VISIBLITY_FILTER';
export const SET_NAME_FILTER = 'SET_NAME_FILTER';

/*
 * other constants
 */
export const VisiblityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */
export function completeItem(index) {
  return { type: COMPLETE_ITEM, index };
}

export function createItem(item) {
  return { type: CREATE_ITEM, item };
}

export function deleteItem(index) {
  return { type: DELETE_ITEM, index };
}

export function setNameFilter(nameFilter) {
  return { type: SET_NAME_FILTER, nameFilter };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBLITY_FILTER, filter };
}
