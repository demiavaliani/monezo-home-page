<template>
	<div class="partner-logos">
		<img class="partner-logos__png" src="@/assets/images/multi-bank-logo.png" />
		<img class="partner-logos__png" src="@/assets/images/megogo-logo.png" />
		<img class="partner-logos__png" src="@/assets/images/castles-logo.png" />
		<img class="partner-logos__png" src="@/assets/images/pion-logo.png" />
	</div>
</template>

<style lang="scss" scoped>
	.partner-logos {
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 17%;
		min-height: 17vh;
		padding: 3rem 0;

		&__png {
			height: 60px;
		}
	}
</style>
