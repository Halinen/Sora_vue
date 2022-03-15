<script setup lang="ts">
import { ref } from 'vue';
import { getHello } from './api/default/default';
const title = ref("")
getHello().then(res => {
    title.value = res.data
})
</script>

<template>
<h1>{{title}}</h1>
<router-view></router-view>
</template>

<style lang="scss">

</style>