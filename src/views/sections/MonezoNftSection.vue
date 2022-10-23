<template>
	<div class="monezo-nft-section">
		<div class="monezo-nft-section__left-image">
			<img src="@/assets/images/monezo-nft-section monkers-group.png" />
			<!-- <img src="@/assets/images/monezo-nft-section-monker-100.png" /> -->
			<!-- <img src="@/assets/images/monezo-nft-section-monker-1k.png" /> -->
			<!-- <img src="@/assets/images/monezo-nft-section-monker-5k.png" /> -->
			<!-- <img src="@/assets/images/monezo-nft-section-monker-10k.png" /> -->
		</div>

		<div class="monezo-nft-section__right-description">
			<p class="text text--top">More than an investment platform</p>

			<p class="text text--large">
				Start your passive income Journey with Monezo NFT
			</p>

			<p class="text text--small">
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
		height: 100%;
		min-height: 100vh;
		background: linear-gradient(261.77deg, #f24981 0%, #fb92b5 100%);

		&__left-image {
			display: flex;
			justify-content: center;
			align-items: center;
			min-width: 60%;
			height: 100%;
			min-height: 100vh;

			img {
				width: 49vw;
			}
		}

		&__right-description {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;

			& .text {
				margin-bottom: 3.6rem;
				text-align: left;

				&--top {
					margin-bottom: 1.8rem;
					font-family: "Poppins";
					font-size: 1.8rem;
					font-weight: 500;
					color: $monezo-white;
				}

				&--large {
					font-family: "Syne";
					font-size: 3.2rem;
					font-weight: 700;
					color: $monezo-persian-blue;
				}

				&--small {
					font-family: "Poppins";
					font-size: 1.8rem;
					font-weight: 400;
					color: $monezo-black;
				}
			}
		}
	}
</style>
