<template>
	<button class="btn-global-override button-navigation" :style="styleAddons">
		{{ text }}
	</button>
</template>

<script>
	export default {
		name: "ButtonNavigation",
		props: {
			text: {
				type: String,
				required: true,
			},

			width: {
				type: String,
				required: false,
				default: "8.3rem",
			},

			height: {
				type: String,
				required: false,
				default: "3.7rem",
			},
		},

		computed: {
			styleAddons() {
				return {
					width: this.width,
					height: this.height,
				};
			},
		},
	};
</script>

<style lang="scss" scoped>
	.button-navigation {
		border-radius: 53px;
		background: $monezo-gradient-button-navigation-static;

		&::before {
			border-radius: 53px;
			background: $monezo-gradient-button-navigation-hover;
		}

		&:active::before {
			background: $monezo-gradient-button-navigation-pressed;
		}
	}
</style>
