<template>
	<div class="yieldful-nft">
		<div class="text">
			<p class="text--top">THE NEW CREATIVE ECONOMY</p>
			<p class="text--large">How Yieldful NFT works</p>
			<p class="text--small">
				Project by project, Monezo changing the way new ideas come to life
			</p>
		</div>

		<div ref="boxes-wrapper" class="boxes-wrapper">
			<div
				v-for="(boxData, index) in boxDataScheme"
				:key="boxData.id"
				:ref="boxData.name"
				v-popover:yieldful-tooltip.top
			>
				<YieldfulBox
					:style="boxDataScheme[index]"
					:src="boxData.name"
					:text="boxData.text"
					@mouseenter.native="
						tooltipBgColor = boxData.tooltipBgColor;
						tooltipText = boxData.tooltipText;
					"
				>
				</YieldfulBox>
			</div>
		</div>

		<ButtonPrimary text="Start Now" width="10.4rem" bg-color="blue" />

		<popover
			name="yieldful-tooltip"
			:event="'hover'"
			:pointer="false"
			:style="{ backgroundColor: tooltipBgColor }"
			>{{ tooltipText }}</popover
		>
	</div>
</template>

<script>
	import lineConnector from "@/mixins/lineConnector";
	import ButtonPrimary from "@/components/ButtonPrimary.vue";
	import YieldfulBox from "@/components/YieldfulBox.vue";

	export default {
		name: "YieldfulNft",

		mixins: [lineConnector],

		components: {
			ButtonPrimary,
			YieldfulBox,
		},

		data() {
			return {
				boxDataScheme: [
					{
						id: 0,
						name: "business",
						text: "Business",
						tooltipText: `
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
						tooltipText: `
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
						tooltipText: `
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
						tooltipText: `
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
						tooltipText: `
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
						tooltipText: `
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
						tooltipText: `
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
						tooltipText: `
										Monezo NFT collections will be presented on the branded marketplace.
										All the Yieldful Monezo NFT collections will be also listed on the leading NFT marketplaces,
										such as MagicEden, OpenSea, Rarible, Binance & CoinBase
									`,
						"--bg-color-hover": "#496DF2",
						tooltipBgColor: "#AFBFF5",
					},
				],

				tooltipBgColor: "",

				tooltipText: "",

				connectorData: [
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Right", "Left"],
						},
						source: "business",
						target: "incubator",
						label: "Business Research",
						strokeColor: "black",
						paddingBottom: 8,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Right", "Left"],
						},
						source: "incubator",
						target: "score",
						label: "Audit",
						strokeColor: "black",
						paddingBottom: 6,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Right", "Left"],
						},
						source: "score",
						target: "nft",
						label: "NFT Collection & Sale Model Development",
						strokeColor: "black",
						paddingBottom: 13,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Bottom", "Top"],
						},
						source: "nft",
						target: "marketplace",
						label: "Launchpad",
						strokeColor: "black",
						paddingLeft: 13,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Left", "Right"],
						},
						source: "marketplace",
						target: "investors",
						label: "Sale",
						strokeColor: "black",
						paddingBottom: 6,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[0, 0.35, 0, 0, 0, 0],
								[1, 0.35, 0, 0, 0, 0],
							],
						},
						source: "investors",
						target: "wallet",
						label: "Staking",
						strokeColor: "black",
						paddingBottom: 6,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[1, 0.65, 0, 0, 0, 0],
								[0, 0.65, 0, 0, 0, 0],
							],
						},
						source: "wallet",
						target: "investors",
						label: "Profit Distribution",
						strokeColor: "#5CE517",
						paddingTop: 9,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[0, 0.35, 0, 0, 0, 0],
								[1, 0.35, 0, 0, 0, 0],
							],
						},
						source: "wallet",
						target: "escrow",
						label: "Money Transfer",
						strokeColor: "black",
						paddingBottom: 8,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[1, 0.65, 0, 0, 0, 0],
								[0, 0.65, 0, 0, 0, 0],
							],
						},
						source: "escrow",
						target: "wallet",
						label: "Profit Distribution",
						strokeColor: "#5CE517",
						paddingTop: 9,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[0.68, 0, 0, 0, 0, 0],
								[0.68, 1, 0, 0, 0, 0],
							],
						},
						source: "escrow",
						target: "business",
						label: "Liquidity Supply",
						strokeColor: "black",
						paddingLeft: 11,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[0.33, 1, 0, 0, 0, 0],
								[0.33, 0, 0, 0, 0, 0],
							],
						},
						source: "business",
						target: "escrow",
						label: "Profit",
						strokeColor: "#5CE517",
						paddingRight: 8,
					},
				],
			};
		},

		mounted() {
			this.init(this.$refs["boxes-wrapper"]);

			for (const item of this.connectorData) {
				this.instanceConnect(
					item.endpoint,
					this.$refs[item.source][0],
					this.$refs[item.target][0],
					item.label,
					item.strokeColor,
					item.paddingTop,
					item.paddingRight,
					item.paddingBottom,
					item.paddingLeft
				);
			}
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
				color: $monezo-black;
				font-family: "Poppins";
				font-size: 1.8rem;
				font-weight: 400;
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
		[data-popover="yieldful-tooltip"] {
			width: fit-content !important;
			max-width: 50rem !important;
			margin-top: -2rem !important;
			padding: 1.2rem;
			border: 1px solid $monezo-black;
			border-radius: 18px;
			color: black;
			font-family: "Poppins";
			font-size: 1.6rem;
			font-weight: 400;
		}
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
