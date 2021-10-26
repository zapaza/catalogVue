<template>
  <div class="card">
    <div class="card__button">

    </div>
    <div class="card__image">
      <img class="card__image-item"
           :src="imageSrc"
           :title="productName"
           :alt="productName">
    </div>
    <div class="card__body">
      <div class="card__title">{{ productName }}</div>
      <div class="card__caption">{{ productCaption }}</div>
      <div class="card__price">{{ productPrice }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CProductCard',
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
      type: String,
    },
  },
};
</script>
