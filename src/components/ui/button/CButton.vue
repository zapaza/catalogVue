<template>
  <button class="button" :title="title" :disabled="disabled">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    title: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/components/ui/button/styles.scss"></style>
