<template>
  <form class="form">
    <div class="form__item">
      <CField required
              :title="$t('form.title.name')"
              :placeholder="$t('form.placeholder.name')"
      />
    </div>
    <div class="form__item">
      <CField textarea
              :title="$t('form.title.caption')"
              :placeholder="$t('form.placeholder.caption')"/>
    </div>
    <div class="form__item">
      <CField required
              :title="$t('form.title.image')"
              :placeholder="$t('form.placeholder.image')"/>
    </div>
    <div class="form__item">
      <CField required
              :title="$t('form.title.price')"
              :placeholder="$t('form.placeholder.price')"/>
    </div>
    <CButton :title="$t('form.button.addProduct')" disabled/>
  </form>
</template>

<script>
import CButton from '@/components/ui/button/CButton.vue';
import CField from '@/components/ui/field/CField.vue';

export default {
  name: 'CFormAddProduct',
  components: { CField, CButton },
};
</script>

<style lang="scss" src="@/assets/styles/components/formAddProduct/styles.scss"></style>
