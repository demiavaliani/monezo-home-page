<template>
	<div class="yieldful-nft">
		<div class="text">
			<p class="text--top">Few clicks and you’re done</p>
			<p class="text--large">How Yieldful NFT works</p>
			<p class="text--small">Start earn in 3 simple steps</p>
		</div>

		<div ref="boxes-wrapper" class="boxes-wrapper">
			<div
				v-for="(boxData, index) in boxDataScheme"
				:key="boxData.id"
				:ref="boxData.name"
				v-popover:tooltip.top="boxData.modalText"
			>
				<YieldfulBox
					:style="boxDataScheme[index]"
					:src="boxData.name"
					:text="boxData.text"
					@mouseenter.native="tooltipBgColor = boxData.tooltipBgColor"
				>
				</YieldfulBox>
			</div>
		</div>

		<ButtonPrimary text="Start Now" width="10.4rem" bg-color="blue" />

		<tooltip
			:event="'hover'"
			:style="{ backgroundColor: tooltipBgColor }"
		></tooltip>
	</div>
</template>

<script>
	import * as jsPlumbBrowserUI from "@jsplumb/browser-ui";
	import ButtonPrimary from "@/components/ButtonPrimary.vue";
	import YieldfulBox from "@/components/YieldfulBox.vue";

	export default {
		name: "YieldfulNft",

		components: {
			ButtonPrimary,
			YieldfulBox,
		},

		data() {
			return {
				isModalOpen: false,

				boxDataScheme: [
					{
						id: 0,
						name: "business",
						text: "Business",
						modalText: `
										Any capital-intensive business can apply to Monezo Incubator.
										Small start-ups get the required funds and support to build MVP and test business hypotheses.
										Large enterprises get benefit from leveraging your finance and multiplying earnings
									`,
						"--bg-color-hover": "#496DF2",
						tooltipBgColor: "#AFBFF5",
					},
					{
						id: 1,
						name: "incubator",
						text: "Monezo Incubator",
						modalText: `
										Monezo Incubator is an infrastructure system focused on corporate clients,
										designed to accelerate the growth and success of your perspective businesses,
										start-ups and large enterprises
									`,
						"--bg-color-hover": "#F24981",
						tooltipBgColor: "#FCB6CE",
					},
					{
						id: 2,
						name: "score",
						text: "Monezo Score",
						modalText: `
										Each business applied to Monezo incubator will go through case to-case evaluation by Monezo
										to ensure full reliability and protection for potential NFT investors and partners
									`,
						"--bg-color-hover": "#F29849",
						tooltipBgColor: "#F9D2AE",
					},
					{
						id: 3,
						name: "nft",
						text: "Yieldful NFT",
						modalText: `
										Yieldful NFT shares yield gained from businesses & management of real-world assets
										to Monezo NFT investors.
										Each NFT collection will differ and has unique specialties depending on business types
									`,
						"--bg-color-hover": "#5CE517",
						tooltipBgColor: "#C6F5AF",
					},
					{
						id: 4,
						name: "escrow",
						text: "Monezo Escrow",
						modalText: `
										Monezo Escrow is a security system dedicated to ensuring liquidity funds safety.
										It acts as a bridge between businesses & NFT holders.
										Its primary purpose is to transfer liquidity to businesses and store revenue
										from business activities to distribute rewards to NFT holders.
									`,
						"--bg-color-hover": "#5CE517",
						tooltipBgColor: "#C6F5AF",
					},
					{
						id: 5,
						name: "wallet",
						text: "Monezo Wallet",
						modalText: `
										The Monezo Wallet is a revolutionary keyless non-custodial crypto wallet for storing,
										growing and earning rewards on your real-world assets and NFTs.
										The Monezo wallet will be integrated into an All-In-One App
									`,
						"--bg-color-hover": "#F29849",
						tooltipBgColor: "#F9D2AE",
					},
					{
						id: 6,
						name: "investors",
						text: "NFT Investors",
						modalText: `
										Any investor can get access to Yieldful NFT collections directly on branded Monezo Marketplace
										or through verified 3-rd party NFT marketplaces
									`,
						"--bg-color-hover": "#F24981",
						tooltipBgColor: "#FCB6CE",
					},
					{
						id: 7,
						name: "marketplace",
						text: "Monezo Marketplace",
						modalText: `
										Monezo NFT collections will be presented on the branded marketplace.
										All the Yieldful Monezo NFT collections will be also listed on the leading NFT marketplaces,
										such as MagicEden, OpenSea, Rarible, Binance & CoinBase
									`,
						"--bg-color-hover": "#496DF2",
						tooltipBgColor: "#AFBFF5",
					},
				],

				tooltipBgColor: "",

				rightToLeftCentered: {
					endpoint: "Blank",
					anchors: ["Right", "Left"],
				},

				leftToRightCentered: {
					endpoint: "Blank",
					anchors: ["Left", "Right"],
				},

				bottomToTopCentered: {
					endpoint: "Blank",
					anchors: ["Bottom", "Top"],
				},

				rightToLeftTop: {
					endpoint: "Blank",
					anchors: [
						[0, 0.35, 0, 0, 0, 0],
						[1, 0.35, 0, 0, 0, 0],
					],
				},

				leftToRightBottom: {
					endpoint: "Blank",
					anchors: [
						[1, 0.65, 0, 0, 0, 0],
						[0, 0.65, 0, 0, 0, 0],
					],
				},

				topToBottomLeft: {
					endpoint: "Blank",
					anchors: [
						[0.33, 0, 0, 0, 0, 0],
						[0.33, 1, 0, 0, 0, 0],
					],
				},

				bottomToTopRight: {
					endpoint: "Blank",
					anchors: [
						[0.68, 1, 0, 0, 0, 0],
						[0.68, 0, 0, 0, 0, 0],
					],
				},
			};
		},

		methods: {
			connector(
				source,
				target,
				label,
				strokeColor,
				paddingTop,
				paddingRight,
				paddingBottom,
				paddingLeft
			) {
				return {
					source: source,
					target: target,
					connector: "Straight",
					paintStyle: { stroke: strokeColor, strokeWidth: 2 },
					detachable: false,
					overlays: [
						{
							type: "PlainArrow",
							options: {
								location: 0.5,
								width: 22,
								length: 22,
								foldback: 1,
							},
						},
						{
							type: "Label",
							options: {
								label: label,
								location: [0.5],
								cssClass: `jtk-overlay__label padding-top-${paddingTop} padding-right-${paddingRight} padding-bottom-${paddingBottom} padding-left-${paddingLeft}`,
							},
						},
					],
				};
			},
		},

		mounted() {
			const instance = jsPlumbBrowserUI.newInstance({
				container: this.$refs["boxes-wrapper"],
				elementsDraggable: false,
			});
			instance.connect(
				this.rightToLeftCentered,
				this.connector(
					this.$refs["business"][0],
					this.$refs["incubator"][0],
					"Business Research",
					"black",
					0,
					0,
					8,
					0
				)
			);
			instance.connect(
				this.rightToLeftCentered,
				this.connector(
					this.$refs["incubator"][0],
					this.$refs["score"][0],
					"Audit",
					"black",
					0,
					0,
					6,
					0
				)
			);
			instance.connect(
				this.rightToLeftCentered,
				this.connector(
					this.$refs["score"][0],
					this.$refs["nft"][0],
					"NFT Collection & Sale Model Development",
					"black",
					0,
					0,
					13,
					0
				)
			);
			instance.connect(
				this.bottomToTopCentered,
				this.connector(
					this.$refs["nft"][0],
					this.$refs["marketplace"][0],
					"Launchpad",
					"black",
					0,
					0,
					0,
					13
				)
			);
			instance.connect(
				this.leftToRightCentered,
				this.connector(
					this.$refs["marketplace"][0],
					this.$refs["investors"][0],
					"Sale",
					"black",
					0,
					0,
					6,
					0
				)
			);
			instance.connect(
				this.rightToLeftTop,
				this.connector(
					this.$refs["investors"][0],
					this.$refs["wallet"][0],
					"Staking",
					"black",
					0,
					0,
					6,
					0
				)
			);
			instance.connect(
				this.leftToRightBottom,
				this.connector(
					this.$refs["wallet"][0],
					this.$refs["investors"][0],
					"Profit Distribution",
					"#5CE517",
					9,
					0,
					0,
					0
				)
			);
			instance.connect(
				this.rightToLeftTop,
				this.connector(
					this.$refs["wallet"][0],
					this.$refs["escrow"][0],
					"Money Transfer",
					"black",
					0,
					0,
					8,
					0
				)
			);
			instance.connect(
				this.leftToRightBottom,
				this.connector(
					this.$refs["escrow"][0],
					this.$refs["wallet"][0],
					"Profit Distribution",
					"#5CE517",
					9,
					0,
					0,
					0
				)
			);
			instance.connect(
				this.topToBottomLeft,
				this.connector(
					this.$refs["escrow"][0],
					this.$refs["business"][0],
					"Profit",
					"black",
					0,
					8,
					0,
					0
				)
			);
			instance.connect(
				this.bottomToTopRight,
				this.connector(
					this.$refs["business"][0],
					this.$refs["escrow"][0],
					"Liquidity Supply",
					"black",
					0,
					0,
					0,
					11
				)
			);
		},
	};
