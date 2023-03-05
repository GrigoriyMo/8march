<template>
  <div class="partner-wrapper">
    <div class="partner_one partner" v-if="partnerId == 1">
      <h1>Таблетки для медитации "Натали+"</h1>
      <div v-if="!questOpenedOne">
        <p> Вы пытаетесь открыть сайт партнера, но что-то идет не так и Вас переносит на Архитектурный комитет</p>
      <button class="answer-button" v-on:click="questOpenedOne=true">Подключиться</button>
      </div>

      <div class="quest partner" v-if="questOpenedOne">
        <img class="artem-photo" src="/person.jpg" />
        <button v-on:click="questOneCounter++" class="answer-button">Артем, ты не прав.</button>
        <button class="answer-button">Дизайн говно!</button>
        <button class="answer-button">Одуванчик</button>
      </div>

      <div class="finish-quest-one" v-if="questOneCounter>=3">
        <img v-on:click="goHome" src="/one.png" alt=""/>
      </div>

    </div>
    <div class="partner_two partner" v-if="partnerId == 2">
      {{ partnerId }}
    </div>
    <div class="partner_three partner" v-if="partnerId == 3">
      {{ partnerId }}
    </div>
    <div class="partner_four partner" v-if="partnerId == 4">
      {{ partnerId }}
      {{ partnerId }}
    </div>
    <div class="partner_five partner" v-if="partnerId == 5">
      {{ partnerId }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Partner",
  data() {
    return {
      partnerId: 0,
      questOpenedOne:false,
      questOneCounter:0,
    };
  },
  methods: {
    goHome(){
        this.$router.push('/')
    },
    nataliePlus() {
      document.title = `Таблетки для медитации "Натали+"`;
      alert("500 Internal server error!");
      alert("502 Bad Gateway!");
      alert("503 Service Unavailable!");
      alert("429 Too Many Requests!");
      alert("414 URI Too Long!");
      alert("418 I'm a teapot!");
      alert("505 HTTP Version Not Supported!");
      alert("Отпустите ситуацию, все хорошо, просто дышите!");
    },
  },
  watch:{
    questOneCounter(){
        if(this.questOneCounter>=3){
           this.questOpenedOne= false; 
           
        }
    },
  },
  mounted() {
    this.partnerId = this.$route.params.id;
    if (this.partnerId == 1) {
      this.nataliePlus();
    }
  },
};
</script>
<style scoped>
.partner-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #48919f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.artem-photo {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

.partner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.answer-button {
  /*Reset's every elements apperance*/
  background: none repeat scroll 0 0 transparent;
  border: none;
  border-spacing: 0;
  color: #fff;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 20px;
  font-weight: normal;
  line-height: 1.42rem;
  list-style: none outside none;
  margin: 5px;
  padding: 0;
  text-align: center;
  text-decoration: none;
  text-indent: 0;
  width: 200px;
  height: 50px;
  background-color: rgb(45, 125, 210);
}

.answer-button:active{
    background-color: rgb(169, 197, 227);
}

.answer-button:hover{
    cursor: crosshair;
}

.finish-img{
    position: fixed;
    top:5%;
    left:30%;
    width: 500px;
    height: 700px;;
}

</style>