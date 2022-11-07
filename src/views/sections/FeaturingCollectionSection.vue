<template>
	<div class="featuring-collection-section">
		<div class="featuring-collection-section__left--description">
			<p class="text text--top">FEATURING COLLECTION</p>

			<p class="text text--large">Real Estate Monker</p>

			<p class="text text--small">
				This collection suits best conservative investors, which prefer stable
				and predictable Yield. Stake NFT and get as much as 12% APY Yield return
				paid daily.
				<br />
				<br />
				Real Estate Monker collection is fully backed by income from real estate
				business.
			</p>

			<div class="numbers-description">
				<div class="numbers-description__left">
					<p class="text text--large">$100</p>
					<p class="text text--small">Invest from</p>
				</div>

				<div class="numbers-description__right">
					<p class="text text--large">12% APY</p>
					<p class="text text--small">Paid daily</p>
				</div>
			</div>

			<ButtonPrimary text="View Collection" width="14.5rem" bg-color="red" />
		</div>

		<div class="featuring-collection-section__right--image">
			<img src="@/assets/images/featuring-collection-section-monker.png" />
		</div>
	</div>
</template>

<script>
	import ButtonPrimary from "@/components/ButtonPrimary.vue";

	export default {
		name: "FeaturingCollectionSection",

		components: { ButtonPrimary },
	};
</script>

<style lang="scss" scoped>
	.featuring-collection-section {
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		min-height: 100vh;
		padding: 5rem 0;
		background: linear-gradient(
			99.04deg,
			#ffb753 0%,
			#ffadaf 73.44%,
			#d98d9c 100%
		);

		@media only screen and (max-width: 584px) {
			flex-direction: column;
			align-items: center;
			row-gap: 5rem;
		}

		&__left--description {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			width: 49vw;

			@media only screen and (max-width: 584px) {
				align-items: center;
				width: 70vw;
			}

			@media only screen and (max-width: 416px) {
				width: 75vw;
			}

			@media only screen and (max-width: 390px) {
				align-items: center;
				width: 80vw;
			}

			.text {
				margin-bottom: 3.6rem;
				text-align: left;

				@media only screen and (max-width: 584px) {
					text-align: center;
				}

				&--top {
					margin-bottom: 1.8rem;
					color: $monezo-black;
					font-family: "Poppins";
					font-size: 1.8rem;
					font-weight: 400;
				}

				&--large {
					font-family: "Syne";
					font-size: 3.2rem;
					font-weight: 700;
					color: $monezo-purple-heart;
				}

				&--small {
					font-family: "Poppins";
					font-size: 1.8rem;
					font-weight: 400;
					color: $monezo-black;
				}
			}

			.numbers-description {
				display: flex;
				gap: 7rem;
				.text--large {
					margin-bottom: 0;
				}
			}
		}

		&__right--image {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 28%;
			margin-left: 10rem;

			@media only screen and (max-width: 834px) {
				width: 35%;
				margin-left: 5rem;
			}

			@media only screen and (max-width: 768px) {
				margin-left: 3rem;
			}

			@media only screen and (max-width: 584px) {
				width: 60%;
				margin-left: 0;
			}

			@media only screen and (max-width: 416px) {
				width: 70%;
			}

			img {
				width: 100%;
				height: auto;
				max-height: 90%;
				object-fit: contain;
			}
		}
	}
</style>
