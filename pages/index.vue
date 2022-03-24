<template>
  <div class="main">
    <DesktopHeader />
    <MainStructure />
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style lang="scss" scoped>
.main{
	display:flex;
	flex-direction: column;
	div:last-of-type{
		flex:auto;
	}
	height: 100vh;
	top: 10px;
}
</style>
