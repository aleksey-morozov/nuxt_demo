<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Пример еще одной страницы
      </h1>
      <h2 class="subtitle">
        Здесь какой-то текст
      </h2>
      <div>На счету: {{ money | formatMoney }}</div>
      <div>Дата: {{ now | formatDate }}</div>
      <div class="links">
        <nuxt-link to="/" class="button--green">Вернуться на главную</nuxt-link>
      </div>
      <hr>
      <div class="text" v-linkify >
        {{ text }}
      </div>
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
      money: 100500.12,
      now: new Date('2019-01-01'),
      text: `Это пример текста. Тут есть всякое: http://vk.com/`
    };
  },
  head() {
    return {
      title: 'Страница о компании'
    }
  },
  filters: {
    formatMoney(val) {
      return new Intl.NumberFormat('ru-RU').format(val);
    },
    formatDate(val) {
      const date = new Date(val);
      let d = date.getDate();
      let m = date.getMonth() + 1;
      let y = date.getFullYear();

      return `${d}.`.padStart(3, '0') + `${m}.`.padStart(3, '0') + `${y}`;
    }
  },
  directives:  {
    linkify: {
      // этот хук выполняется только один раз когда директива применяется к элементу
      // элемент здесь это ссылка на DOM-элемент того компонента или тега, к которому применена директива
      bind(el) {
        el.style.border = "3px solid red";
        el.innerHTML = el.innerHTML
          .replace(/(https?:\/\/[-a-z0-9]+\.[a-z]{2,6}([\w/]+)?)?/ig, `<a href="$1">$1</a>`);
      },
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
