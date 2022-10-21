<template>
	<div class="nav-bar">
		<a href="#" class="nav-bar__title">Monezo</a>
		<a href="#">Marketplace</a>
		<a href="#">Incubator</a>
		<a href="#">Institutional</a>
		<a href="#">How It Works</a>
		<a href="#">About Us</a>
		<a href="#">Academy</a>
		<a href="#">Blog</a>
	</div>
</template>

<style lang="scss">
	.nav-bar {
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: 64px;
		background-color: #ffffff;

		& a {
			font-family: "Poppins";
			font-weight: 600;
			font-size: 2rem;
			text-decoration: none;
			color: $monezo-white;
		}
	}
</style>
