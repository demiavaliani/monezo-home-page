<template>
	<div class="ecosystem">
		<div class="text">
			<p class="text--top">CONNECTING WORLDS</p>
			<p class="text--large">Monezo Ecosystem</p>
			<p class="text--small">
				Monezo is not only about high yields it is about complete ecosystem
				<br />
				which will take care all about your finances
			</p>
		</div>

		<div class="chart" ref="chart">
			<div
				v-for="(box, index) in boxesData"
				:key="box.id"
				:ref="box.name"
				:style="boxesData[index]"
				:class="['chart__item', `chart__item-${box.class}`]"
				v-popover:eco-tooltip.top
				@mouseenter="
					tooltipText = box.tooltipText;
					tooltipBgColor = box.tooltipBgColor;
				"
			>
				{{ box.text }}
			</div>
			<div class="logo" ref="logo">
				<img src="@/assets/images/monezo-logo.png" />
			</div>
		</div>

		<popover
			name="eco-tooltip"
			:event="'hover'"
			:pointer="false"
			:style="{ backgroundColor: tooltipBgColor }"
			>{{ tooltipText }}</popover
		>
	</div>
</template>

<script>
	import lineConnector from "@/mixins/lineConnector";

	export default {
		name: "EcosystemSection",

		mixins: [lineConnector],

		data() {
			return {
				tooltipBgColor: "",

				tooltipText: "",

				boxesData: [
					{
						id: 0,
						class: "credit",
						name: "credit",
						text: "Monezo Credit",
						tooltipText:
							"Get access to loans and enjoy benefits for staking Monezo NFT",
						"--bg-color-hover": "#496DF2",
						tooltipBgColor: "#AFBFF5",
					},
					{
						id: 1,
						class: "nft",
						name: "nft",
						text: "Yieldful NFT",
						tooltipText: "NFT that generates you income",
						"--bg-color-hover": "#5CE517",
						tooltipBgColor: "#C6F5AF",
					},
					{
						id: 2,
						class: "metaverse",
						name: "metaverse",
						text: "Metaverse Support",
						tooltipText:
							"Get access to VIP events, proof your NFT ownership interact with other NFT holders in leading metaverse supported by Monezo",
						"--bg-color-hover": "#F29849",
						tooltipBgColor: "#F9D2AE",
					},
					{
						id: 3,
						class: "care",
						name: "care",
						text: "Monezo Care",
						tooltipText:
							"User-oriented care system provide excellent experience for users",
						"--bg-color-hover": "#F24981",
						tooltipBgColor: "#FCB6CE",
					},
					{
						id: 4,
						class: "perks",
						name: "perks",
						text: "Perks for NFT Holders",
						tooltipText:
							"Get different types of bonuses, promotions and participate in special campaigns",
						"--bg-color-hover": "#F29849",
						tooltipBgColor: "#F9D2AE",
					},
					{
						id: 5,
						class: "tools",
						name: "tools",
						text: "Dashboards & Tracking Tools",
						tooltipText:
							"Access to data to monitor yield and ability to check prediction of future income according to selected NFT",
						"--bg-color-hover": "#496DF2",
						tooltipBgColor: "#AFBFF5",
					},
					{
						id: 6,
						class: "wallet",
						name: "wallet",
						text: "Monezo Wallet",
						tooltipText:
							"Revolutionary keyless non-custodial crypto wallet for storing, growing and earning rewards based on your real-world assets NFTs",
						"--bg-color-hover": "#5CE517",
						tooltipBgColor: "#C6F5AF",
					},
					{
						id: 7,
						class: "card",
						name: "card",
						text: "Monezo Card",
						tooltipText:
							"Stake, hold and pay internationally using crypto card. Enjoy different perks according to tier",
						"--bg-color-hover": "#5CE517",
						tooltipBgColor: "#C6F5AF",
					},
					{
						id: 8,
						class: "marketplace",
						name: "marketplace",
						text: "Monezo Marketplace",
						tooltipText:
							"Investors will be able to choose all Monezo collections on branded marketplace",
						"--bg-color-hover": "#496DF2",
						tooltipBgColor: "#AFBFF5",
					},
					{
						id: 9,
						class: "institutional",
						name: "institutional",
						text: "Monezo Institutional",
						tooltipText:
							"Tailored solutions for perspective businesses, start-ups and large institutionals players",
						"--bg-color-hover": "#F29849",
						tooltipBgColor: "#F9D2AE",
					},
					{
						id: 10,
						class: "incubator",
						name: "incubator",
						text: "Monezo Incubator",
						tooltipText:
							"Promising startups and large enterprises get access to fund-raise by pitching business plan or current business model. Investors can choose projects selected by Monezo by purchasing NFT and share revenue from business activities",
						"--bg-color-hover": "#F24981",
						tooltipBgColor: "#FCB6CE",
					},
					{
						id: 11,
						class: "academy",
						name: "academy",
						text: "Monezo Academy",
						tooltipText:
							"Community-oriented program aimed to teach users about crypto and how finance works",
						"--bg-color-hover": "#F29849",
						tooltipBgColor: "#F9D2AE",
					},
					{
						id: 12,
						class: "all-in-one",
						name: "all-in-one",
						text: "All-in-One App",
						tooltipText:
							"Assists you in every step interacting with Monezo ecosystem",
						"--bg-color-hover": "#5CE517",
						tooltipBgColor: "#C6F5AF",
					},
					{
						id: 13,
						class: "charity",
						name: "charity",
						text: "Monezo Charity",
						tooltipText:
							"Transformative Crypto-Giving to support People in Need ",
						"--bg-color-hover": "#496DF2",
						tooltipBgColor: "#AFBFF5",
					},
				],

				connectorData: [
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[0.5, 1, 0, 1, 0, -1],
								[0.5, 0, 0, -1, -50, 17],
							],
						},
						source: "credit",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								midpoint: "0.26",
								cornerRadius: "15",
							},
						},
						overlay: false,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[1, 0.5, 1, 0, -1, 0],
								[0.5, 0, 0, 0, -17, 2],
							],
						},
						source: "nft",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: false,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[0, 0.5, -1, 0, 1, 0],
								[0.5, 0, 0, 0, 17, 2],
							],
						},
						source: "metaverse",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: false,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[0.5, 1, 0, 1, 0, -1],
								[0.5, 0, 0, -1, 50, 17],
							],
						},
						source: "care",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								midpoint: "0.26",
								cornerRadius: "15",
							},
						},
						overlay: false,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[0.5, 1, 0, 1, 0, -1],
								[0, 0.5, 0, 0, 17, -50],
							],
						},
						source: "perks",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: false,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[0.5, 1, 0, 1, 0, -1],
								[1, 0.5, 0, 0, -17, -50],
							],
						},
						source: "tools",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: false,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[1, 0.5, 1, 0, -1, 0],
								[0, 0.5, -1, 0],
							],
						},
						source: "wallet",
						connector: "Flowchart",
						overlay: false,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Left", "Right"],
						},
						source: "card",
						connector: "Flowchart",
						overlay: false,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[0.5, 0, 0, -1, 0, 1],
								[0, 0.5, 0, 0, 17, 50],
							],
						},
						source: "marketplace",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: false,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[0.5, 0, 0, -1, 0, 1],
								[1, 0.5, 0, 0, -17, 50],
							],
						},
						source: "institutional",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: false,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[0.5, 0, 0, -1, 0, 1],
								[0.5, 1, 0, 1, -50, -17],
							],
						},
						source: "incubator",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								midpoint: "0.25",
								cornerRadius: "15",
							},
						},
						overlay: false,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[1, 0.5, 1, 0, -1, 0],
								[0.5, 1, 0, 0, -17, -2],
							],
						},
						source: "academy",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: false,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[0, 0.5, -1, 0, 1, 0],
								[0.5, 1, 0, 0, 17, -2],
							],
						},
						source: "all-in-one",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: false,
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: [
								[0.5, 0, 0, -1, 0, 1],
								[0.5, 1, 0, 1, 50, -17],
							],
						},
						source: "charity",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								midpoint: "0.25",
								cornerRadius: "15",
							},
						},
						overlay: false,
					},
				],
			};
		},

		mounted() {
			this.init(this.$refs["chart"]);

			for (const item of this.connectorData) {
				this.instanceConnect(
					item.endpoint,
					this.$refs[item.source][0],
					this.$refs["logo"],
					item.label,
					item.strokeColor,
					item.paddingTop,
					item.paddingRight,
					item.paddingBottom,
					item.paddingLeft,
					item.connector,
					item.overlay
				);
			}
		},
	};
