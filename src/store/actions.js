import * as types from './mutation-types.js'
export const actionAge=({commit,state},payload)=>{
  commit(types.MUTATIONAGE)
  if(state.age>=18){
    commit(types.MUTATIONNAME)
  }
  console.log(payload);
}
