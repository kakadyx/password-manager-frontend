<template>
  <div>
    <a-input-search placeholder="banana" @search="onSearch" />
  </div>
</template>

<script>

export default {
  methods: {
    onSearch (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
