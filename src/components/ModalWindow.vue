<template>
  <div :class="wrapper" v-if="settings.content">
    <div :class="header">{{ settings.header }}</div>
    <div :class="content">
      <AddPaymentForm v-if="settings.content === 'addpaymentform'" />
      <AuthForm v-if="settings.content === 'authform'" />
    </div>
    <div :class="footer">
      <button @click="onCloseClick">Close</button>
    </div>
  </div>
</template>
 
<script>
import AddPaymentForm from './AddPaymentForm'
import AuthForm from './AuthForm'
 
export default {
  components: {
    AddPaymentForm,
    AuthForm,
  },
  props: {
    settings: Object,
  },
  methods: {
    onCloseClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  width: 50%;
  max-width: 500px;
  min-width: 420px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(148, 146, 146);
  border-radius: 5px;
  box-shadow: 0px 5px 10px 2px rgba(67, 77, 85, 0.2);
  margin-bottom: 20px;
}
</style>