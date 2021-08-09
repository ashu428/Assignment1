export const initialState = {
  countA: 0,
  countB: 0,
  countC: 0,
  countD: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        countA: state.countA + 1,
        countB: state.countB + 1,
        countC: state.countB + 1,
        countD: state.countB + 1,
      };
    case "INCREASE_B":
      return state + 1;
    default:
      return state;
  }
};

export default reducer;
