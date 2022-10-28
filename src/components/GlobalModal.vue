<template>
	<div :class="['global-modal', classAddons]">
		<p class="global-modal__text">{{ text }}</p>
	</div>
</template>

<script>
	export default {
		name: "GlobalModal",

		props: {
			text: {
				type: String,
				required: true,
			},

			/* Pass not the desired color of the button itslef,
				but the color of the background where the button will be used,
				and the color of the button will be automatically matched.
				*/
			bgColor: {
				type: String,
				required: true,
				validator: function (color) {
					return ["blue", "green", "orange", "red"].includes(color);
				},
			},
		},

		computed: {
			classAddons() {
				return `global-modal--bg-${this.bgColor}`;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.global-modal {
		position: absolute;
		margin: 5rem;
		box-sizing: border-box;
		padding: 1.8rem;
		max-width: 50rem;
		border: 1px solid $monezo-black;
		border-radius: 1.8rem;

		&__text {
			color: black;
			font-family: "Poppins";
			font-size: 1.8rem;
			font-weight: 400;
		}

		&--bg-blue {
			background-color: $monezo-perano;
		}

		&--bg-green {
			background-color: $monezo-gossip;
		}

		&--bg-orange {
			background-color: $monezo-apricot-peach;
		}

		&--bg-red {
			background-color: $monezo-lavender-pink;
		}
	}
</style>
