<template>
  <div class="passwords">
    <table class="password__table">
      <thead>
        <tr>
          <td>кек</td>
          <td>кек</td>
          <td>кек</td>
          <td>кек</td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.passwords{
	background: white;
}
.password__table{
	width: 100%;
	position: relative;
	thead{
		position: absolute;
		top: 0;
		width: 100%;
		background: crimson;
		tr{
			display:flex;
			td{
				width: 25%;
			}
		}
	}
}
</style>
