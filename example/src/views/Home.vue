<template>
  <div class="hello">
    <h1>v-per</h1>
    <div v-per="roles">admin 或者 v2 都能看到，传递了一个 Array</div>
    <div v-per="role">只有 v2 能看的内容，传递了一个 String</div>
  </div>
</template>
<script>
export default {
  name: 'Home',

  data() {
    return {
      roles: ['admin', 'v2'],
      role: 'v2'
    };
  }
};
</script>
<style lang=""></style>
