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
          <CSort name-sort="sorting"
                 id-sort="id-sort"
                 :options="options"/>
        </div>
        <div class="main__products-list">
          <CProductCard v-for="(product, index) in validCatalog"
                        :key="index"
                        :image-src="product.image"
                        :product-name="product.title"
                        :product-caption="product.description"
                        :product-price="product.price"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CProductCard from '@/components/productCard/CProductCard.vue';
import CSort from '@/components/sort/CSort.vue';
import CFormAddProduct from '@/components/formAddProduct/CFormAddProduct.vue';
import i18n from '../i18n';

const { t } = i18n.global;

export default {
  name: 'Home',
  components: {
    CFormAddProduct,
    CSort,
    CProductCard,
  },
  computed: mapGetters(['validCatalog', 'catalogCount']),
  methods: mapActions(['fetchCatalog']),
  data() {
    return {
      options: [
        {
          value: '1',
          name: t('sorting.option.default'),
        },
      ],
    };
  },
  async mounted() {
    // this.$store.dispatch("fetchPosts");
    this.fetchCatalog();
  },
};
</script>
