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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap');

*{

  margin: 0;
  padding: 0;
}
.app{
  background: #264653;
  color: #fff;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

}

section{
  padding: 2rem 2rem;
}
</style>
