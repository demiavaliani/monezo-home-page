<template>
	<div id="app">
		<NavBar></NavBar>
		<!-- <router-view /> -->
	</div>
</template>

<script>
	import NavBar from "@/components/NavBar.vue";

	export default {
		name: "app",
		components: {
			NavBar,
		},
	};
</script>

<style lang="scss">
	html {
		font-size: 62.5%;
	}

	body {
		margin: 0;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	@font-face {
		font-family: "Poppins";
		src: url("@/assets/fonts/Poppins-SemiBold.eot");
		src: url("@/assets/fonts/Poppins-SemiBold.eot?#iefix")
				format("embedded-opentype"),
			url("@/assets/fonts/Poppins-SemiBold.woff2") format("woff2"),
			url("@/assets/fonts/Poppins-SemiBold.woff") format("woff");
		font-weight: 600;
		font-style: normal;
		font-display: auto;
	}

	@font-face {
		font-family: "Poppins";
		src: url("@/assets/fonts/Poppins-Regular.eot");
		src: url("@/assets/fonts/Poppins-Regular.eot?#iefix")
				format("embedded-opentype"),
			url("@/assets/fonts/Poppins-Regular.woff2") format("woff2"),
			url("@/assets/fonts/Poppins-Regular.woff") format("woff");
		font-weight: normal;
		font-style: normal;
		font-display: auto;
	}

	@font-face {
		font-family: "Poppins";
		src: url("@/assets/fonts/Poppins-Medium.eot");
		src: url("@/assets/fonts/Poppins-Medium.eot?#iefix")
				format("embedded-opentype"),
			url("@/assets/fonts/Poppins-Medium.woff2") format("woff2"),
			url("@/assets/fonts/Poppins-Medium.woff") format("woff");
		font-weight: 500;
		font-style: normal;
		font-display: auto;
	}
</style>
