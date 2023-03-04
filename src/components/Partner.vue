<template>
    <div class="partner-card-wrapper">
        <p class="partner-card-title"> <b>{{ title }}</b></p>
        <img class="partner-card-img" :src="img" alt="">
        <p class="partner-card-p"> {{ description }}</p>
    </div>
</template>
<script>
export default {
  name: "PartnerCard",
  props:{
    img:String,
    title:String,
    description:String
  },
  data(){
    return {

    }
  }
};
</script>
<style scoped>
.partner-card-wrapper{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
    width:250px;
    height: 400px;
    background-color:#F2D5F8;
    border-radius: 30px;
    border:10px solid #E6C0E9;
    margin:10px;
    color:#8D89A6;
}

.partner-card-wrapper:hover{
    cursor: pointer;
    transform: scale(1.1);
    border: 10px solid #BFABCB;
}

.partner-card-img{
    width: 250px;
    height: 250px;
    margin: 0 auto;
}
</style>