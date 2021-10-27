<template>
  <div class="card">
    <button type="button" class="card__button">
      <CIcon  name="IconDelete"/>
    </button>
    <a href="/" class="card__image">
      <img class="card__image-item"
           :src="imageSrc"
           :title="productName"
           :alt="productName">
    </a>
    <div class="card__body">
      <a href="/" class="card__title">{{ productName }}</a>
      <div class="card__caption">{{ productCaption }}</div>
      <div class="card__price">{{ productPrice }} {{ $t('currency') }}</div>
    </div>
  </div>
</template>

<script>
import CIcon from '@/components/ui/icons/CIcon.vue';

export default {
  name: 'CProductCard',
  components: {
    CIcon,
  },
  props: {
    imageSrc: {
      type: String,
    },
    productName: {
      type: String,
    },
    productCaption: {
      type: String,
    },
    productPrice: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/components/productCard/styles.scss"></style>
