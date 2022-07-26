<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <div v-per="'V2'">String</div>
    <div v-per="['V1', 'V3']" type="button">Array</div>
    <div v-per.all="['V1', 'V2', 'ADMIN']">All and Array</div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
