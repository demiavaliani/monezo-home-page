<template>
	<div class="team-section">
		<p class="text text--top">OUR TEAM</p>
		<p class="text text--large">Meet Our Executive Leadership Team</p>
		<p class="text text--small">
			Never doubt that a small group of thoughtful people can change the world.
			Indeed, it is the only thing that ever has.
		</p>

		<div class="team-members">
			<TeamMemberCard
				v-for="member in this.teamMembers"
				:key="member.id"
				:member-name="member.name"
				:member-position="member.position"
				:member-picture="member.picture"
				bg-color="red"
			></TeamMemberCard>
		</div>
	</div>
</template>

<script>
	import TeamMemberCard from "@/components/TeamMemberCard.vue";

	export default {
		name: "TeamSection",

		components: { TeamMemberCard },

		data() {
			return {
				teamMembers: [
					{
						id: 1,
						name: "Valdemārs Barets",
						position: "Chief Business Officer",
						picture: "valdemars-barets",
					},

					{
						id: 2,
						name: "Aleksejs Borodinovs",
						position: "Chief Financial Officer",
						picture: "aleksejs-borodinovs",
					},

					{
						id: 3,
						name: "Maksims Kurājevs",
						position: "Chief Executive Officer",
						picture: "maksims-kurajevs",
					},

					{
						id: 14,
						name: "Sergejs Hlusovs",
						position: "Chief Technical Officer",
						picture: "sergejs-hlusovs",
					},

					{
						id: 5,
						name: "Nick Tretinko",
						position: "Chief Marketing Officer",
						picture: "nick-tretinko",
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.team-section {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		min-height: 100vh;
		padding: 5rem 0;
		background: linear-gradient(
			104.28deg,
			#ffb753 0%,
			#ffadaf 71.35%,
			#d98d9c 100%
		);

		@media only screen and (max-width: 584px) {
			padding: 5rem 5rem;
		}

		@media only screen and (max-width: 416px) {
			padding: 5rem 3rem;
		}

		.text {
			font-family: "Poppins";
			&--top {
				margin-bottom: 1.8rem;
				color: $monezo-black;
				font-family: "Poppins";
				font-size: 1.8rem;
				font-weight: 400;
			}

			&--large {
				margin-bottom: 3.6rem;
				font-family: "Syne";
				font-size: 3.2rem;
				font-weight: 700;
				color: $monezo-purple-heart;
			}

			&--small {
				margin-bottom: 7.2rem;
				max-width: 60ch;
				font-size: 1.8rem;
				font-weight: 400;
				color: $monezo-black;
			}
		}

		.team-members {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 6rem;

			@media only screen and (max-width: 1280px) {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				width: 80%;
			}

			@media only screen and (max-width: 768px) {
				column-gap: 3rem;
			}

			@media only screen and (max-width: 584px) {
				grid-template-columns: repeat(2, 1fr);
				column-gap: 5rem;
			}

			@media only screen and (max-width: 430px) {
				grid-template-columns: 1fr;
				column-gap: 5rem;
			}
		}
	}
</style>
