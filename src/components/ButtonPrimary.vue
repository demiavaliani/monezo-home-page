<template>
	<button
		class="btn-global-override button-primary"
		:class="classAddons"
		:style="styleAddons"
	>
		{{ text }}
	</button>
</template>

<script>
	export default {
		name: "ButtonPrimary",
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

			/* Pass not the desired color of the button itslef,
			but the color of the background where the button will be used,
			and the color of the button will be automatically matched.
			*/
			bgColor: {
				type: String,
				required: true,
				validator: function (color) {
					return ["blue", "red", "brown"].includes(color);
				},
			},
		},

		computed: {
			classAddons() {
				return `button-primary--bg-${this.bgColor}`;
			},

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
	.button-primary {
		border-radius: 10px;
		background: $monezo-white;

		&--bg-blue {
			&::before {
				border-radius: 9px;
				background: $monezo-gradient-button-primary-bg-blue-hover;
			}

			&:active::before {
				background: $monezo-gradient-button-primary-bg-blue-pressed;
			}
		}

		&--bg-red {
			&::before {
				border-radius: 9px;
				background: $monezo-gradient-button-primary-bg-red-hover;
			}

			&:active::before {
				background: $monezo-gradient-button-primary-bg-red-pressed;
			}
		}

		&--bg-brown {
			&::before {
				border-radius: 9px;
				background: $monezo-gradient-button-primary-bg-brown-hover;
			}

			&:active::before {
				background: $monezo-gradient-button-primary-bg-brown-pressed;
			}
		}
	}
</style>
