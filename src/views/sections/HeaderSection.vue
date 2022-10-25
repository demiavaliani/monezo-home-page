<template>
	<div class="header-section">
		<div class="header-section__left-description">
			<p class="text text--large">
				One Platform,<br />
				Two Worlds
			</p>

			<p class="text text--small">
				Revolutionary platform that connects traditional real world assets &
				businesses revenue with NFT holders
			</p>

			<ButtonPrimary
				text="Jump Start Your Earnings"
				width="21.5rem"
				bg-color="blue"
			/>
		</div>

		<div class="header-section__right-image">
			<img src="@/assets/images/header-section-monker-1.png" />
		</div>
	</div>
</template>

<script>
	import ButtonPrimary from "@/components/ButtonPrimary.vue";

	export default {
		name: "HeaderSection",

		components: { ButtonPrimary },
	};
</script>

<style lang="scss" scoped>
	.header-section {
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: 75%;
		min-height: 75vh;
		background: linear-gradient(95.78deg, #496df2 0%, #889ff0 100%);

		&__left-description {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			width: 36%;

			& .text {
				margin-bottom: 3.6rem;
				text-align: left;

				&--large {
					font-family: "Syne";
					font-size: 6.4rem;
					font-weight: 700;
					color: $monezo-lima-green;
				}

				&--small {
					font-family: "Poppins";
					font-size: 1.8rem;
					font-weight: 400;
					color: $monezo-black;
				}
			}
		}

		&__right-image {
			display: flex;
			justify-content: center;
			align-items: flex-end;
			width: 37%;

			img {
				width: 100%;
				height: auto;
				max-height: 90%;
				object-fit: contain;
			}
		}
	}
</style>
