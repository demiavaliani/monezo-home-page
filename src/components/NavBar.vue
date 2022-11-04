<template>
	<div>
		<div
			v-if="isMobileDevice"
			id="nav-bar"
			:class="['nav-bar', { 'is-mobile-device': isMobileDevice }]"
		>
			<a href="#" class="nav-bar__title-text">Monezo</a>
			<a href="#" class="nav-bar__items-text">Marketplace</a>
			<a href="#" class="nav-bar__items-text">Incubator</a>
			<a href="#" class="nav-bar__items-text">Institutional</a>
			<a href="#" class="nav-bar__items-text">How It Works</a>
			<a href="#" class="nav-bar__items-text">About Us</a>
			<a href="#" class="nav-bar__items-text">Academy</a>
			<a href="#" class="nav-bar__items-text">Blog</a>
			<ButtonNavigation text="All-in-One App" width="14.4rem" />
			<a href="javascript:void(0);" class="hamburger" @click="expandNavbar">
				<img src="@/assets/images/hamburger.svg" />
			</a>
		</div>

		<div v-else class="nav-bar">
			<div class="nav-bar__title">
				<a href="#" class="nav-bar__title-text">Monezo</a>
			</div>

			<div class="nav-bar__items">
				<a href="#" class="nav-bar__items-text">Marketplace</a>
				<a href="#" class="nav-bar__items-text">Incubator</a>
				<a href="#" class="nav-bar__items-text">Institutional</a>
				<a href="#" class="nav-bar__items-text">How It Works</a>
				<a href="#" class="nav-bar__items-text">About Us</a>
				<a href="#" class="nav-bar__items-text">Academy</a>
				<a href="#" class="nav-bar__items-text">Blog</a>
			</div>

			<div class="nav-bar__button-wrapper">
				<ButtonNavigation text="All-in-One App" width="14.4rem" />
			</div>
		</div>
	</div>
</template>

<script>
	import ButtonNavigation from "./ButtonNavigation.vue";

	export default {
		name: "NavBar",

		components: {
			ButtonNavigation,
		},

		computed: {
			isMobileDevice() {
				return window.matchMedia("(max-width: 1024px)").matches;
			},
		},

		methods: {
			expandNavbar() {
				const element = document.getElementById("nav-bar");
				element.classList.toggle("responsive");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.nav-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 8%;
		min-height: 8vh;
		background-color: $monezo-white;

		& a {
			font-family: "Poppins";
			text-decoration: none;
			color: $monezo-black;
		}

		&__title {
			width: 20%;

			&-text {
				font-size: 3.2rem;
				font-weight: 600;
			}
		}

		&__items {
			display: flex;
			flex-grow: 1;
			justify-content: space-around;
			max-width: 91rem;

			&-text {
				font-size: 1.8rem;
				font-weight: 400;
			}

			.hamburger {
				display: none;
			}
		}

		&__button-wrapper {
			width: 20%;
		}

		@media only screen and (max-width: 1024px) {
			justify-content: space-around;
			gap: 50%;

			& a:not(:first-child),
			.button-navigation {
				display: none;
			}

			& .hamburger {
				display: block !important;

				img {
					display: block;
					animation: clickClose 0.1s linear;

					@media only screen and (max-width: 416px) {
						animation-name: none;
					}
				}

				@keyframes clickClose {
					0% {
						height: 5rem;
					}
					50% {
						width: 5.3rem;
						height: 5.3rem;
					}
					100% {
						height: 5rem;
					}
				}
			}

			&.responsive {
				display: block;
				gap: 0;

				a:first-child {
					font-size: 4.5rem;
				}

				a,
				.button-navigation {
					display: block !important;
					margin: 0rem auto 2rem;
				}

				.hamburger {
					position: absolute;
					right: 8.4rem;
					top: 3rem;

					img {
						animation: clickOpen 0.1s linear;
					}

					@keyframes clickOpen {
						0% {
							height: 5rem;
						}
						50% {
							width: 5.3rem;
							height: 5.3rem;
						}
						100% {
							height: 5rem;
						}
					}

					@media only screen and (max-width: 834px) {
						right: 6rem;
						top: 2.3rem;
					}

					@media only screen and (max-width: 768px) {
						right: 5.2rem;
						top: 1.6rem;
					}

					@media only screen and (max-width: 584px) {
						right: 4.4rem;
						top: 1.2rem;
					}

					@media only screen and (max-width: 416px) {
						right: 2.1rem;
						top: 1.6rem;

						& img {
							animation-name: none;
						}
					}

					@media only screen and (max-width: 390px) {
						right: 3.7rem;
						top: 1.4rem;
					}

					@media only screen and (max-width: 320px) {
						right: 2.5rem;
						top: 0.9rem;
					}
				}
			}
		}

		@media only screen and (max-width: 584px) {
			gap: 40%;
		}

		@media only screen and (max-width: 416px) {
			.hamburger img {
				width: 4rem;
			}
		}

		@media only screen and (max-width: 390px) {
			gap: 20%;
		}

		@media only screen and (max-width: 320px) {
			.hamburger img {
				width: 3rem;
			}
		}
	}
</style>
