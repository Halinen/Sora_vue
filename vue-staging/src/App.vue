<template>
<div id='ss'>
  <HelloWorld carName="carName"/>
  <input type="text" ref="keyWord">
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default{
  components:{HelloWorld},
  data(){
    return {
      carName:'sss'
    }
  }
}
</script>
