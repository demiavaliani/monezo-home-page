<template>
	<div class="box">
		<img
			:src="require('@/assets/images/yieldfulNft/yieldful-' + src + '.svg')"
		/>

		{{ text }}
	</div>
</template>

<script>
	export default {
		name: "YieldfulBox",

		components: {},

		props: {
			src: {
				type: String,
				required: true,
			},

			text: {
				type: String,
				required: true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.box {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 19rem;
		height: 20.5rem;
		padding: 1.5rem;
		border: 1px solid $monezo-black;
		border-radius: 18px;
		background-color: $monezo-periwinkle;
		color: $monezo-black;
		font-family: "Poppins";
		font-size: 1.6rem;
		font-weight: 400;

		@media only screen and (max-width: 1512px) {
			width: 13rem;
			height: 14.5rem;
			font-size: 1.6rem;
		}

		@media only screen and (max-width: 1024px) {
			width: 11rem;
			height: 12.5rem;
			font-size: 1.5rem;
		}

		@media only screen and (max-width: 416px) {
			width: 10rem;
			height: 11.5rem;
			font-size: 1.3rem;
		}

		@media only screen and (max-width: 390px) {
			width: 9rem;
			height: 10.5rem;
			font-size: 1.2rem;
		}

		@media only screen and (max-width: 320px) {
			width: 7rem;
			height: 8.5rem;
			font-size: 0.9rem;
		}

		&:hover {
			background-color: var(--bg-color-hover);
		}

		img {
			width: 50%;
			margin-bottom: 1.4rem;

			@media only screen and (max-width: 320px) {
				width: 70%;
				margin-bottom: 0.7rem;
			}
		}
	}
</style>
