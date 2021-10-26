<template>
  <Component :is="name"
             class="icon"
             :style="{ fontSize: `${size}px` }" />
</template>

<script>
import * as icons from './src/index';

export default {
  name: 'CIcon',
  components: {
    ...icons,
  },
  props: {
    name: {
      type: [String, Number],
      validator(value) {
        return (
          Object.keys(icons)
            .map((i) => i)
            .indexOf(value) !== -1
        );
      },
    },
    size: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
