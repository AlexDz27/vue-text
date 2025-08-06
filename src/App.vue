<script>
import Expandable from './components/Expandable/Expandable.vue'
import TitledText from './components/TitledText.vue'

const titles = {
  valid: 'верные данные и правильное количество товаров',
}

export default {
  props: ['titles'],

  components: {
    Expandable,
    TitledText,
  }
}
</script>

<template>
  <header class="header">
    <h1>Описание того, что надо тестировать</h1>
  </header>
  <main class="main cont">
    <section class="section">
      <h2 class="section__title">Базовое</h2>

      <p>Сайт открывает все страницы, включая <TitledText title="(x) todo: придумать рауты, на которых это тестировать">404 страницу</TitledText>.</p>
      <p>Каталог показывает <Expandable>неспрятанные</Expandable> <Expandable :title="titles.valid">действительные</Expandable> категории.</p>
      <p>В категориях показываются <Expandable>неспрятанные</Expandable> <Expandable :title="titles.valid">действительные</Expandable> товары.</p>
    </section>

    <section class="section">
      <h2 class="section__title">Бизнес-требования</h2>

      <p>Обновление прайс-листа (п - да бля, вряд ли мне это надо. Просто наверно надо тупо скриптиком и немного руками проверить, что сейчас данные верные) <Expandable title="(пьяный) test: что правильно изменились данные - были затронуты только измененные товары, остальные остались нетронутыми; также показываются несоответствия (просто лишние/отсутствующие артикулы)">верно</Expandable> обновляет <TitledText title="цена, юнит, прочее">данные</TitledText> товаров.</p>

      <p style="margin-bottom: .2em;">Работающее "Скачать прайс-лист"</p>
      <Expandable>
        <ul>
          <li style="text-decoration: line-through;">десктоп</li>
          <li>мобилка</li>
        </ul>
      </Expandable>
    </section>
  </main>
</template>
