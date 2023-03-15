<template>
  <NavBar/>
  <section class="error404">
    <div class="error404-content">
    <h1>404 Not Found</h1>
    <p>Oops, it looks like the page you are looking for does not exist or has been moved. <br/>


<ul>
  Possible reasons:
 <li> The URL you entered may be incorrect</li>

 <li>There may be a temporary issue with our website</li>
</ul>


<ul>
  Here are a few things you can try:
  <li>Double-check the URL for any typos or errors</li>
  <li>Go back to the previous page and try again</li>

</ul>

 </p>
  </div>
  <div class="error404-image">
    <img src="@/assets/errorpage.svg" alt="404 page"/>
  </div>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default{
  name: 'Error404Page',
  components:{NavBar}
}
</script>

<style>
.error404{
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 3rem;
  padding-top: 2rem;
  margin: 1rem ;

}
.error404-content{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    width: 100%;
}
.error404-content h1{
    font-size: 48px;
    font-weight: 800;
}
.error404-content p{
    font-size: 24px;
}

.error404-image {
    width: 100%;
    height: 100%;
}
.error404-image img{
    min-width: 360px;
    height: 100%;

}




@media screen and (max-width: 1024px){
.error404{
    flex-direction: column;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;
    margin: 2rem ;
}
.error404-content h1{
    font-size: 38px;
    font-weight: 800;
}
.error404-content p{
    font-size: 20px;
}

.error404-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.error404-image img{
    width: 400px;
    height: 100%;


}
}
@media screen and (max-width: 425px){

    .error404-content h1{
    font-size: 28px;
    font-weight: 800;
}
.error404-content p{
    font-size: 16px;
}

.error404-image {
    width: auto;
    height: 100%;
    display: inline-block;

}
.error404-image img{
  width: 100px;
    height: 100%;

}
.error404{
  margin: 1rem;
}

}

</style>