<template>
  <div class="hello">
    <h1></h1>
    <h2>Essential Links</h2>
    <span>{{name}}</span>
    <span>{{age}}</span>
    <span>{{gettersNA}}</span>
    <span>{{gettersAge}}</span>
    <input type="button" name="" value="12345" @click="con()">
    <input type="button" name="" value="123451" @click="MUTATIONAGE(1)">
    <input type="button" name="" value="123452" @click="MUTATIONNAME(2)">
    <input type="button" name="" value="2222" @click='actionsA(12233)'>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import {mapGetters} from "vuex"
  import {mapActions} from "vuex"
  import {mapMutations} from "vuex"
export default {
    data:function(){
      return {}
    },
    computed:{
      ...mapState(['name','age']),
      ...mapGetters(['gettersNA','gettersAge'])
    },
  methods:{
    con(){
      console.log(this.$store)
    },
    ...mapMutations(['MUTATIONAGE','MUTATIONNAME']),
    actionsA(data){
      this.$store.dispatch('actionAge',data)
    }
  },
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
