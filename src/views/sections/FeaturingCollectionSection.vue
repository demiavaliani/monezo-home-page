<template>
	<div class="featuring-collection-section">
		<div class="featuring-collection-section__left--description">
			<p class="text text__top">Featuring collection</p>

			<p class="text text__large">Real Estate Monker</p>

			<p class="text text__small">
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
					<p class="text text__large">$100</p>
					<p class="text text__small">Invest from</p>
				</div>

				<div class="numbers-description__right">
					<p class="text text__large">12% APY</p>
					<p class="text text__small">Paid daily</p>
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
		name: "MonezoNftSection",

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

		&__left--description {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			width: 49vw;
			margin-right: 10rem;

			.text {
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
					color: $monezo-purple-heart;
				}

				&__small {
					font-family: "Poppins";
					font-size: 1.8rem;
					font-weight: 400;
					color: $monezo-black;
				}
			}

			.numbers-description {
				display: flex;
				gap: 7rem;
				.text__large {
					margin-bottom: 0;
				}
			}
		}

		&__right--image {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 28%;

			img {
				width: 100%;
				height: auto;
				max-height: 90%;
				object-fit: contain;
			}
		}
	}
</style>
