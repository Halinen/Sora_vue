<template>
  <ul class="todo-main">
        <ItemM v-for="(t,index) in todos" :key='t.id' :todo='t'
        :updateTodo = 'updateTodo'
        :deleteItem = 'deleteItem'
        :index = 'index'/>
    </ul>
</template>

<script>
  import ItemM from './Item.vue'
export default {
    name:'ListT',
    components:{ItemM},
    props:['todos','updateTodo','deleteItem']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>