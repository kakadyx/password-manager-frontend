<template>
  <div class="main-structure">
    <DirectoriesPart />
    <PasswordList />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main-structure {
	display:flex;
	align-content: stretch;
	max-height: calc(100vh - var(--header-height));

	&>div:first-child{
		width: 20%;
	}
	&>div:last-child{
		width: 80%;
	}
}
</style>
