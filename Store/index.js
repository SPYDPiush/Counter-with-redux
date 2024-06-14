import { createStore } from "redux";

const INTIAL_VALUE = {
  counter:5
}

const counterReducer = (store = INTIAL_VALUE,action) => {

  let currStore = store

  if(action.type == "INCRECMENT"){
    currStore =  {...store,counter:store.counter+=1};
  }

  else if(action.type == "DECREMENT"){
    currStore = {...store,counter:store.counter-=1};
  }
  else if(action.type == "ADD_NUM"){
    currStore= {...store,counter:store.counter+=parseInt(action.payload.addnum)}
  }

  else if(action.type == "SUB_NUM"){
    currStore = {...store,counter:store.counter-=parseInt(action.payload.subnum)}
  }

  return currStore

}

export const storeCounter = createStore(counterReducer)




