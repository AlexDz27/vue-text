<script>
import ExpandBtn from './components/Expandable/ExpandBtn.vue'
import Expandable from './components/Expandable/Expandable.vue'

const titles = {
  valid: 'верные данные и правильное количество товаров',
}

export default {
  props: ['titles'],

  components: {
    ExpandBtn,
    Expandable,
  }
}
</script>

<template>
  <header class="header">
    <h1>Описание того, что надо тестировать</h1>
  </header>
  <main class="main cont">
    <section class="section">
      <h2 class="section__title">Глобальное</h2>

      <p>Сайт открывает все страницы, включая 404 страницу.</p>
      <p>Каталог показывает <Expandable>неспрятанные</Expandable> <Expandable :title="titles.valid">действительные</Expandable> категории.</p>
      <p>В категориях находятся <Expandable>неспрятанные</Expandable> <Expandable :title="titles.valid">действительные</Expandable> товары.</p>
    </section>
  </main>
</template>
