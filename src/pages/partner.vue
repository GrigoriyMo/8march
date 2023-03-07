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
      <div class="echpoch">
        <p style="font-size: 20px">
          При попытке открыть страницу партнера, произошло невозможное. Это кастомная партнерская страница, которую еще не разработали, чтобы закончить подключение, необходимо правильно расставить последовательность в ТЗ, иначе ничего не получится! 
        </p>

        
        <draggable ref="list"
        :list="list"
        :disabled="!enabled"
        item-key="name"
        class="list-group"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="dragging = false"
      >
        <template #item="{ element }" >
            <div  class="list-group-item" :class="{ 'not-draggable': !enabled }" :id="element.id">
            {{ element.name }}
          </div>

        </template>
      </draggable>

      <button v-on:click="checkSequence" >Публиковать</button>      
     

      <div  class="finish-quest-one finish-quest-two" v-if="tzDone">
      <div v-if="!tzDoneDone">
        <p style="font-size: 20px">
        Конфлюенс успешно импортировал новый порядок разделов в документе, задача уже ушла в работу, можно перекурить!
        </p>
        <img src="/mem1.jpg" alt="">
        Импортированыные данные: <br>
        {{ getTz }}
        <button v-on:click="tzDoneDone=true">Го в эксель!</button>
      </div>
      <img v-if="tzDoneDone" v-on:click="goHome" class=".finish-img" src="/106563009.jpg" alt="">
    </div>

      </div>
    </div>
    <div class="partner_four partner" v-if="partnerId == 4">
      <div class="hobbit echpoch">
        <h3>Уникальное предложение: Ленинградский пассаж "Хоббит-СПБ"</h3>
        <p style="font-size: 20px">
          Добро пожаловать в Шир! В нашем интернет магазине скидка 50% на все товары для подписчиков подписки на подписку с подпиской!
        </p>
        <p style="font-size: 20px">
          Топ-товаров 2023:
        </p>
        <img v-on:click="checkUserPromotion"  class="hobby-list" src="/hobbit.jpeg" alt="">
       <div v-if="loader">
        Проверяем подписку...
        debug:
        GET /v1/partners/:partner_id/clients/:partner_user_id/user-promotions...
        <img  class="loader" src="/loader.gif" alt="">
       </div>
       <div class="finish-text" v-if="public_ids_done">
          Ваша скидка составила 50%! Интеграция в порядке, можно идти и спокойно проверять веб-хуки в системном журнале!
          <button v-on:click="public_ids_done_done=true">https://logi.искать.рф</button>
       </div>
        <div>
          <img class="hobbit-cart" src="/cart.png" alt="">
        </div>
        <div class="hobbit-img-wrapper" v-if="public_ids_done_done">
          <img v-on:click="goHome" src="/556292_big.jpg" alt="" class="finish-img hobbit-img" >
        </div>
      </div>
    </div>
    <div class="partner_five partner" v-if="partnerId == 5">
      <div class="hobbit echpoch">
        <h3>Битрикс 24 - Загрузка промокодов</h3>
        <p style="font-size: 20px">
          Оказалось, что мониторинг дал сбой, и мы не успели понять, что произошло! Промокодов нет, а сейчас во всю идет рассылка подписчикам по этому партнеру! Ай айай! Надо срочно спасать репутацию компании!

          </p>
          <p style="font-size: 20px">
            Все это время промокоды сохранялись прямо в твой браузер! Срочно загрузи их в систему! ОГОООО
          </p>
         1 <input type="text">
          2<input type="text">
          3<input type="text">
         4 <input type="text">
         5 <input type="text" value="novichoknestarichok">
         <button v-on:click="promocodeUploaded=true" button>Загрузить промокоды</button>
         <div v-if="promocodeUploaded" class="hobbit-img-wrapper">
          <img v-on:click="goHome" src="/5ot.jpeg" alt="" class="finish-img hobbit-img" >
         </div>
     </div>
    </div>
  </div>
