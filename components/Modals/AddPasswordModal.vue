<template>
  <CModal :activation-event="`pass-add-modal-open`" :deactivation-event="`pass-add-modal-close`">
    <div class="password-modal" />
  </CModal>
</template>

<script>
import CModal from '@/components/common/CModal.vue'
export default {
  components: {
    CModal
  },
  data () {
    return {
      password: null,
      login: null,
      resource: null,
      url: null
    }
  }
}
</script>

<style lang="scss" scoped>
.password-modal{
    width: 350px;
    height: fit-content;
    background: var(--post-main-color);
    padding: 20px;
    border-radius: 5px;
    h2{
        text-align:center;
        margin-bottom: 20px;
    }
}
.password-modal__input-block{
    display:flex;
    flex-direction: column;
    gap: 10px;
    input{
        outline:none;
        border:none;
        border-radius: 2px;
        background: var(--text-color);
        padding: 5px;
    }
    button{
        margin-top: 10px;
        color: white;
        padding: 10px;
        background-color: var(--main-color);
    }
}
</style>
