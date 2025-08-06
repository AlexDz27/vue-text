<script>
export default {
  props: ['title'],
}
</script>

<template>
  <span :title="title" class="text-w-description">
    <slot />
  </span>
</template>