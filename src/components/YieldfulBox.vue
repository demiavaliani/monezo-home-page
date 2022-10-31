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
		width: 13rem;
		height: 14.5rem;
		padding: 1.5rem;
		border: 1px solid $monezo-black;
		border-radius: 18px;
		background-color: $monezo-periwinkle;
		color: $monezo-black;
		font-family: "Poppins";
		font-size: 1.6rem;
		font-weight: 400;

		&:hover {
			background-color: var(--bg-color-hover);
		}

		img {
			width: 50%;
			margin-bottom: 1.4rem;
		}
	}
</style>
