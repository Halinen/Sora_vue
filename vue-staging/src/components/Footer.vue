<template>
  <div class="todo-footer">
        <label>
          <input type="checkbox" :checked="isAll"/>
        </label>
        <span>
          <span>已完成{{getDone}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" @click="clean">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'FooterR',
    data(){
      return {
      }
    },
    props:['cleanDone','todos'],
    methods:{
      clean(){
        //通知App清除已完成的
        this.cleanDone()
      },
    },
    computed: {
      getDone(){
        return this.todos.reduce((pre,current)=>
          pre += current.done?1:0 , 0
        )
      },
      isAll(){
        return this.getDone === this.todos.length && this.todos.length > 0
      }
    },
}
</script>

<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>