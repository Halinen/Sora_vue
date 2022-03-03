<template>
  <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <HeaderR :addTodo="addTodo"/>
      <ListT :todos="todos" :updateTodo="updateTodo"
      :deleteItem = 'deleteItem'/>
      <FooterR :todos="todos" :cleanDone="cleanDone"/>
    </div>
  </div>
</div>
</template>

<script>
  import HeaderR from './components/Header'
  import FooterR from './components/Footer.vue'
  import ListT from './components/List.vue'
  export default {
    name: 'App',
    components: {HeaderR,FooterR,ListT},
    data(){
      return{
        todos:[
          {id:0,name:'aaa',done:true},
          {id:1,name:'bbb',done:false},
          {id:2,name:'ccc',done:true},
        ]
      }
    },
    methods:{
      //添加todo
      addTodo(todoObj){
        //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
        this.todos.unshift(todoObj)
      },
      cleanDone(){
        this.todos = this.todos.filter((todoObj)=>{
          return todoObj.done === false
        })
      },
      //通知app去更新这个todo----使用id
      // updateTodo(id,done){
      //   this.todos = this.todos.map((todo)=>{
      //     if(id === todo.id){
      //       return {...todo,done:done}//把原来所有的属性生成一个对象，但是修改done值，因为重名就写一个done就好，不然就是done:done
      //     }
      //     else{
      //       return todo//不更新就丢出去
      //     }
      //   })
      // }
      //通知app去更新这个todo----使用index
      updateTodo(idx,done){
        this.todos[idx].done=done
      },
      deleteItem(idx){
        //在索引idx位置删除1个元素
        this.todos.splice(idx,1)
        console.log(idx)
      }
    }
  }
</script>

<style>
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}


/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}




</style>