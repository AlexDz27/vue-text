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
    <h1>Глобальное техническое описание проекта</h1>
  </header>
  <main class="main cont">
    <p class="hint">Нажимайте на кнопки <ExpandBtn />, чтобы развернуть описания терминов, а также на <span class="expandable__text">подчеркнутые слова</span>, чтобы их свернуть</p>
    
    <section>
      <p>Каталог показывает <Expandable>неспрятанные</Expandable> <Expandable :title="titles.valid">действительные</Expandable> категории.</p>
      <p>В категориях находятся <Expandable>неспрятанные</Expandable> <Expandable :title="titles.valid">действительные</Expandable> товары.</p>
    </section>
  </main>
</template>
