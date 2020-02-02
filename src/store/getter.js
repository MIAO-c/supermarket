export const getters = {
  cartlength(state) {
    return state.cartlist.length;
  },
  cartcontent(state) {
    return state.cartlist;
  },
  tolsum(state) {
    return state.cartlist
      .filter(item => item.checked)
      .reduce((val, item) => {
        return val + item.count * item.newPrice;
      }, 0)
      .toFixed(2);
  },
  tolcount(state) {
    return state.cartlist
      .filter(item => item.checked)
      .reduce((val,item) => {
        return val + item.count;
      }, 0);
  },
//   checkall(state) {
//     if (state.cartlist.length == 0) {
//       return false;
//     }
//     return !(state.cartlist.filter(item => !item.checked).length);
//   }
};
