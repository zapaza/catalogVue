<template>
  <form class="form" @submit.prevent="submit">
    <div class="form__item">
      <CField required
              v-model="title"
              :title="$t('form.title.name')"
              :placeholder="$t('form.placeholder.name')"
      />
    </div>
    <div class="form__item">
      <CField textarea
              v-model="description"
              :title="$t('form.title.caption')"
              :placeholder="$t('form.placeholder.caption')"/>
    </div>
    <div class="form__item">
      <CField required
              v-model="image"
              :title="$t('form.title.image')"
              :placeholder="$t('form.placeholder.image')"/>
    </div>
    <div class="form__item">
      <CField required
              v-model="price"
              type="number"
              :title="$t('form.title.price')"
              :placeholder="$t('form.placeholder.price')"/>
    </div>
    <CButton :title="$t('form.button.addProduct')" :disabled="isDisabled"/>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
import CButton from '@/components/ui/button/CButton.vue';
import CField from '@/components/ui/field/CField.vue';

export default {
  name: 'CFormAddProduct',
  components: { CField, CButton },
  data() {
    return {
      title: '',
      description: '',
      image: '',
      price: '',
    };
  },
  methods: {
    ...mapMutations(['createCatalog']),
    submit() {
      this.createCatalog({
        title: this.title,
        description: this.description,
        image: this.image,
        price: this.price,
        id: Date.now(),
      });
      // eslint-disable-next-line no-multi-assign
      this.title = this.description = this.image = this.price = '';
    },
  },
  computed: {
    isDisabled() {
      if (this.title.length && this.image.length && this.price) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/components/formAddProduct/styles.scss"></style>
