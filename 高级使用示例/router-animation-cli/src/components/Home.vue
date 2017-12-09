<template>
	<div class="home">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
	export default {
		name: "Home",
		data() {
			return {
				msg: "Home"
			}
        }
	};
</script>

<style scoped>
    .home {
        height: 400px;
        padding: 20px;
        background-color: #f7c8c5
    }
</style>