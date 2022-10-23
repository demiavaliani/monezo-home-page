<template>
	<div class="monezo-nft-section">
		<div class="monezo-nft-section__left--image">
			<img src="@/assets/images/monezo-nft-section monkers-group.png" />
			<!-- <img src="@/assets/images/monezo-nft-section-monker-100.png" /> -->
			<!-- <img src="@/assets/images/monezo-nft-section-monker-1k.png" /> -->
			<!-- <img src="@/assets/images/monezo-nft-section-monker-5k.png" /> -->
			<!-- <img src="@/assets/images/monezo-nft-section-monker-10k.png" /> -->
		</div>

		<div class="monezo-nft-section__right--description">
			<p class="text text__top">More than an investment platform</p>

			<p class="text text__large">
				Start your passive income Journey with Monezo NFT
			</p>

			<p class="text text__small">
				With Monezo platform you get access to Monezo Yieldful NFT, which are
				backed by stable income from real world assets and business revenue.
				<br />
				<br />
				NFT holders can choose best options for everyone from different NFT
				collections with fixed, flexible or combined yield which depends on
				asset type and business.
			</p>

			<ButtonPrimary text="Get NFT" :width="'21.5rem'" bg-color="blue" />
		</div>
	</div>
</template>

<script>
	import ButtonPrimary from "@/components/ButtonPrimary.vue";

	export default {
		name: "MonezoNftSection",
		components: { ButtonPrimary },
	};
</script>

<style lang="scss" scoped>
	.monezo-nft-section {
		display: flex;
		width: 100%;
		height: 100vh;
		background: linear-gradient(261.77deg, #f24981 0%, #fb92b5 100%);

		&__left--image {
			display: flex;
			justify-content: center;
			align-items: center;
			min-width: 60%;
			height: 100vh;

			img {
				// width: auto;
				width: 49vw;
				// height: 70%;
			}

			// img {
			// 	position: absolute;
			// 	width: auto;
			// 	max-height: 43.2%;

			// 	&:first-child {
			// 		top: 21.6%;
			// 		left: 15.5%;
			// 		// top: 18rem;
			// 		// left: -10rem;
			// 		max-height: 38.9%;
			// 	}

			// 	&:nth-child(2) {
			// 		top: 11.5%;
			// 		left: 18.4%;
			// 		// top: 9.5rem;
			// 		// left: -7rem;
			// 		z-index: 1;
			// 	}

			// 	&:nth-child(3) {
			// 		top: 33.6%;
			// 		// left: 45.6%;
			// 		left: 38.4%;
			// 		// top: 28rem;
			// 		// left: 21.5rem;
			// 		max-height: 38.9%;
			// 	}

			// 	&:nth-child(4) {
			// 		top: 23.6%;
			// 		// left: 48.5%;
			// 		left: 44.9%;
			// 		// top: 19.6rem;
			// 		// left: 24.5rem;
			// 		z-index: 1;
			// 	}
			// }

			// img {
			// 	position: relative;
			// 	// position: absolute;
			// 	width: auto;
			// 	height: 43.2%;

			// 	&:first-child {
			// 		// top: 18rem;
			// 		// left: -10rem;
			// 		top: 17.3%;
			// 		left: 0.8%;
			// 		height: 38.9%;
			// 	}

			// 	&:nth-child(2) {
			// 		// top: 9.5rem;
			// 		// left: -7rem;
			// 		top: 11.5%;
			// 		left: -20.9%;
			// 		z-index: 1;
			// 	}

			// 	&:nth-child(3) {
			// 		// top: 28rem;
			// 		// left: 21.5rem;
			// 		top: 29.3%;
			// 		left: -22.3%;
			// 		height: 38.9%;
			// 	}

			// 	&:nth-child(4) {
			// 		// top: 19.6rem;
			// 		// left: 24.5rem;
			// 		top: -20.1%;
			// 		left: 7.6%;
			// 		z-index: 1;
			// 	}
			// }

			// img {
			// 	position: absolute;
			// 	width: auto;
			// 	height: 43.2%;

			// 	&:first-child {
			// 		top: 18rem;
			// 		left: -10rem;
			// 		top: 21.6%;
			// 		left: 12.8%;
			// 		height: 38.9%;
			// 	}

			// 	&:nth-child(2) {
			// 		top: 9.5rem;
			// 		left: -7rem;
			// 		top: 11.5%;
			// 		left: 15.5%;
			// 		z-index: 1;
			// 	}

			// 	&:nth-child(3) {
			// 		top: 28rem;
			// 		left: 21.5rem;
			// 		top: 33.6%;
			// 		left: 41.3%;
			// 		height: 38.9%;
			// 	}

			// 	&:nth-child(4) {
			// 		top: 19.6rem;
			// 		left: 24.5rem;
			// 		top: 23.6%;
			// 		left: 44%;
			// 		z-index: 1;
			// 	}
			// }
		}

		&__right--description {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			// width: auto;

			& .text {
				margin-bottom: 3.6rem;
				text-align: left;

				&__top {
					margin-bottom: 1.8rem;
					font-family: "Poppins";
					font-size: 1.8rem;
					font-weight: 500;
					color: $monezo-white;
				}

				&__large {
					font-family: "Syne";
					font-size: 3.2rem;
					font-weight: 700;
					color: $monezo-blue;
				}

				&__small {
					font-family: "Poppins";
					font-size: 1.8rem;
					font-weight: 400;
					color: $monezo-black;
				}
			}
		}
	}
</style>
