<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: "app",
		components: {},
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
			url("@/assets/fonts/Poppins-SemiBold.woff") format("woff"),
			url("@/assets/fonts/Poppins-SemiBold.ttf") format("truetype");
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
			url("@/assets/fonts/Poppins-Regular.woff") format("woff"),
			url("@/assets/fonts/Poppins-Regular.ttf") format("truetype");
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
			url("@/assets/fonts/Poppins-Medium.woff") format("woff"),
			url("@/assets/fonts/Poppins-Medium.ttf") format("truetype");
		font-weight: 500;
		font-style: normal;
		font-display: auto;
	}

	@font-face {
		font-family: "Syne";
		src: url("@/assets/fonts/Syne-Bold.eot");
		src: url("@/assets/fonts/Syne-Bold.eot?#iefix") format("embedded-opentype"),
			url("@/assets/fonts/Syne-Bold.woff2") format("woff2"),
			url("@/assets/fonts/Syne-Bold.woff") format("woff"),
			url("@/assets/fonts/Syne-Bold.ttf") format("truetype");
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}
</style>
