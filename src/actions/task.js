export const addNewTask = (task) => {
  return { type: "ADD_TASK", payload: task };
};
export const addNewCard = (card) => {
  return { type: "ADD_CARD", payload: card };
};
export const editTask = (task) => {
  return { type: "EDIT_TASK", payload: task };
};
export const moveTask = (key) => {
  return { type: "REMOVE_TASK", payload: key };
};
export const removeCard = (key) => {
  return { type: "REMOVE_CARD", payload: key };
};
