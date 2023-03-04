
<template>
  <h1></h1>
  <ul class="partner-list">
    <li v-for="item in partners" :key="item.id">
      <partnerCard
        :img="item.img"
        :title="item.name"
        :description="item.description"
      ></partnerCard>
    </li>
  </ul>
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
      partners: [
        {
          id: 1,
          name: `Таблетки для медитации "Натали+"`,
          img: `ladybug.png`,
          description: `Бесплатная доставка по подписке`,
        },
        {
          id: 2,
          name: `Канарские Уралы`,
          img: `ladybug.png`,
          description: `Ветаптека и пиво для собак со скидкой 50%`,
        },
        {
          id: 3,
          name: `Корейский Эчпочмакико`,
          img: `ladybug.png`,
          description: `Кэшбэк чак-чаком на 25% больше`,
        },
        {
          id: 4,
          name: `Ленинградский пассаж "Хоббит-СПБ"`,
          img: `ladybug.png`,
          description: `7 гномов в подарок по подписке при покупке штанов Гендальфа`,
        },
        {
          id: 5,
          name: `Группа компаний "Новичок"`,
          img: `ladybug.png`,
          description: `Заведем новичка по подписке, заберем  долги`,
        },
      ],
      partnersCount: 5,
    };
  },
};
</script>
<style scoped>

.partner-list {
  display: flex;
  flex-wrap: wrap;
}

li {
    list-style-type: none;
   }

</style>
