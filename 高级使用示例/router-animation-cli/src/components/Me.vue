<template>
	<div class="me">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
	export default {
		name: "Me",
		data() {
			return {
				msg: "Me"
			};
		}
	};
</script>

<style scoped>
	.me {
        height: 400px;
        padding: 20px;
        background-color: #c5f5f7
    }
</style>