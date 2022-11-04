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
		background: linear-gradient(95.78deg, #002199 0%, #0d40f2 100%);

		@media only screen and (min-height: 1400px) {
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
		}

		@media only screen and (max-width: 584px) {
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
		}

		&__left-description {
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			width: 36%;
			padding: 5rem 0;

			@media only screen and (min-height: 1400px) {
				align-items: center;
			}

			@media only screen and (max-width: 584px) {
				align-items: center;
				width: 70%;
			}

			& .text {
				margin-bottom: 3.6rem;
				text-align: left;

				@media only screen and (min-height: 1400px) {
					text-align: center;
				}

				@media only screen and (max-width: 584px) {
					text-align: center;
				}

				&--large {
					font-family: "Syne";
					font-size: 6.4rem;
					font-weight: 700;
					color: $monezo-lima-green;

					@media only screen and (max-width: 416px) {
						font-size: 4rem;
					}

					@media only screen and (max-width: 320px) {
						font-size: 3rem;
					}
				}

				&--small {
					font-family: "Poppins";
					font-size: 1.8rem;
					font-weight: 400;
					color: $monezo-white;

					@media only screen and (max-width: 320px) {
						font-size: 1.6rem;
					}
				}
			}
		}

		&__right-image {
			display: flex;
			justify-content: center;
			align-items: flex-end;
			width: 37%;

			@media only screen and (min-height: 1400px) {
				width: 60%;
			}

			@media only screen and (max-width: 1024px) {
				width: 50%;
			}

			@media only screen and (max-width: 584px) {
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
