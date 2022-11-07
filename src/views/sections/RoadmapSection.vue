<template>
	<div class="roadmap">
		<div class="text">
			<p class="text--top">STRATEGIC PLAN</p>
			<p class="text--large">Roadmap</p>
			<p class="text--small">
				Our mission is to make Monezo the only platform you need
				<br />
				for your strong financial future
			</p>
		</div>

		<div class="chart" ref="chart">
			<div
				v-for="(box, index) in boxesData"
				:key="box.id"
				:ref="box.name"
				:style="boxesData[index]"
				:class="[
					'chart__item',
					`chart__item-${box.class}`,
					{ 'active-quarter': box.activeQuarter },
				]"
				v-popover:roadmap-tooltip.top
				@mouseenter="
					tooltipText = box.tooltipText;
					tooltipBgColor = box.activeQuarter ? '#C6F5AF' : box.tooltipBgColor;
				"
			>
				{{ box.text }}
				<div class="jsplumb-element" :ref="box.name"></div>
			</div>
		</div>

		<popover
			name="roadmap-tooltip"
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
		name: "RoadmapSection",

		mixins: [lineConnector],

		data() {
			return {
				tooltipText: "",

				tooltipBgColor: "",

				boxesData: [
					{
						id: 0,
						class: "q1-2022",
						name: "q1-2022",
						text: "Q1 \n2022",
						tooltipText: `Idea Generation \nTeam Setting \nMarket Research & \nProject Planning`,
						"--bg-color-hover": "#F29849",
						tooltipBgColor: "#F9D2AE",
						activeQuarter:
							this.checkIfCurrentQuarter(1) && this.checkIfCurrentYear(2022),
					},
					{
						id: 1,
						class: "q2-2022",
						name: "q2-2022",
						text: "Q2 \n2022",
						tooltipText: `Team Expansion \nConcept Design \nWebsite Draft`,
						"--bg-color-hover": "#F29849",
						tooltipBgColor: "#F9D2AE",
						activeQuarter:
							this.checkIfCurrentQuarter(2) && this.checkIfCurrentYear(2022),
					},
					{
						id: 2,
						class: "q3-2022",
						name: "q3-2022",
						text: "Q3 \n2022",
						tooltipText: `Litepaper & Pitchdeck Draft \nProject Idea POC Design & \nPrototyping`,
						"--bg-color-hover": "#F29849",
						tooltipBgColor: "#F9D2AE",
						activeQuarter:
							this.checkIfCurrentQuarter(3) && this.checkIfCurrentYear(2022),
					},
					{
						id: 3,
						class: "q4-2022",
						name: "q4-2022",
						text: "Q4 \n2022",
						tooltipText: `Seed Sale \nCommunity Creation \nDeveloping Partnerships \nDeveloping Market Strategy`,
						"--bg-color-hover": "#F29849",
						tooltipBgColor: "#F9D2AE",
						activeQuarter:
							this.checkIfCurrentQuarter(4) && this.checkIfCurrentYear(2022),
					},
					{
						id: 4,
						class: "q1-2023",
						name: "q1-2023",
						text: "Q1 \n2023",
						tooltipText: `Private & Strategic Sale \nAmbassador & Community \nProgram Creation \nCommunity Expansion & \nEngagement`,
						"--bg-color-hover": "#F24981",
						tooltipBgColor: "#FCB6CE",
						activeQuarter:
							this.checkIfCurrentQuarter(1) && this.checkIfCurrentYear(2023),
					},
					{
						id: 5,
						class: "q2-2023",
						name: "q2-2023",
						text: "Q2 \n2023",
						tooltipText: `Public Sale & TGE \n1st CEX & DEX Listings \nPlatform & Marketplace Launch`,
						"--bg-color-hover": "#F24981",
						tooltipBgColor: "#FCB6CE",
						activeQuarter:
							this.checkIfCurrentQuarter(2) && this.checkIfCurrentYear(2023),
					},
					{
						id: 6,
						class: "q3-2023",
						name: "q3-2023",
						text: "Q3 \n2023",
						tooltipText: `Monezo Incubator \nNew Investment Pools \n(NFT Collection) \nDashboard & Portfolio \nMultichain Deployments \nof NFT Collections`,
						"--bg-color-hover": "#F24981",
						tooltipBgColor: "#FCB6CE",
						activeQuarter:
							this.checkIfCurrentQuarter(3) && this.checkIfCurrentYear(2023),
					},
					{
						id: 7,
						class: "q4-2023",
						name: "q4-2023",
						text: "Q4 \n2023",
						tooltipText: `Monezo Wallet \nMonezo Care \nMonezo Institutional Services \nTracking & Analytics Tools`,
						"--bg-color-hover": "#F24981",
						tooltipBgColor: "#FCB6CE",
						activeQuarter:
							this.checkIfCurrentQuarter(4) && this.checkIfCurrentYear(2023),
					},
					{
						id: 8,
						class: "q1-q2-2024",
						name: "q1-q2-2024",
						text: "Q1/Q2 \n2024",
						tooltipText: `Monezo Crypto Card \nAl-in-One App`,
						"--bg-color-hover": "#496DF2",
						tooltipBgColor: "#AFBFF5",
						activeQuarter:
							this.checkIfCurrentQuarter(1, 2) && this.checkIfCurrentYear(2024),
					},
					{
						id: 9,
						class: "q3-q4-2024",
						name: "q3-q4-2024",
						text: "Q3/Q4 \n2024",
						tooltipText: `Metaverse Support \nMonezo Credit Program`,
						"--bg-color-hover": "#496DF2",
						tooltipBgColor: "#AFBFF5",
						activeQuarter:
							this.checkIfCurrentQuarter(3, 4) && this.checkIfCurrentYear(2024),
					},
				],

				connectorData: [
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Bottom", "Left"],
						},
						source: "q1-2022",
						target: "q2-2022",
						connector: {
							type: "Flowchart",
							options: {
								cornerRadius: "15",
							},
						},
						overlay: {
							type: "plain-arrow",
							location: 0.25,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Top", "Left"],
						},
						source: "q2-2022",
						target: "q3-2022",
						connector: {
							type: "Flowchart",
							options: {
								cornerRadius: "15",
							},
						},
						overlay: {
							type: false,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Bottom", "Left"],
						},
						source: "q3-2022",
						target: "q4-2022",
						connector: {
							type: "Flowchart",
							options: {
								cornerRadius: "15",
							},
						},
						overlay: {
							type: "plain-arrow",
							location: 0.25,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Top", "Left"],
						},
						source: "q4-2022",
						target: "q1-2023",
						connector: {
							type: "Flowchart",
							options: {
								cornerRadius: "15",
							},
						},
						overlay: {
							type: false,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Bottom", "Left"],
						},
						source: "q1-2023",
						target: "q2-2023",
						connector: {
							type: "Flowchart",
							options: {
								cornerRadius: "15",
							},
						},
						overlay: {
							type: "plain-arrow",
							location: 0.25,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Top", "Left"],
						},
						source: "q2-2023",
						target: "q3-2023",
						connector: {
							type: "Flowchart",
							options: {
								cornerRadius: "15",
							},
						},
						overlay: {
							type: false,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Bottom", "Left"],
						},
						source: "q3-2023",
						target: "q4-2023",
						connector: {
							type: "Flowchart",
							options: {
								cornerRadius: "15",
							},
						},
						overlay: {
							type: "plain-arrow",
							location: 0.25,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Top", "Left"],
						},
						source: "q4-2023",
						target: "q1-q2-2024",
						connector: {
							type: "Flowchart",
							options: {
								cornerRadius: "15",
							},
						},
						overlay: {
							type: false,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Bottom", "Left"],
						},
						source: "q1-q2-2024",
						target: "q3-q4-2024",
						connector: {
							type: "Flowchart",
							options: {
								cornerRadius: "15",
							},
						},
						overlay: {
							type: "plain-arrow",
							location: 0.25,
						},
					},
				],

				connectorDataMaxDeviceWidth584: [
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Right", "Top"],
						},
						source: "q1-2022",
						target: "q2-2022",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: {
							type: "plain-arrow",
							location: 0.3,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Left", "Top"],
						},
						source: "q2-2022",
						target: "q3-2022",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: {
							type: false,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Right", "Top"],
						},
						source: "q3-2022",
						target: "q4-2022",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: {
							type: "plain-arrow",
							location: 0.3,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Left", "Top"],
						},
						source: "q4-2022",
						target: "q1-2023",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: {
							type: false,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Right", "Top"],
						},
						source: "q1-2023",
						target: "q2-2023",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: {
							type: "plain-arrow",
							location: 0.3,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Left", "Top"],
						},
						source: "q2-2023",
						target: "q3-2023",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: {
							type: false,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Right", "Top"],
						},
						source: "q3-2023",
						target: "q4-2023",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: {
							type: "plain-arrow",
							location: 0.3,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Left", "Top"],
						},
						source: "q4-2023",
						target: "q1-q2-2024",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: {
							type: false,
						},
					},
					{
						endpoint: {
							endpoint: "Blank",
							anchors: ["Right", "Top"],
						},
						source: "q1-q2-2024",
						target: "q3-q4-2024",
						connector: {
							type: "Flowchart",
							options: {
								stub: "0",
								cornerRadius: "15",
							},
						},
						overlay: {
							type: "plain-arrow",
							location: 0.3,
						},
					},
				],
			};
		},

		methods: {
			checkIfCurrentQuarter(...quarter) {
				const currentQuarter = Math.floor((new Date().getMonth() + 3) / 3);

				return currentQuarter === quarter[0] || currentQuarter === quarter[1]
					? true
					: false;
			},

			checkIfCurrentYear(...year) {
				const currentYear = new Date().getFullYear();

				return currentYear === year[0] || currentYear === year[1]
					? true
					: false;
			},
		},

		mounted() {
			this.init(this.$refs["chart"]);

			if (window.matchMedia("(max-width: 321px)").matches) {
				for (const item of this.connectorDataMaxDeviceWidth584) {
					this.instanceConnect(
						item.endpoint,
						this.$refs[item.source][0],
						this.$refs[item.target][0],
						item.label,
						item.strokeColor,
						item.paddingTop,
						item.paddingRight,
						item.paddingBottom,
						item.paddingLeft,
						item.connector,
						{ ...item.overlay, width: 14, length: 14 }
					);
				}
			} else if (window.matchMedia("(max-width: 584px)").matches) {
				for (const item of this.connectorDataMaxDeviceWidth584) {
					this.instanceConnect(
						item.endpoint,
						this.$refs[item.source][0],
						this.$refs[item.target][0],
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
			} else {
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
						item.paddingLeft,
						item.connector,
						item.overlay
					);
				}
			}
		},
	};
