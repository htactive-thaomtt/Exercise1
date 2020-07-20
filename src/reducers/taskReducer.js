const initialState = [
  { title: "demo", tasks: [{ task: "nono" }, { task: "hihih" }] },
];
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CARD": {
      const newList = [...state, { title: action.payload, tasks: [] }];
      return newList;
    }
    case "ADD_TASK": {
      const newList = state.map((item, key) => {
        if (key === action.payload.key) {
          const newitem = {
            ...item,
            tasks: [...item.tasks, { task: action.payload.value }],
          };
          return newitem;
        }
        return item;
      });
      return newList;
    }
    case "EDIT_TASK": {
      const newList = state.map((item, key) => {
        if (key === action.payload.key) {
          const newtasks = item.tasks.map((child, k) => {
            if (k === action.payload.keyItem)
              return { task: action.payload.value };
            return child;
          });
          const newitem = { ...item, tasks: newtasks };
          return newitem;
        }
        return item;
      });
      return newList;
    }
    case "REMOVE_TASK": {
      const newmove = state.map((item, key) => {
        if (key === action.payload.key) {
          const newTaskss = [...item.tasks];
          newTaskss.splice(action.payload.keyItem, 1);
          const newitem = { ...item, tasks: newTaskss };
          return newitem;
        }
        return item;
      });
      return newmove;
    }
    case 'REMOVE_CARD': {
      const removeCard = [...state];
      removeCard.splice(action.payload, 1);
      return removeCard;
      }
    default:
      return state;
  }
};
export default taskReducer;
