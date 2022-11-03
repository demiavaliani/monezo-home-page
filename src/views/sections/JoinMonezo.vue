<template>
	<div class="join-monezo-section">
		<div class="top">
			<p class="text--large">Join Monezo Platform</p>
			<p class="text--small">Stake your NFT and track your earnings</p>
			<ButtonPrimary text="Access Dashboard" width="16.9rem" bg-color="blue" />
		</div>
		<div class="middle">
			<div class="description">
				<p class="text text--large">Monezo</p>
				<p class="text text--small">
					The only platform you need for your strong financial future
				</p>
			</div>
			<div class="contacts">
				<p>Contact Us</p>
				<p>General Inquiries:</p>
				<p>Info@monezo.xyz</p>
				<p>Help & Support</p>
				<p>Investors & Partners Relationships</p>
				<p>Press Inquiries</p>
			</div>
			<div class="subscription">
				<p>Fortune favours the brave</p>
				<p>
					Stay up to date on the projects and ideas that are shaping finance
				</p>
				<div class="subscribe-input">
					<input type="email" placeholder="Submit your e-mail" />
					<ButtonNavigation text="Brave enough" width="13.4rem" />
				</div>
				<p>
					No spam, notifications only about new products and company updates
				</p>
			</div>
		</div>
		<div class="bottom">
			<div class="left">
				<p>Copyright ©2022 Monezo. All rights reserved.</p>
			</div>
			<div class="right">
				<p>Marketplace</p>
				<p>Incubator</p>
				<p>Institutional</p>
				<p>How It Works</p>
				<p>About Us</p>
				<p>Academy</p>
				<p>Blog</p>
			</div>
		</div>
	</div>
</template>

<script>
	import ButtonPrimary from "@/components/ButtonPrimary.vue";
	import ButtonNavigation from "@/components/ButtonNavigation.vue";

	export default {
		name: "JoinMonezo",

		components: {
			ButtonPrimary,
			ButtonNavigation,
		},
	};
</script>

<style lang="scss" scoped>
	.join-monezo-section {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		min-height: 100vh;

		.top {
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 3.6rem;
			height: 53%;
			min-height: 53vh;
			background: linear-gradient(266.21deg, #002199 0%, #0d40f2 100%);

			@media only screen and (min-height: 1150px) {
				flex-grow: 1;
				padding: 0;
			}

			.text {
				&--large {
					color: $monezo-lima-green;
					font-family: "Syne";
					font-size: 3.2rem;
					font-weight: 700;
				}

				&--small {
					color: $monezo-white;
					font-family: "Poppins";
					font-size: 1.8rem;
					font-weight: 400;
				}
			}
		}

		.middle {
			display: flex;
			height: 39%;
			min-height: 39vh;
			border: 1px solid $monezo-black;
			border-left: 0;
			border-right: 0;

			@media only screen and (min-height: 1150px) {
				height: fit-content;
				min-height: fit-content;
			}

			@media only screen and (max-width: 584px) {
				flex-direction: column;
			}

			.description,
			.contacts,
			.subscription {
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				padding: 5rem 0;

				@media only screen and (max-width: 584px) {
					width: 100% !important;
					max-width: 100% !important;
					padding: 5rem 7rem !important;
				}

				@media only screen and (max-width: 320px) {
					padding: 5rem !important;
				}
			}

			.description {
				width: 28%;
				padding-left: 7rem;
				padding-right: 7rem;

				.text {
					color: $monezo-black;
					font-family: "Poppins";
					text-align: left;

					&--large {
						margin-bottom: 1.8rem;
						font-size: 3.2rem;
						font-weight: 600;
					}

					&--small {
						font-size: 1.8rem;
						font-weight: 400;

						@media only screen and (max-width: 1512px) {
							font-size: 1.6rem;
						}
					}
				}
			}

			.contacts {
				width: 28%;
				padding-left: 5rem;
				padding-right: 5rem;
				border: 1px solid $monezo-black;
				border-top: 0;
				border-bottom: 0;

				@media only screen and (max-width: 584px) {
					border-top: 1px solid $monezo-black;
					border-bottom: 1px solid $monezo-black;
					border-left: 0;
					border-right: 0;
				}

				p {
					text-align: left;
					color: $monezo-black;
					font-family: "Poppins";
					font-size: 1.8rem;
					font-weight: 400;

					@media only screen and (max-width: 1512px) {
						font-size: 1.6rem;
					}
				}

				& :nth-child(1) {
					margin-bottom: 1.8rem;
					color: $monezo-persian-blue;
					font-weight: 500;
				}

				& :nth-child(2) {
					font-weight: 700;
				}

				& :nth-child(3) {
					margin-bottom: 3.2rem;
				}
			}

			.subscription {
				max-width: 44%;
				padding-left: 6rem;
				padding-right: 6rem;
				text-align: start;

				p {
					font-family: "Poppins";
					font-size: 1.8rem;
					font-weight: 400;
					margin-bottom: 1.8rem;

					@media only screen and (max-width: 1512px) {
						font-size: 1.6rem;
					}
				}

				p:nth-child(1) {
					color: $monezo-persian-blue;
					font-weight: 500;
				}

				p:nth-child(2) {
					color: $monezo-black;
				}

				p:nth-child(4) {
					margin-bottom: 0;
					color: $monezo-tundora;
					font-size: 1.4rem;
				}
				.subscribe-input {
					display: flex;
					gap: 1.8rem;
					width: 100%;

					@media only screen and (max-width: 1024px) {
						flex-direction: column;
						gap: 0;
						margin: 0 0 1.8rem;
						align-items: center;
					}

					input {
						box-sizing: border-box;
						margin-bottom: 1.8rem;
						width: 74%;
						height: 3.7rem;
						padding: 0.8rem 0.9rem;
						border: 1px solid $monezo-black;
						background-color: $monezo-concrete;

						@media only screen and (max-width: 1024px) {
							width: 100%;
						}

						&::placeholder {
							color: $monezo-emperor;
							font-family: "Poppins";
							font-size: 1.4rem;
							font-weight: 400;

							@media only screen and (max-width: 1512px) {
								font-size: 1.3rem;
							}
						}
					}

					@media only screen and (max-width: 1024px) {
						.button-navigation {
							width: 100% !important;
						}
					}

					@media only screen and (max-width: 584px) {
						.button-navigation {
							width: 40% !important;
						}
					}

					@media only screen and (max-width: 416px) {
						.button-navigation {
							width: 60% !important;
						}
					}

					@media only screen and (max-width: 320px) {
						.button-navigation {
							width: 100% !important;
						}
					}
				}
			}
		}

		.bottom {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 8%;
			min-height: 8vh;

			p {
				font-family: "Poppins";
				font-size: 1.8rem;
				font-weight: 400;

				@media only screen and (max-width: 1512px) {
					font-size: 1.6rem;
				}
			}

			.left {
				color: $monezo-emperor;
			}

			.right {
				display: flex;
				gap: 4rem;
				color: $monezo-black;

				@media only screen and (max-width: 1024px) {
					display: none;
				}
			}
		}
	}
</style>