</template>
<script>
import soundLvl1 from "../../public/1lvl.mp3";
import soundLvl2 from "../../public/2lvl.mp3";
import soundLvl3 from "../../public/3lvl.mp3";
import draggable from "vuedraggable";
export default {
  name: "Partner",
  components: {
    draggable,
  },
  data() {
    return {
      promocodeUploaded:false,
      public_ids_done_done: false,
      public_ids_done: false,
      loader: false,
      enabled: true,
      list: [
        {
          name: "Заголовок 2 [Back] Получение акции партнера (KorEchpoChmak API v1.1)",
          id: 0,
        },
        { name: "Заголовок 2 Критерии приемки", id: 1 },
        { name: "Заголовок 2 [Frontend] Партнерская страница", id: 2 },
        { name: "Заголовок 2 [Back] Список возможных ошибок", id: 3 },
        { name: "Заголовок 3 Правила обработки ошибок", id: 4 },
        { name: "Заголовок 3 Перечень кодов ошибок", id: 5 },
        { name: "Заголовок 2 Задача", id: 6 },
        { name: "Заголовок 2 Контекст", id: 7 },
        { name: "Заголовок 2 UserStory", id: 8 },
        {
          name: "Заголовок 1 Уникальная интеграция - Корейский Эчпочмакико",
          id: 9,
        },
        {
          name: "Рис 1. Диаграмма последовательностей - Открытие партнерской страницы",
          id: 10,
        },
      ],
      dragging: false,
      list2: [],
      partnerId: 0,
      questOpenedOne: false,
      questOneCounter: 0,
      referenceUral: "",
      referenceError: "",
      referenceChecked: false,
      tzDone: false,
      tzDoneDone: false,
    };
  },
  methods: {
    promocode() {
      alert("Промокод не найден - ошибка 404!");
      alert(
        "Упс! Прямо сейчас на проде кончились промокоды! Андрей Татаренко будет в шоке!"
      );
      localStorage.setItem("novichok", "novichoknestarichok");
    },
    checkUserPromotion() {
      this.loader = true;
      var self = this;
      setTimeout(function () {
        var a = prompt(
          "Сервер вернул ошибку 404, но наш отдел поддержки выяснил, что проблема в фильтре public_ids, помогите нашей поддержке исправить запрос:"
        );
        self.public_ids_done = true;
        if (a.length < 1) {
          var a = prompt(
            "Сервер вернул ошибку 404, но наш отдел поддержки выяснил, что проблема в фильтре public_ids, помогите нашей поддержке исправить запрос:"
          );
        }
        localStorage.setItem("public_ids", a);
      }, 6000);
    },
    checkSequence() {
      var arr = new Array(
        this.$refs.list.list[0],
        this.$refs.list.list[1],
        this.$refs.list.list[2],
        this.$refs.list.list[3],
        this.$refs.list.list[4],
        this.$refs.list.list[5],
        this.$refs.list.list[6],
        this.$refs.list.list[7],
        this.$refs.list.list[8],
        this.$refs.list.list[9],
        this.$refs.list.list[10]
      );
      localStorage.setItem("postanovka", JSON.stringify(arr));
      this.tzDone = true;
    },
    runReference() {
      if (this.referenceUral == "раскодируй_это_промокод:огоньнегпбонус") {
        this.referenceError = "";
        this.referenceChecked = true;
        localStorage.setItem(
          "tokenOne",
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJHUEIiLCJhdWQiOlsiR1BCIEVjb3N5c3RlbSJdLCJleHAiOjE2NzgyMDMyOTQsImlhdCI6MTY3ODExNjg5NCwidWlkIjoxNDE1MTQzLCJ1Z3AiOjEsInN0cCI6MCwicGlkIjo3LCJ2cm4iOjAsInNpZCI6ImFiODE1Y2I0NGZlYzU2OGFkYjI1YzRjMzY1YjA5NzRiIiwibW9kIjowLCJ1Z3MiOiIifQ.skRbcXdK8e7aTuwvEZxEnycxDd1BBNE2qYqgIekZ_cuus5MrDmAaxR4wXivPzA8seJaselKfUU2plLVy5-seolon7phJOP9oqGty_JIaYngYXMxtgZ6j2tno9IvLzqFfPyv_mELVFk02SrDMqhyjvuPizh7SPjlI8l7KcSqEeskogQbh_IG9bgHhjmhSTj3Bnst9Hmx6xf-oCS5FXHN2xrGtE2KCbQv0vS7NcbUXN750VmW-dX5CoSRb314v14dDfb0WW8sdYLhdzBaDwr3qCm0UQOc7AABIrZ93qOT66buZa7Tw9_wAIPWNT4W3qzvInJVEC4wpnNDZ69r-bHOVtw"
        );
      } else {
        this.referenceError =
          "Не спеши юный падаван, если не получается, попробовать снова стоит тебе...";
      }
    },
    playSound() {
      this.questOneCounter++;
      localStorage.setItem("arch", "базоваяподписканеагентская_01");
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
    if (this.partnerId == 5) {
      this.promocode();
    }
  },
  computed: {
    getTz() {
      return JSON.parse(localStorage.getItem("postanovka"));
    },
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

.finish-quest-two {
  background-color: #000;
  color: #fff;
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

.echpoch {
  width: 500px;
  text-align: left;
}

.list-group-item {
  cursor: pointer;
  font-size: 20px;
  background-color: rgb(0, 0, 0);
  color: beige;
  border-radius: 5px;
  margin: 10px;
}

.hobbit {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hobby-list,
.hobbit-cart {
  cursor: pointer;
}

.hobbit-cart {
  width: 50px;
  height: 50px;
  margin: 25px auto;
}

.loader {
  border-radius: 50px;
  width: 45px;
  height: 45px;
  position: absolute;
  top: 50%;
  left: 50%;
}

.finish-text {
  font-size: 30px;
  color: orange;
}

.hobbit-img-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;
  background-color: lemonchiffon;
}

.hobbit-img {
  width: 600px;
  position: absolute;
  left: 20%;
  top: 15%;
  border-radius: 50%;
}
</style>