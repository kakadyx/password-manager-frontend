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
	height: 100%;
	div:first-child{
		width: 25%;
	}
	div:last-child{
		width: 75%;
	}
}
</style>
