<template>
	<div class="partner-logos">
		<div class="logos-wrapper">
			<img
				class="partner-logos__png"
				src="@/assets/images/multi-bank-logo.png"
			/>
			<img class="partner-logos__png" src="@/assets/images/megogo-logo.png" />
			<img class="partner-logos__png" src="@/assets/images/castles-logo.png" />
			<img class="partner-logos__png" src="@/assets/images/pion-logo.png" />
		</div>

		<div class="logos-wrapper">
			<img
				class="partner-logos__png"
				src="@/assets/images/multi-bank-logo.png"
			/>
			<img class="partner-logos__png" src="@/assets/images/megogo-logo.png" />
			<img class="partner-logos__png" src="@/assets/images/castles-logo.png" />
			<img class="partner-logos__png" src="@/assets/images/pion-logo.png" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.partner-logos {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 17%;
		min-height: 17vh;

		.logos-wrapper:first-child {
			display: flex;
			width: 100%;
			justify-content: space-around;
		}

		.logos-wrapper:nth-child(2) {
			display: none;
		}

		&__png {
			max-height: 6rem;
		}

		@media only screen and (min-width: 1920px) {
			height: 10%;
			min-height: 10vh;

			&__png {
				max-height: 7rem;
			}
		}

		@media only screen and (max-width: 1512px) {
			height: 13%;
			min-height: 13vh;
		}

		@media only screen and (max-width: 1200px) {
			height: 6%;
			min-height: 6vh;
		}

		@media only screen and (max-width: 1024px) {
			--gap: 100rem;
			position: relative;
			overflow: hidden;
			user-select: none;
			gap: var(--gap);
			height: 7%;
			min-height: 7vh;

			.logos-wrapper {
				flex-shrink: 0;
				display: flex !important;
				justify-content: space-around;
				width: auto !important;
				gap: var(--gap);
				min-width: 100%;
				animation: scroll 15s linear infinite;

				@media only screen and (max-width: 1024px) {
					animation-duration: 20s;
				}

				@media only screen and (max-width: 416px) {
					animation-duration: 25s;
				}
			}

			@keyframes scroll {
				from {
					transform: translateX(0);
				}
				to {
					transform: translateX(calc(-100% - var(--gap)));
				}
			}
		}

		@media only screen and (max-width: 768px) {
			height: 8%;
			min-height: 8vh;
		}

		@media only screen and (max-width: 584px) {
			height: 7%;
			min-height: 7vh;

			&__png {
				max-height: 4rem;
			}
		}

		@media only screen and (max-width: 320px) {
			height: 8%;
			min-height: 8vh;

			&__png {
				max-height: 3rem;
			}
		}
	}
</style>
