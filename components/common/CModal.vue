<template>
  <div style="position: relative; height: 100%">
    <div
      ref="overlay"
      class="modal-bg"
      @click="$root.$emit(deactivationEvent)"
    />
    <div ref="modal" class="modal">
      <CloseIcon class="modal__close-icon" @click="$root.$emit(deactivationEvent)" />
      <slot />
    </div>
  </div>
</template>

<script>
import CloseIcon from '@/assets/svg/close-icon.svg'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Modal',
  components: {
    CloseIcon
  },
  props: {
    activationEvent: {
      default: 'modal-open'
    },
    deactivationEvent: {
      default: 'modal-close'
    },
    onCloseStartCallback: {
      default: null
    },
    onOpenStartCallback: {
      default: null
    },
    onCloseEndCallback: {
      default: null
    },
    onOpenEndCallback: {
      default: null
    }
  },
  data () {
    return {
      active: false
    }
  },
  watch: {
    active (v) {
      this.$refs.overlay.classList.toggle('active')
      this.$refs.modal.classList.toggle('active')
    }
  },
  mounted () {
    this.$root.$on(this.activationEvent, this.open)
    this.$root.$on(this.deactivationEvent, this.close)
  },
  beforeDestroy () {
    this.$root.$off(this.activationEvent, this.open)
    this.$root.$off(this.deactivationEvent, this.close)
  },
  methods: {
    open (payload) {
      this.$emit('open', payload)
      if (this.onOpenStartCallback) { this.onOpenStartCallback() }
      this.active = true
      if (this.onOpenEndCallback) { this.onCloseEndCallback() }
    },
    close () {
      if (this.onCloseStartCallback) { this.onCloseStartCallback() }
      this.active = false
      if (this.onCloseEndCallback) { this.onCloseEndCallback() }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-bg {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
    display: none;
    top: 0;
    left: 0;
    z-index: 1000;
    backdrop-filter: blur(3px);
}
.modal__close-icon{
    position:absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    height: 16px;
}
.modal {
    margin: auto;
    position: fixed;
    display: none;
    z-index: 1001;
    top: 50%;
    left: 50vw;
    transform: translate(-50%, -50%);
    overflow: hidden;
}
.active {
    display: block;
    opacity: 1;
}
</style>
