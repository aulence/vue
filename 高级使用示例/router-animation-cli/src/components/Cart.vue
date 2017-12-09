<template>
	<div class="cart">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
	export default {
		name: "Cart",
		data() {
			return {
				msg: "Cart"
			};
		}
	};
</script>

<style scoped>
    .cart {
        height: 400px;
        padding: 20px;
        background-color: #c5f7d8
    }
</style>