
<template>
  <div class="main-wrapper">
    <h1>Точно нормальная подписка</h1>
  <div class="auth-wrapper" v-if="authOpened">
    <div class="auth">
      <input v-model="phone" type="text" />
      <button v-on:click="authorize" class="authorize-button">
        Регистрация в подписке по номеру телефона
      </button>
      <p>{{ errorMessage }}</p>
    </div>
  </div>
  <ul class="partner-list">
    <li v-for="item in partners" :key="item.id">
      <partnerCard
        :img="item.img"
        :title="item.name"
        :description="item.description"
        :descriptionDetailed="item.descriptionDetailed"
        :color="item.color"
      ></partnerCard>
    </li>
  </ul>
  </div>
</template>
<script>
import partnerCard from "./Partner.vue";
export default {
  name: "Main",
  components: {
    partnerCard: partnerCard,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      errorMessage: "",
      phone: "+7",
      authOpened: true,
      partners: [
        {
          id: 1,
          name: `Таблетки для медитации "Натали+"`,
          img: `leaf.png`,
          description: `Бесплатная доставка по подписке`,
          descriptionDetailed:
            "Только с нашей подпиской, лучшие таблетки для медитации по СУПЕР цене, с бесплатной доставкой! Переходи на сайт партнера и воспользуйся предложением!",
          color: `#2D7DD2`,
        },
        {
          id: 2,
          name: `Канарские Уралы`,
          img: `rainbow.png`,
          description: `Ветаптека и пиво для собак со скидкой 50%`,
          descriptionDetailed:
            "Только с нашей подпиской, лучшие таблетки для медитации по СУПЕР цене, с бесплатной доставкой! Переходи на сайт партнера и воспользуйся предложением!",
          color: `#97CC04`,
        },
        {
          id: 3,
          name: `Корейский Эчпочмакико`,
          img: `barbecue.png`,
          description: `Кэшбэк чак-чаком на 25% больше`,
          descriptionDetailed:
            "Только с нашей подпиской, лучшие таблетки для медитации по СУПЕР цене, с бесплатной доставкой! Переходи на сайт партнера и воспользуйся предложением!",
          color: `#EEB902`,
        },
        {
          id: 4,
          name: `Ленинградский пассаж "Хоббит-СПБ"`,
          img: `pamela.png`,
          description: `7 гномов в подарок по подписке при покупке штанов Гендальфа`,
          descriptionDetailed:
            "Только с нашей подпиской, лучшие таблетки для медитации по СУПЕР цене, с бесплатной доставкой! Переходи на сайт партнера и воспользуйся предложением!",
          color: `#F45D01`,
        },
        {
          id: 5,
          name: `Группа компаний "Новичок"`,
          img: `ladybug.png`,
          description: `Заведем новичка по подписке, заберем  долги`,
          descriptionDetailed:
            "Только с нашей подпиской, лучшие таблетки для медитации по СУПЕР цене, с бесплатной доставкой! Переходи на сайт партнера и воспользуйся предложением!",
          color: `#9448BC`,
        },
      ],
      partnersCount: 5,
    };
  },
  mounted: function () {
    var phone = window.localStorage.getItem("phone");
    if (phone) {
      this.authOpened = false;
    }
  },
  methods: {
    authorize() {
      if (this.phone.length == 12) {
        this.authOpened = false;
        window.localStorage.setItem("phone", this.phone);
      } else {
        this.errorMessage =
          "Пожалуйста введите номер телефона полностью в формате +79123456789";
      }
    },
  },
};
</script>
<style scoped>

.main-wrapper{
  position: absolute;
  left:0;
  top:0;
  width: 100%;
  height: 100%;
  background-color:#48919F ;
}
.auth-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #7DB938;
  background-image: url(public/welcome.png);
  background-repeat: no-repeat;
  background-position: top;
}

.auth {
  margin: 0 auto;
  padding: 25px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.authorize-button{
  color:#fff;
}

.partner-list {
  display: flex;
  flex-wrap: wrap;
}

li {
  list-style-type: none;
}


:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color:#66D7D1;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

</style>
