<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Каталог
      </h1>
      <h2 class="subtitle">
        {{ test }}
      </h2>
      <button @click="getTest">Получить данные из стора</button>
      <hr>
      {{ $store.state.test }}
      <div class="links">
        <nuxt-link to="/" class="button--green">Главная</nuxt-link>
        <nuxt-link to="/about" class="button--green">О компании</nuxt-link>
      </div>
      <hr />
      <nuxt-link to="/catalog/1" class="button--green">Первый товар</nuxt-link>
      <nuxt-link to="/catalog/2" class="button--green">Второй товар</nuxt-link>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      test: '',
    }
  },
  methods: {
    async getTest() {
      this.test = await this.$store.dispatch('GET_TEST');
    },
  },
  // хук жизненного цикоа, который используется для предворительной загрузки данных в Nuxt
  async asyncData({ store }) {
    await store.dispatch('LOAD_TEST');
  },
}
</script>
