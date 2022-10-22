<template>
	<div class="home-page-wrapper">
		<NavBar></NavBar>
		<PartnersSection />
		<MonezoNftSection />
	</div>
</template>

<script>
	import NavBar from "@/components/NavBar.vue";
	import PartnersSection from "@/views/sections/PartnersSection.vue";
	import MonezoNftSection from "@/views/sections/MonezoNftSection.vue";

	export default {
		name: "HomePage",
		components: {
			NavBar,
			PartnersSection,
			MonezoNftSection,
		},
	};
</script>

<style lang="scss" scoped>
	.home-page-wrapper {
		width: 100vw;
		height: 100vh;
	}
</style>
