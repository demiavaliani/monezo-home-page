<template>
	<div class="monezo-nft-section">
		<div
			v-if="isMobileDevice"
			:class="[
				'monezo-nft-section__left-image',
				{ isMobileDevice: isMobileDevice },
			]"
			@mouseenter="pauseAnimation"
			@mouseleave="pauseAnimation"
		>
			<img
				class="image-bottom"
				src="@/assets/images/monezo-nft-section-monkers-right.png"
			/>
			<img
				class="image-top"
				src="@/assets/images/monezo-nft-section-monkers-left.png"
			/>
		</div>
		<div v-else class="monezo-nft-section__left-image">
			<img src="@/assets/images/monezo-nft-section-monkers-group.png" />
		</div>

		<div class="monezo-nft-section__right-description">
			<p class="text text--top">MORE THAN AN INVESTMENT PLATFORM</p>

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

			<ButtonPrimary text="Get NFT" width="10rem" bg-color="brown" />
		</div>
	</div>
</template>

<script>
	import ButtonPrimary from "@/components/ButtonPrimary.vue";

	export default {
		name: "MonezoNftSection",

		components: { ButtonPrimary },

		computed: {
			isMobileDevice() {
				return window.matchMedia("(max-width: 416px)").matches;
			},
		},

		methods: {
			pauseAnimation() {
				const element = document.querySelector(".image-top");
				element.classList.toggle("paused");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.monezo-nft-section {
		box-sizing: border-box;
		display: flex;
		justify-content: space-evenly;
		width: 100%;
		height: 100%;
		min-height: 100vh;
		padding: 5rem 0;
		background: linear-gradient(
			102.98deg,
			#1f6728 0%,
			#53c326 48.14%,
			#7eff2a 100%
		);

		@media only screen and (max-width: 834px) {
			flex-direction: column-reverse;
			align-items: center;
		}

		@media only screen and (max-width: 768px) {
			row-gap: 5rem;
		}

		&__left-image {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 49%;

			&.isMobileDevice {
				img {
					position: absolute;
				}
			}

			@media only screen and (max-width: 834px) {
				width: 70%;
			}

			@media only screen and (max-width: 584px) {
				width: 80%;
			}

			@media only screen and (max-width: 416px) {
				height: 50vh;
			}

			@media only screen and (max-width: 320px) {
				height: 60vh;
			}

			img {
				width: 100%;
				height: auto;
				max-height: 90%;
				object-fit: contain;

				&.image-top {
					animation: fade-in 10s ease-in-out infinite;

					&.paused {
						animation-play-state: paused;
					}
				}
			}

			@keyframes fade-in {
				0% {
					opacity: 0;
				}
				10% {
					opacity: 1;
				}
				50% {
					opacity: 1;
				}
				60% {
					opacity: 0;
				}

				100% {
					opacity: 0;
				}
			}
		}

		&__right-description {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			width: 35vw;

			@media only screen and (max-width: 834px) {
				align-items: center;
				width: 50vw;
			}

			@media only screen and (max-width: 584px) {
				width: 75vw;
			}

			& .text {
				margin-bottom: 3.6rem;
				text-align: left;

				@media only screen and (max-width: 834px) {
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
