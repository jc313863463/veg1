import * as types from './mutation-types.js';
export default{
  [types.MUTATIONAGE](state,payload){
    state.age+=1;
    console.log(payload)
  },
  [types.MUTATIONNAME](state,payload){
    state.name="jcc";
    console.log(payload)
  }

}
