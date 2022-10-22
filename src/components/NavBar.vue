<template>
	<div class="nav-bar">
		<div class="nav-bar__title">
			<a href="#" class="nav-bar__title--text">Monezo</a>
		</div>

		<div class="nav-bar__items">
			<a href="#" class="nav-bar__items--text font-weight-400">Marketplace</a>
			<a href="#" class="nav-bar__items--text">Incubator</a>
			<a href="#" class="nav-bar__items--text">Institutional</a>
			<a href="#" class="nav-bar__items--text">How It Works</a>
			<a href="#" class="nav-bar__items--text">About Us</a>
			<a href="#" class="nav-bar__items--text">Academy</a>
			<a href="#" class="nav-bar__items--text">Blog</a>
		</div>

		<div class="nav-bar__button">
			<button></button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.nav-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 8%;
		background-color: #ffffff;

		& a {
			font-family: "Poppins";
			text-decoration: none;
			color: $monezo-black;
		}

		&__title {
			width: 20%;

			&--text {
				font-size: 3.2rem;
				font-weight: 600;
			}
		}

		&__items {
			display: flex;
			flex-grow: 1;
			justify-content: space-around;
			max-width: 91rem;

			&--text {
				font-size: 1.8rem;
				font-weight: 400;
			}
		}

		&__button {
			width: 20%;

			button {
				width: 14.4rem;
				height: 3.7rem;
				padding: 0;
				border-radius: 53px;
			}
		}
	}
</style>