</script>

<style lang="scss" scoped>
	.ecosystem {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 100%;
		min-height: 100vh;
		background: linear-gradient(
			250.11deg,
			#1f6728 0%,
			#53c326 49.48%,
			#7eff2a 100%
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
				color: $monezo-persian-blue;
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

		.chart {
			position: relative;
			display: grid;
			grid-auto-columns: 1fr;
			align-items: center;
			width: 80%;
			height: 65vh;
			grid-template:
				"one-one one-two one-three one-four"
				"two-one . . two-two"
				"three-one . . three-two"
				"four-one . . four-two"
				"five-one five-two five-three five-four";
			grid-gap: 2rem;

			@media only screen and (max-width: 1200px) {
				width: 90%;
				height: 35vh;
			}

			.chart__item {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 5.4rem;
				border: 1px solid black;
				border-radius: 18px;
				background-color: $monezo-snowy-mint;
				color: $monezo-black;
				font-family: "Syne";
				font-size: 1.8rem;
				font-weight: 700;
				z-index: 1;

				&:hover {
					background-color: var(--bg-color-hover);
				}

				@media only screen and (max-width: 1512px) {
					height: 4.4rem;
					font-size: 1.6rem;
				}

				// ROW - 1
				&-credit {
					grid-area: one-one;
					justify-self: center;
					width: 75%;
				}

				&-nft {
					grid-area: one-two;
					justify-self: center;
					width: 75%;
				}

				&-metaverse {
					grid-area: one-three;
					justify-self: center;
					width: 75%;
				}

				&-care {
					grid-area: one-four;
					justify-self: center;
					width: 75%;
				}

				// ROW - 2
				&-perks {
					grid-area: two-one;
					left: 55%;
				}

				&-tools {
					grid-area: two-two;
					right: 55%;
				}

				// ROW - 3
				&-wallet {
					grid-area: three-one;
					justify-self: center;
					width: 75%;
				}

				&-card {
					grid-area: three-two;
					justify-self: center;
					width: 75%;
				}

				// ROW - 4
				&-marketplace {
					grid-area: four-one;
					left: 55%;
				}

				&-institutional {
					grid-area: four-two;
					right: 55%;
				}

				// ROW - 5
				&-incubator {
					grid-area: five-one;
					justify-self: center;
					width: 75%;
				}

				&-academy {
					grid-area: five-two;
					justify-self: center;
					width: 75%;
				}

				&-all-in-one {
					grid-area: five-three;
					justify-self: center;
					width: 75%;
				}

				&-charity {
					grid-area: five-four;
					justify-self: center;
					width: 75%;
				}
			}

			.logo {
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				justify-self: center;
				width: 14vw;
				height: 14vw;
				border: 1px solid black;
				border-radius: 50%;
				background-color: $monezo-snowy-mint;
				z-index: 1;

				img {
					width: 75%;
					height: auto;
				}
			}
		}

		[data-popover="eco-tooltip"] {
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
