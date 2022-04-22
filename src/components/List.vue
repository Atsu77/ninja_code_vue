<template>
  <div>
    <div class="main-form-wrapper">
      <form v-on:submit.prevent="addDream">
        <input
          type="text"
          v-model="newDreamName"
          class="form-input"
          placeholder="あなたの夢の追加して下さい"
        />
        <input type="submit" class="form-submit" />
      </form>
    </div>
    <div class="main-list-wrapper">
      <ul class="main-list">
        <ListItem v-for="dream in dreams" :dream="dream" :key="dream.id" />
      </ul>
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
export default {
  components: {
    ListItem,
  },
  data: () => ({
    dreams: [
      {
        id: 1,
        name: "野球選手",
      },
      {
        id: 2,
        name: "サッカー選手",
      },
      {
        id: 3,
        name: "弁護士",
      },
    ],
    newDreamName: "",
  }),
  methods: {
    addDream() {
      if (this.newDreamName !== "") {
        this.dreams = [
          ...this.dreams,
          {
            name: this.newDreamName,
          },
        ];
        this.newDreamName = "";
      }
    },
  },
};
</script>

<style>
.main-list-wrapper {
  background: #fff;
  width: 80%;
  margin: 2rem auto;
  border-radius: 15px;
}
.main-list {
  padding: 2rem;
  text-align: left;
}
.main-form-wrapper .form-input {
  width: 30%;
  margin: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 40px;
  padding-left: 8px;
}
.main-form-wrapper .form-submit {
  background: #40b983;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}
</style>