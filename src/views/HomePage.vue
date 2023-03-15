<template>
    <NavBar/>
    <section class="homepage">
        <div class="home-content">
            <h1>Welcome to Kounter App! </h1>
       <p>This app is a simple demonstration of how to build a counter component in Vue.js. It allows you to increment, decrement, reset, and set the value of the counter.

The counter component is built using the Vue.js Composition API, which provides a powerful and flexible way to manage state and logic in your components.

Feel free to play around with the counter and explore the <a class="code" href="https://github.com/Luckidubi/counter-app" title="Github link" target="_blank">code</a> to see how it works.

</p>

<div class="btn-grp">
<router-link to="/counter"><button class="button">Get Started  &#10137;</button></router-link>
</div>
        </div>
        <div class="home-image">
<img src="@/assets/homepage.svg" alt="An Astronaut illustration holding a blue flag"/>
        </div>
    </section>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default{
name: 'HomePage',
components: { NavBar}
}
</script>

<style>

.homepage{
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 3rem;
  min-height: 100%;

}
.home-content{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
}
.home-content h1{
    font-size: 48px;
    font-weight: 800;
}
.home-content p{
    font-size: 24px;
}

.home-image {
    width: 100%;
    height: 100%;
}
.home-image img{
    min-width: 360px;
    height: 100%;

}
.button {
  background-color: #2A9D8F;
  color: #fff;
  border: none;
  border-radius: .5rem;
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 3rem;
  transition: all 0.2s ease-in-out;
  font-weight: 800;
  margin-bottom: 3rem;
}
.code{
    text-decoration: underline;
}


@media screen and (max-width: 1024px){
.homepage{
    flex-direction: column;
    margin-bottom: 2rem;
}
.home-content h1{
    font-size: 38px;
    font-weight: 800;
}
.home-content p{
    font-size: 20px;
}

.home-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.home-image img{
   min-width: 360px;
    height: 100%;


}
}
@media screen and (max-width: 425px){

    .home-content h1{
    font-size: 28px;
    font-weight: 800;
}
.home-content p{
    font-size: 16px;
}

.home-image {
    width: auto;
    height: 100%;
    display: inline-block;

}
.home-image img{
  width: 100px;
    height: 100%;

}

}
</style>