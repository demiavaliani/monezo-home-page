<template>
	<div class="partners-section">
		<div class="partners-section__left--description">
			<p class="text text__large">
				One Platform,<br />
				Two Worlds
			</p>

			<p class="text text__small">
				Revolutionary platform that connects traditional real world assets &
				businesses revenue with NFT holders
			</p>

			<button style="width: 215px; height: 37px"></button>
		</div>

		<div class="partners-section__right--image">
			<img src="@/assets/images/header-section-monker_1.png" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.partners-section {
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: 75%;
		background: linear-gradient(95.78deg, #496df2 0%, #889ff0 100%);

		&__left--description {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			width: 53rem;

			& .text {
				margin-bottom: 3.6rem;
				text-align: left;

				&__large {
					font-family: "Syne";
					font-size: 6.4rem;
					font-weight: 700;
					color: $monezo-green;
				}

				&__small {
					font-family: "Poppins";
					font-size: 1.8rem;
					font-weight: 400;
					color: $monezo-black;
				}
			}
		}

		&__right--image {
			display: flex;
			align-items: flex-end;
			// height: 100%;

			img {
				width: auto;
				height: 90%;
			}
		}
	}
</style>
