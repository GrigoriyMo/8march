<template>
  <div class="partner-wrapper">
    <div class="partner_one partner" v-if="partnerId == 1">
      <h1>Таблетки для медитации "Натали+"</h1>
      <div v-if="!questOpenedOne">
        <p>
          Вы пытаетесь открыть сайт партнера, но что-то идет не так и Вас
          переносит на Архитектурный комитет
        </p>
        <button class="answer-button" v-on:click="questOpenedOne = true">
          Подключиться
        </button>
      </div>

      <div class="quest partner" v-if="questOpenedOne">
        <p style="font-size: 20px">
          Архкомитет в самом разгаре. Артем покраснел от ярости и стучит по
          столу.
        </p>
        <img class="artem-photo" src="/person.jpg" />
        <button v-on:click="playSound" class="answer-button">
          Артем, ты не прав.
        </button>
        <button class="answer-button">Дизайн говно!</button>
        <button class="answer-button">Одуванчик</button>
      </div>

      <div class="finish-quest-one" v-if="questOneCounter >= 3">
        <p style="font-size: 20px">Артем повержен, архкомитет - спасен</p>
        <img class="finish-img" v-on:click="goHome" src="/one.png" alt="" />
      </div>
    </div>
    <div class="partner_two partner" v-if="partnerId.length > 1">
      <div class="reference-ural">
        <h2>Уникальное предложение: Канарские Уралы</h2>
        <p style="font-size: 20px">
          При разборе reference произошла ошибка. Backend система партнера
          "Канарские Уралы" получила ошибку 500 от API СП.
          <br />
          Необходимо исправить референс и ввести его в поле ниже
          <input class="reference-input" v-model="referenceUral" type="text" />
          <button v-on:click="runReference">Подтвердить</button>
          <br><br>
          <p style="color:red">{{ referenceError }}</p>
        </p>
        <div v-if="referenceChecked">
          {
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJHUEIiLCJhdWQiOlsiR1BCIEVjb3N5c3RlbSJdLCJleHAiOjE2NzgyMDMyOTQsImlhdCI6MTY3ODExNjg5NCwidWlkIjoxNDE1MTQzLCJ1Z3AiOjEsInN0cCI6MCwicGlkIjo3LCJ2cm4iOjAsInNpZCI6ImFiODE1Y2I0NGZlYzU2OGFkYjI1YzRjMzY1YjA5NzRiIiwibW9kIjowLCJ1Z3MiOiIifQ.skRbcXdK8e7aTuwvEZxEnycxDd1BBNE2qYqgIekZ_cuus5MrDmAaxR4wXivPzA8seJaselKfUU2plLVy5-seolon7phJOP9oqGty_JIaYngYXMxtgZ6j2tno9IvLzqFfPyv_mELVFk02SrDMqhyjvuPizh7SPjlI8l7KcSqEeskogQbh_IG9bgHhjmhSTj3Bnst9Hmx6xf-oCS5FXHN2xrGtE2KCbQv0vS7NcbUXN750VmW-dX5CoSRb314v14dDfb0WW8sdYLhdzBaDwr3qCm0UQOc7AABIrZ93qOT66buZa7Tw9_wAIPWNT4W3qzvInJVEC4wpnNDZ69r-bHOVtw"
}<br>
<img class="finish-img" src="/40.jpeg" alt="">
<button v-on:click="goHome">Клиентский путь исправлен, партнер счастлив (и Олеся)</button>
        </div>

      </div>
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
import soundLvl1 from "../../public/1lvl.mp3";
import soundLvl2 from "../../public/2lvl.mp3";
import soundLvl3 from "../../public/3lvl.mp3";

export default {
  name: "Partner",
  data() {
    return {
      partnerId: 0,
      questOpenedOne: false,
      questOneCounter: 0,
      referenceUral: "",
      referenceError: "",
      referenceChecked:false
    };
  },
  methods: {
    runReference() {
      if (this.referenceUral == "раскодируй_это_промокод:огоньнегпбонус") {
        this.referenceError = "";
        this.referenceChecked = true;
      } else {
        this.referenceError =
          "Не спеши юный падаван, если не получается, попробовать снова стоит тебе...";
      }
    },
    playSound() {
      this.questOneCounter++;

      var audioLvl1 = new Audio(soundLvl1);
      var audioLvl2 = new Audio(soundLvl2);
      var audioLvl3 = new Audio(soundLvl3);
      switch (this.questOneCounter) {
        case 1:
          audioLvl1.play();
          break;
        case 2:
          audioLvl2.play();
          break;
        case 3:
          audioLvl3.play();
          break;
      }
    },
    goHome() {
      this.$router.push("/");
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
  watch: {
    questOneCounter() {
      if (this.questOneCounter >= 3) {
        this.questOpenedOne = false;
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
  object-fit: contain;
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

.answer-button:active {
  background-color: rgb(169, 197, 227);
}

.answer-button:hover {
  cursor: crosshair;
}

.finish-quest-one {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: hotpink;
}

.finish-img {
  width: 400px;
  height: 600px;
}

.finish-img:hover {
  cursor: pointer;
}

.reference-ural {
  width: 650px;
  height: 800px;
}

.reference-input {
  width: 500px;
}

</style>