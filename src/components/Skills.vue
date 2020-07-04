<template>
  <div class="hello">
    <!-- {{ name }}

    {{ btnState ? 'The Button is disabled' : 'The button is active' }}
    <button v-on:click="changeName" v-bind:disabled="btnState" >Change Name</button> -->
    <div class="holder"> 
      <ul>
        <li v-for="(data,index) in skills" :key='index'>{{ index }}, {{data.skill}}</li>
      </ul>

      <!-- <p v-if="skills.length >= 2">You have more than 1 skills</p>
      <p v-else>You have less than or equal 1 skill</p> -->
      <!-- <div v-bind:class="{ alert: showAlert, 'another-class': showClass }"></div> -->

      <!-- class object -->
      <!-- <div v-bind:class="alertObject"></div> -->

      <!-- inline style -->
      <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeigth }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      name: 'Coursetro',
      btnState: true,
      skills: [
        {'skill': 'Vue.js'},
        {'skill': 'Front end developer'},
      ],
      showAlert: true,
      showClass: true,
      alertObject: {
        alert: true,
      },
      bgColor: 'yellow',
      bgWidth: '100%',
      bgHeigth: '30px',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alert{
    background-color: yellow;
    width: 100%;
    height: 30px;

  }

  .another-class{
    border: solid 1px black;

  }
</style>
