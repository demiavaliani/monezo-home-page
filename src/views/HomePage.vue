<template>
	<div class="home-page-wrapper">
		<NavBar />
		<HeaderSection />
		<PartnersSection />
		<MonezoNftSection />
		<FeaturingCollectionSection />
		<YieldfulNft />
		<EcosystemSection />
		<TeamSection />
		<RoadmapSection />
		<JoinMonezo />
	</div>
</template>

<script>
	import NavBar from "@/components/NavBar.vue";
	import HeaderSection from "@/views/sections/HeaderSection.vue";
	import PartnersSection from "@/views/sections/PartnersSection.vue";
	import MonezoNftSection from "@/views/sections/MonezoNftSection.vue";
	import FeaturingCollectionSection from "@/views/sections/FeaturingCollectionSection.vue";
	import YieldfulNft from "@/views/sections/YieldfulNft.vue";
	import EcosystemSection from "@/views/sections/EcosystemSection.vue";
	import TeamSection from "@/views/sections/TeamSection.vue";
	import RoadmapSection from "@/views/sections/RoadmapSection.vue";
	import JoinMonezo from "@/views/sections/JoinMonezo.vue";

	export default {
		name: "HomePage",
		components: {
			NavBar,
			HeaderSection,
			PartnersSection,
			MonezoNftSection,
			FeaturingCollectionSection,
			YieldfulNft,
			EcosystemSection,
			TeamSection,
			RoadmapSection,
			JoinMonezo,
		},
	};
</script>

<style lang="scss" scoped>
	.home-page-wrapper {
		width: 100%;
		overflow: auto;
	}
</style>
