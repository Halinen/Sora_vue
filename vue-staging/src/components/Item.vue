<template>
    <li @mouseenter="isEnter = true"
        @mouseleave="isEnter = false"
        :class="{'high-light': isEnter}">
        <label>
        <input type="checkbox" :checked='todo.done' @click="update(index, $event)"/>
        <span>{{todo.name}}</span>
        </label>
        <button class="btn btn-danger" :style="{display:isEnter?'block':'none'}">删除</button>
    </li>
</template>

<script>
export default {
    name:'ItemM',
    data(){
      return{
        isEnter:false
      }
    },
    props:['todo','updateTodo','index'],
    methods:{
      //用id更新
      // update(id,ev){
      //   //console.log(ev.target.checked)
      //   this.updateTodo(id, ev.target.checked)
      // }
      //用idx更新
      update(idx,ev){
        //console.log(ev.target.checked)
        this.updateTodo(idx, ev.target.checked)
      }
    }
}
</script>

<style scoped>
.high-light {
  background-color: skyblue;
}
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>