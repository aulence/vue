<template>
	<div class="category">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
	export default {
		name: "Category",
		data() {
			return {
				msg: "Category"
			};
		}
	};
</script>

<style scoped>
    .category {
        height: 400px;
        padding: 20px;
        background-color: #f6f7c5
    }
</style>