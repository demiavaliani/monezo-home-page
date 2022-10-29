<template>
	<div class="yieldful-nft">
		<p class="text--top">Few clicks and you’re done</p>
		<p class="text--large">How Yieldful NFT works</p>
		<p class="text--small">Start earn in 3 simple steps</p>

		<SchemeSvg class="yieldful-nft__scheme" />
	</div>
</template>

<script>
	import SchemeSvg from "../SvgComponents/SchemeSvg.vue";

	export default {
		name: "YieldfulNft",

		components: {
			SchemeSvg,
		},
	};
</script>

<style lang="scss">
	.yieldful-nft {
		position: relative;
		display: flex;
		flex-direction: column;
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

		.rect {
			&.rect__business:hover {
				fill: $monezo-royal-blue;
			}

			&.rect__incubator:hover {
				fill: $monezo-venetian-red;
			}

			&.rect__score:hover {
				fill: $monezo-jaffa-oragne;
			}

			&.rect__yieldful-nft:hover {
				fill: $monezo-lima-green;
			}

			&.rect__marketplace:hover {
				fill: $monezo-royal-blue;
			}

			&.rect__investors:hover {
				fill: $monezo-venetian-red;
			}

			&.rect__escrow:hover {
				fill: $monezo-jaffa-oragne;
			}

			&.rect__wallet:hover {
				fill: $monezo-lima-green;
			}
		}

		path {
			pointer-events: none;
		}

		.text {
			&--top {
				margin-bottom: 1.8rem;
				color: $monezo-white;
				font-family: "Poppins";
				font-size: 1.8rem;
				font-weight: 500;
			}

			&--large {
				margin-bottom: 3.6rem;
				color: $monezo-lima-green;
				font-family: "Syne";
				font-size: 3.2rem;
				font-weight: 700;
			}

			&--small {
				margin-bottom: 8.6rem;
				color: $monezo-black;
				font-family: "Poppins";
				font-size: 1.8rem;
				font-weight: 400;
			}
		}

		&__scheme {
			width: 65%;
			height: 100%;
		}
	}
</style>
