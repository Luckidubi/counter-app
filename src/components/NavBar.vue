<template>
    <nav>

        <p><router-link to="/">Kounter</router-link></p>

<ul class="nav-links">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/counter">Counter</router-link></li>
</ul>

    </nav>
</template>


<style>
nav{
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  gap: 9%;
  position: sticky;
  top: 0;
  background:;
z-index: 1;
font-size: 20px;
  font-weight: 400;
}

.nav-links{

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
.nav-links li{
    list-style-type: none;
    margin: 0 1rem;


}

a{
    text-decoration: none;
    color: #fff;
    cursor: pointer;
}
.nav-links li>a:hover{

    color: #E76F51;
}
</style>