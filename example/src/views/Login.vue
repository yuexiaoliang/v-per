<template>
  <div>
    <button @click="setRoles">登录</button>
  </div>
</template>
<script>
export default {
  name: 'Login',

  methods: {
    async setRoles() {
      await this.$store.dispatch('getRoles');
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
<style lang=""></style>
