<template>
    <NavBar/>
    <section class="counter">
     <div class="counter-cover">
         <h2 class=""> {{ count }}</h2>
     </div>

      <div class="input-grp">
        <input title="Set a value" class="input-field" type="number" v-model="value" />
        <input title="Submit value" class='submit' type='submit' @click='setValue(value)' value='Set Value'>
      </div>
      <div class="btn-group">
        <button title="decrement value" class="" @click="decrement">
          -
        </button>
        <button title="increment value" class="" @click="increment">
          +
        </button>
      </div>
      <button title="reset value" class="reset" @click="reset">
        Reset
      </button>
    </section>
  </template>

  <script>
import NavBar from '@/components/NavBar.vue'
import useCounter from '@/composable/useCounter'

export default{

        name: 'CounterPage',

        components:{
          NavBar,

        },
        setup(){
        const {count, increment, decrement, reset, setValue } = useCounter();

      return {
        count,
        increment,
        decrement,
        reset,
        setValue,
        value: 0,

      }
    }}
</script>

<style>
section{
    padding: 2rem 2rem
}
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  margin: 2rem 0rem;
}

.counter h2 {
  font-size: 2rem;
  font-weight: bold;



}

.counter-cover{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #E76F51;
min-width: 200px;
min-height: 200px;
  object-fit: contain;
  border-radius: 50%;
margin-bottom: 2rem;
overflow-x: scroll;
padding: 1rem;
}

.btn-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 2rem;

}

button {
  background-color: #2A9D8F;
  color: #fff;
  border: none;
  border-radius: .5rem;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  transition: all 0.2s ease-in-out;
  font-weight: 800;
}

button:hover {
  background-color: #E9C46A;
  color: black;
}
.input-grp{
    display: flex;
    flex-direction: row;
}

.input-field{
padding: 1rem;
border: none;
border-top-left-radius: 0.5rem;
border-bottom-left-radius: 0.5rem;
font-size: 18px;
font-weight: 800;
color: grey;
outline: none;
}
.input-field:focus{
    border: .5px solid #2A9D8F;
}
.submit{
    padding: 0 1rem;
    border-radius: 0 0.5rem 0.5rem 0;
    border: none;
    background-color: #2A9D8F;
  color: #fff;


  cursor: pointer;
  font-size: 1rem;

  transition: all 0.2s ease-in-out;
  font-weight: 800;
}

.submit:hover {
  background-color: #E9C46A;
  color: #fff;
}
.reset:hover{
    background-color: #E76F51;
    color:#fff;
}

@media screen and (max-width: 550px) {
    .input-grp{

    flex-direction: column;
    gap: 1rem;
}
.input-field{
padding: 1rem;
border: none;
border-top-right-radius: 0.5rem;
border-bottom-right-radius: 0.5rem;
font-size: 18px;
font-weight: 800;
color: grey;

}
.submit{
    padding: 1rem;
    border-radius: 0.5rem 0.5rem;
}
.counter h2 {
  font-size: 1.5rem;

}

.counter-cover{

min-width: 100px;
min-height: 100px;

}
    }
</style>