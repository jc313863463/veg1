export const gettersNA=(state,getters)=>{
  return state.name.length
}
export const gettersAge=(state,getters)=>{
  return state.age+getters.gettersNA
}
