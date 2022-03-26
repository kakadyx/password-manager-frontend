<template>
  <div class="passwords">
    <table class="password__header">
      <thead>
        <tr>
          <td>Логин</td>
          <td>Пароль</td>
          <td>Ссылка</td>
          <td>Источник</td>
        </tr>
      </thead>
    </table>
    <div class="password__table-wrapper">
      <table class="password__table">
        <tr v-for="item,i in items" :key="i">
          <td>{{ item.login }}</td>
          <td>{{ item.password }}</td>
          <td>{{ item.link }}</td>
          <td>{{ item.resource }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        },
        {
          login: 'kakady',
          password: 'ptica_govna121A',
          link: 'vk.com',
          resource: 'Вконтакте'
        }

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.passwords{
	background: white;
	padding-top: 20px;
	padding-left: 10px;
	display:flex;
	flex-direction: column;
	flex-shrink: 1;
	flex-grow: 0;
}
.password__header{
	width: 100%;
	position: relative;
	thead{
		position: absolute;
		background: white;

		top: 0;
		width: 100%;
		height: 40px;
		tr{
			padding-right: 15px;

			display:flex;
			td{
				width: 25%;
				font-size: 20px;
				color: black;
			}
		}
	}
}
.password__table{
	margin-top: 40px;
	width: 100%;
	tr{
		padding: 4px 0px;
		display:flex;
		cursor:pointer;
		transition: .15s;
		&:hover{
			background: #e6f7ff;
			transition: .15s;
		}
		td{
			width: 25%;
			font-size: 16px;
		}
	}
}

.password__table-wrapper{
	overflow-y: scroll;
}
</style>
