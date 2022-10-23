<template>
	<button class="btn-global-override button-secondary" :style="styleAddons">
		{{ text }}
	</button>
</template>

<script>
	export default {
		name: "ButtonSecondary",
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
	.button-secondary {
		border-radius: 10px;
		background: $monezo-white;

		&::before {
			border-radius: 9px;
			background: $monezo-dusty-grey;
		}

		&:active::before {
			background: $monezo-dove-grey;
		}
	}
</style>
