<script>
import ExpandBtn from './ExpandBtn.vue'

export default {
  props: ['title'],

  components: {
    ExpandBtn,
  },

  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    toggle() {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>

<template>
  <ExpandBtn v-if="!isExpanded" @click="toggle" />
  <span class="expandable__space"></span>
  <span @click="toggle" :title="title" class="text-w-description">
    <slot v-if="isExpanded" />
  </span>
</template>