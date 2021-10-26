<template>
  <label class="field">
    <textarea v-if="textarea"
              class="field__input"
              :class="{ 'field__input--textarea': textarea }"
              :name="name"
              :id="id"
              :placeholder="placeholder"></textarea>
    <input v-else class="field__input"
           :id="id"
           :name="name"
           :required="required"
           :placeholder="placeholder"/>
    <span class="field__title">{{ title }}</span>
  </label>
</template>

<script>
export default {
  name: 'CField',
  props: {
    title: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    textarea: {
      type: Boolean,
    },
    name: {
      type: String,
    },
    id: {
      type: String,
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/components/ui/field/styles.scss"></style>