</script>

<style lang="scss" scoped>
	.yieldful-nft {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 100%;
		min-height: 100vh;
		background: linear-gradient(
			119.73deg,
			#371f67 0%,
			#805cc8 48.95%,
			#9e6dff 99.99%
		);

		.text {
			&--top {
				margin-top: 3rem;
				margin-bottom: 1.8rem;
				color: $monezo-white;
				font-family: "Poppins";
				font-size: 1.8rem;
				font-weight: 500;
			}

			&--large {
				margin-bottom: 3rem;
				color: $monezo-lima-green;
				font-family: "Syne";
				font-size: 3.2rem;
				font-weight: 700;
			}

			&--small {
				color: $monezo-black;
				font-family: "Poppins";
				font-size: 1.8rem;
				font-weight: 400;
			}
		}

		.boxes-wrapper {
			position: relative;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 12rem 15rem;

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
				font-size: 1.8rem;
				font-weight: 400;

				&:hover {
					background-color: var(--bg-color-hover);
				}

				img {
					width: 50%;
					margin-bottom: 1.4rem;
				}

				@media only screen and (max-width: 1512px) {
					width: 13rem;
					height: 14.5rem;
					font-size: 1.6rem;
				}
			}
		}
	}
	[data-popover="tooltip"] {
		width: fit-content !important;
		max-width: 50rem !important;
		margin-top: -2rem !important;
		border: 1px solid $monezo-black;
		border-radius: 18px;
		color: black;
		font-family: "Poppins";
		font-size: 1.6rem;
		font-weight: 400;
	}
</style>

<style lang="scss">
	.jtk-overlay {
		&__label {
			max-width: 10ch;
			font-family: "Poppins";
			font-size: 1.8rem;
			font-weight: 400;
			color: $monezo-black;

			@media only screen and (max-width: 1512px) {
				font-size: 1.6rem;
			}
		}

		&.padding-top-9 {
			padding-top: 9rem;
		}

		&.padding-right-8 {
			padding-right: 8rem;
		}

		&.padding-bottom-6 {
			padding-bottom: 6rem;
		}

		&.padding-bottom-8 {
			padding-bottom: 8rem;
		}

		&.padding-bottom-13 {
			padding-bottom: 13rem;
		}

		&.padding-left-11 {
			padding-left: 11rem;
		}

		&.padding-left-13 {
			padding-left: 13rem;
		}
	}
</style>
