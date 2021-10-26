<template>
  <main class="main">
    <div class="wrapper">
      <div class="main__form">
        <div class="header__block">
          <h1>{{ $t("header.addProduct") }}</h1>
        </div>
        <CFormAddProduct/>
      </div>
      <div class="main__products">
        <div class="main__products-sorting">
          <CSort/>
        </div>
        <div class="main__products-list">
          <CProductCard/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CProductCard from '@/components/productCard/CProductCard.vue';
import CSort from '@/components/sort/CSort.vue';
import CFormAddProduct from '@/components/formAddProduct/CFormAddProduct.vue';

export default {
  name: 'Home',
  components: {
    CFormAddProduct,
    CSort,
    CProductCard,
  },
};
</script>