</script>

<style lang="scss" scoped>
	.roadmap {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		min-height: 100vh;
		background: linear-gradient(
			93.77deg,
			#371f67 0%,
			#805cc8 49.48%,
			#9e6dff 100%
		);

		@media only screen and (max-width: 896px) {
			padding: 3rem 0;
		}

		@media only screen and (max-width: 834px) {
			padding: 0;
		}

		@media only screen and (max-width: 568px) {
			padding: 3rem 0;
		}

		.text {
			margin-bottom: 7%;

			@media only screen and (max-width: 584px) {
				width: 80%;
			}

			&--top {
				margin-bottom: 1.8rem;
				color: $monezo-black;
				font-family: "Poppins";
				font-size: 1.8rem;
				font-weight: 400;
			}

			&--large {
				margin-bottom: 3rem;
				color: $monezo-pizazz;
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
			grid-template-rows: max-content max-content;
			justify-items: center;
			align-items: center;
			width: fit-content;
			max-height: 70vh;
			grid-gap: 2rem;
			row-gap: 10rem;

			@media only screen and (max-width: 584px) {
				display: flex;
				flex-direction: column;
				justify-content: center;
				grid-gap: 0;
				row-gap: 0;
				width: 40%;
			}

			@media only screen and (max-width: 416px) {
				width: 45%;
			}

			@media only screen and (max-width: 320px) {
				width: 45%;
			}

			@media only screen and (max-width: 658px) and (orientation: landscape) {
				max-height: fit-content;
			}

			.chart__item {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 11rem;
				height: 11rem;
				white-space: pre-wrap;
				border: 1px solid black;
				border-radius: 100%;
				background-color: $monezo-fog;
				color: $monezo-black;
				font-family: "Poppins";
				font-size: 2.4rem;
				font-weight: 500;
				z-index: 1;

				&:hover {
					background-color: var(--bg-color-hover);
				}

				@media only screen and (max-width: 1512px) {
					font-size: 2.2rem;
				}

				@media only screen and (max-width: 1400px) {
					width: 10rem;
					height: 10rem;
				}

				@media only screen and (max-width: 1300px) {
					width: 9rem;
					height: 9rem;
				}

				@media only screen and (max-width: 1200px) {
					width: 8rem;
					height: 8rem;
					font-size: 1.9rem;
				}

				@media only screen and (max-width: 1024px) {
					width: 6.5rem;
					height: 6.5rem;
					font-size: 1.5rem;
				}

				@media only screen and (max-width: 934px) {
					width: 5.5rem;
					height: 5.5rem;
					font-size: 1.2rem;
				}

				@media only screen and (max-width: 896px) {
					width: 5rem;
					height: 5rem;
					font-size: 1.1rem;
				}

				@media only screen and (max-width: 844px) {
					width: 4.5rem;
					height: 4.5rem;
					font-size: 1rem;
				}

				@media only screen and (max-width: 768px) {
					width: 3.8rem;
					height: 3.8rem;
					font-size: 0.9rem;
				}

				@media only screen and (max-width: 584px) {
					&:nth-child(odd) {
						align-self: flex-start;
					}

					&:nth-child(even) {
						align-self: flex-end;
					}

					width: 6rem;
					height: 6rem;
					font-size: 1.3rem;
				}

				@media only screen and (max-width: 320px) {
					width: 4rem;
					height: 4rem;
					font-size: 0.9rem;
				}

				&.active-quarter {
					background-color: $monezo-lima-green;
				}

				&-q1-2022 {
					grid-column: 1;
					grid-row: 1;
				}

				&-q2-2022 {
					grid-column: 2;
					grid-row: 2;
				}

				&-q3-2022 {
					grid-column: 3;
					grid-row: 1;
				}

				&-q4-2022 {
					grid-column: 4;
					grid-row: 2;
				}

				&-q1-2023 {
					grid-column: 5;
					grid-row: 1;
				}

				&-q2-2023 {
					grid-column: 6;
					grid-row: 2;
				}

				&-q3-2023 {
					grid-column: 7;
					grid-row: 1;
				}

				&-q4-2023 {
					grid-column: 8;
					grid-row: 2;
				}

				&-q1-q2-2024 {
					grid-column: 9;
					grid-row: 1;
				}

				&-q3-q4-2024 {
					grid-column: 10;
					grid-row: 2;
				}
			}
		}

		[data-popover="roadmap-tooltip"] {
			width: fit-content !important;
			max-width: 50rem !important;
			margin-top: -2rem !important;
			padding: 1.2rem;
			white-space: pre-wrap;
			text-align: left;
			border: 1px solid $monezo-black;
			border-radius: 18px;
			color: black;
			font-family: "Poppins";
			font-size: 1.6rem;
			font-weight: 400;
		}
	}

	.jsplumb-element {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
