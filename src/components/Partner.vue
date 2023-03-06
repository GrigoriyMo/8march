<template>
  <div
    class="partner-card-wrapper"
    :style="{ backgroundColor: color }"
    v-on:click="cardOpened = true"
  >
    <p class="partner-card-title">
      <b>{{ title }}</b>
    </p>
    <img class="partner-card-img" :src="img" alt="" />
    <p class="partner-card-p partner-card-description">{{ description }}</p>
  </div>
  <div v-if="cardOpened" class="partner-card-detailed-wrapper">
    <div class="partner-card-detailed" :style="{ backgroundColor: color }">
      <h2 class="partner-card-title">
        <b> Уникальное предложение: {{ title }}</b>
      </h2>
      <div class="partner-card-opene-description">
        <img class="partner-card-img-detailed" :src="img" alt="" />
        <div class="partner-card-text-opened-block">
          <p class="partner-card-p">{{ description }}</p>
          <p class="partner-card-p">{{ descriptionDetailed }}</p>
          <span class="partner-link"> <b> <a v-bind:href="'partner/'+partnerLink"> Перейти на сайт партнера  </a> </b></span>
        </div>
      </div>

      <button v-on:click="cardOpened = false">Закрыть</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "PartnerCard",
  props: {
    img: String,
    title: String,
    description: String,
    descriptionDetailed: String,
    color: String,
    link: String,
  },
  computed:{
    partnerLink(){
      if(this.link==2){
        return encodeURIComponent(this.link+"%253Freference%253D%D1%80%D0%B0%D1%81%D0%BA%D0%BE%D0%B4%D0%B8%D1%80%D1%83%D0%B9_%D1%8D%D1%82%D0%BE_%D0%BF%D1%80%D0%BE%D0%BC%D0%BE%D0%BA%D0%BE%D0%B4%253A%D0%BE%D0%B3%D0%BE%D0%BD%D1%8C%D0%BD%D0%B5%D0%B3%D0%BF%D0%B1%D0%BE%D0%BD%D1%83%D1%81")
      }else{
        return this.link
      }
    }
  },
  data() {
    return {
      cardOpened: false,
    };
  },
};
</script>
<style scoped>
.partner-card-wrapper {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  width: 200px;
  height: 380px;
  padding: 15px;
  background-color: #f2efea;
  border-radius: 30px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  margin: 20px;
  color: #403d58;
}

.partner-card-wrapper:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.partner-card-img {
  width: 250px;
  height: 250px;
  margin: 0 auto;
}

.partner-card-detailed-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
}

.partner-card-p {
  color: #f2efea;
}
.partner-card-detailed {
  border-radius: 30px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  width: 640px;
  height: 60%;
  color: #403d58;
  padding:15px;
}
.partner-card-text-opened-block{
    padding-left: 15px;
}

.partner-card-img-detailed {
  width: 135px;
  height: 135px;
}

.partner-card-opene-description {
  display: flex;
  flex-direction: row;
}

.partner-link a{
    text-decoration: none;
    color: #fff;
}

.partner-link a:visited{
    text-decoration: none;
    color: #fff;
}


</style>