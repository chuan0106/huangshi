export default {
  namespace: 'tableModel',

  state: {
    tableOne: false,
    tableTwo: false,
    tableTwoData: null,
  },

  subscriptions: {
    setup({ dispatch, history }) {},
  },

  effects: {},

  reducers: {
    //在这里改变对应的状态
    gettableOneReducer(state, action) {
      state.tableOne = action.payload;
      return { ...state, ...action.payload };
    },
    //在这里改变对应的状态
    gettableTwoReducer(state, action) {
      state.tableTwo = action.payload;
      return { ...state, ...action.payload };
    },
    getTableTwoDataReducer(state, action) {
      state.tableTwoData = action.payload;
      return { ...state, ...action.payload };
    },
  },
};
