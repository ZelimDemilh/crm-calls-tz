<template>
  <form class="form" @submit.prevent>
    <input
      class="input" type="text"
      v-bind:value="link1"
      @input="link1 = $event.target.value"
    >
    <input
      class="input" type="text"
      v-bind:value="link2"
      @input="link2 = $event.target.value"
    >
    <input
      class="input" type="text"
      v-bind:value="link3"
      @input="link3 = $event.target.value"
    >
    <button
      @click="getDataGradually"
    >
      Получить данные последовательно
    </button>
    <button
      @click="getDataParallel"
    >
      Получить данные парарерльно
    </button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      link1: "",
      link2: "https://storage.yandexcloud.net/ccscenario/0b8ab09975fbd4589879351a6a51021d.json",
      link3: ""
    }
  },
  methods: {
    async getDataGradually() {
      try {
        const {data} = await axios.post("http://localhost:6557/gradually", [this.link1, this.link2, this.link3].filter(el => el !== ""))
        alert(JSON.stringify(data))
      }catch{
        alert("ошибка")
      }
    },
    async getDataParallel(){
      try {
        const {data} = await axios.post("http://localhost:6557/parallel", {links: [this.link1, this.link2, this.link3].filter(el => el !== "")})
        alert(JSON.stringify(data))
      }catch{
        alert("ошибка")
      }
    }

  }
}
</script>

<style>
.form{
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
}

.form *{
  margin-top: 10px;
}
</style>
