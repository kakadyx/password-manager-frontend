<template>
  <div class="directories">
    <a-directory-tree default-expand-all @select="onSelect" @expand="onExpand">
      <a-tree-node data-id="1-0" title="All" is-leaf />
      <a-tree-node data-id="1-1" title="Favourites" is-leaf />
      <a-tree-node data-id="0-0" title="parent 0">
        <a-tree-node data-id="1-0" title="leaf 0-0" is-leaf />
        <a-tree-node data-id="1-1" title="leaf 0-1" is-leaf />
      </a-tree-node>
      <a-tree-node data-id="0-1" title="parent 1">
        <a-tree-node data-id="0-1-0" title="leaf 1-0" is-leaf />
        <a-tree-node data-id="0-1-1" title="leaf 1-1" is-leaf />
      </a-tree-node>
    </a-directory-tree>
    <div class="add-button">
      <hr>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeDirectory: null
    }
  },
  methods: {
    onSelect (keys, event) {
      console.log('Trigger Select', keys, event)
    },
    onExpand () {
      console.log('Trigger Expand')
    }
  }
}
</script>

<style lang="scss" scoped>
.directories {
	background: rgb(212, 206, 206);
	position: relative;
}

.add-button {
	width: 50px;
	height: 50px;
	background:#1890ff;
	position: absolute;
	right: 20px;
	bottom: 20px;
	border-radius: 50%;
	cursor:pointer;
	transition: .3s;
	hr{
		border: none;
		outline:none;
		width: 30px;
		height: 4px;
		background: white;
		border-radius: 10px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin:0;
		transform: translate(-50%, -50%);
		&:last-of-type{
			transform: translate(-50%, -50%) rotate(90deg);
		}
	}
	&:hover{
		background:#ff5918;
		transition: .3s;
	}
}
</style>
