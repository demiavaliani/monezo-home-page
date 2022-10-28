<template>
	<div class="yieldful-nft">
		<!-- <GlobalModal
			text="Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
			Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
			Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
			Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"
			bg-color="orange"
		/> -->
		<SchemeSvg />
	</div>
</template>

<script>
	// import GlobalModal from "@/components/GlobalModal.vue";
	import SchemeSvg from "./SchemeSvg.vue";

	export default {
		name: "YieldfulNft",

		components: {
			// GlobalModal,
			SchemeSvg,
		},
	};
</script>

<style lang="scss">
	.yieldful-nft {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		min-height: 100vh;
		background: linear-gradient(
			119.73deg,
			#371f67 0%,
			#805cc8 48.95%,
			#9e6dff 99.99%
		);

		.rect__business:hover {
			fill: $monezo-royal-blue;
		}

		.rect__incubator:hover {
			fill: $monezo-venetian-red;
		}

		.rect__score:hover {
			fill: $monezo-jaffa-oragne;
		}

		.rect__yieldful-nft:hover {
			fill: $monezo-lima-green;
		}

		.rect__marketplace:hover {
			fill: $monezo-royal-blue;
		}

		.rect__investors:hover {
			fill: $monezo-venetian-red;
		}

		.rect__escrow:hover {
			fill: $monezo-jaffa-oragne;
		}

		.rect__wallet:hover {
			fill: $monezo-lima-green;
		}

		path {
			pointer-events: none;
		}
	}
</style>
