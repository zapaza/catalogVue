<template>
  <label class="field">
    <textarea v-if="textarea"
              class="field__input"
              :class="{ 'field__input--textarea': textarea }"
              :name="name"
              :id="id"
              :placeholder="placeholder"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    <input v-else class="field__input"
           :id="id"
           :type="type"
           :name="name"
           :required="required"
           :placeholder="placeholder"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
    />
    <span class="field__title">{{ title }}</span>
  </label>
</template>

<script>
export default {
  name: 'CField',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: String,
    },
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
  emits: ['update:modelValue'],
};
</script>

<style lang="scss" src="@/assets/styles/components/ui/field/styles.scss"></style>
