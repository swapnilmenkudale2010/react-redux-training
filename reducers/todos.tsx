export default function todo(state: [] = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];

    ///let newState =state.Concat

    case "TOGGLE_TODO":
      return state.map((item, index) => {
        if (item.text === action.text) {
          return {
            ...item,
            completed: !item.completed
          };
        } else return item;
      });
    default:
      return state;
  }
}
