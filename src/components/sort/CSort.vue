<template>
  <select :name="nameSort" :id="idSort">
    <option v-for="(option, index) in options"
            :key="index"
            :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'CSort',
  props: {
    nameSort: {
      type: String,
    },
    idSort: {
      type: String,
    },
    options: {
      type: Array,
      required: true,
      default: () => [{}],
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/components/ui/sort/styles.scss"></style>
