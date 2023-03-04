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
    <p class="partner-card-p">{{ description }}</p>
  </div>
  <div v-if="cardOpened" class="partner-card-detailed-wrapper">
    <div class="partner-card-detailed" :style="{ backgroundColor: color }">
      <h2 class="partner-card-title">
        <b> Уникальное предложение: {{ title }}</b>
      </h2>
      <img class="partner-card-img-detailed" :src="img" alt="" />
      <p class="partner-card-p">{{ description }}</p>
      <p class="partner-card-p">{{ descriptionDetailed }}</p>
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
  width: 250px;
  height: 400px;

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
.partner-card-detailed {
  border-radius: 30px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  width: 640px;
  height: 60%;
  color: #403d58;
}

.partner-card-img-detailed {
  width: 150px;
  height: 150px;
}
</style>