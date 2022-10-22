<template>
	<div class="company-logos">
		<img class="company-logos__png" src="@/assets/images/multi-bank-logo.png" />
		<img class="company-logos__png" src="@/assets/images/megogo-logo.png" />
		<img class="company-logos__png" src="@/assets/images/castles-logo.png" />
		<img class="company-logos__png" src="@/assets/images/pion-logo.png" />
	</div>
</template>

<style lang="scss" scoped>
	.company-logos {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 17%;

		&__png {
			height: 60px;
		}
	}
</style>
