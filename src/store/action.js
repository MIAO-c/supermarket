import {ADD_COUNT, ADD_CART} from "./stateType"
export const actions = {
    addcart(context, payload) {
        // let olditem = null;
        // for (let item of state.cartlist) {
        //   if (item.iid == payload.iid) {
        //     olditem = item;
        //   }
        // }
    
        let olditem = context.state.cartlist.find(item => item.iid === payload.iid);
        if (olditem) {
            context.commit(ADD_COUNT,olditem)
        } else {
            context.commit(ADD_CART,payload)
        }
      }
}