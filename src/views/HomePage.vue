<template>
	<div class="home-page-wrapper">
		<NavBar></NavBar>
		<HeaderSection />
		<PartnersSection />
		<MonezoNftSection />
		<FeaturingCollectionSection />
		<TeamSection />
		<JoinMonezo />
	</div>
</template>

<script>
	import NavBar from "@/components/NavBar.vue";
	import HeaderSection from "@/views/sections/HeaderSection.vue";
	import PartnersSection from "@/views/sections/PartnersSection.vue";
	import MonezoNftSection from "@/views/sections/MonezoNftSection.vue";
	import FeaturingCollectionSection from "@/views/sections/FeaturingCollectionSection.vue";
	import TeamSection from "@/views/sections/TeamSection.vue";
	import JoinMonezo from "@/views/sections/JoinMonezo.vue";

	export default {
		name: "HomePage",
		components: {
			NavBar,
			HeaderSection,
			PartnersSection,
			MonezoNftSection,
			FeaturingCollectionSection,
			TeamSection,
			JoinMonezo,
		},
	};
</script>

<style lang="scss" scoped>
	.home-page-wrapper {
		width: 100%;
	}
</style>
