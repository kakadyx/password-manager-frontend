<template>
  <div class="header">
    <div class="header__logo">
      <h1>LOGO</h1>
    </div>
    <SearchBar class="header__search" />
    <AccountInfo class="header__account" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      key: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
	height: var(--header-height);
	border-bottom: 2px solid gray;

	display:flex;
	align-items:center;
	.header__logo{
		justify-self: flex-start;
		width: 25%;
		padding-left: 20px;
	}
	.header__search{
		justify-self:flex-end;
		width: 50%;
	}
	.header__account{
		width: 25%;
	}
}
</style>
