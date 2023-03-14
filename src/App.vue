<template>
<div class="app">
<router-view/>
</div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
*{

  margin: 0;
  padding: 0;
}
.app{
  background: #264653;
  color: #fff;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;

}

.section__padding{
  padding: 2rem 2rem;
}
</style>
