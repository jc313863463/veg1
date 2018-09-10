export const gettersAge=(state)=>{
  return state.age.length
}
export const gettersNA=(state,getters)=>{
  return state.name.length+getters.gettersAge
}
