<template>
	<div class="team-member-card">
		<div class="team-member-card__box">
			<img
				:src="
					require('@/assets/images/teamMembers/' + this.memberPicture + '.jpg')
				"
			/>
		</div>
		<p class="team-member-card__name">{{ memberName }}</p>
		<p class="team-member-card__position">{{ memberPosition }}</p>
		<svg
			class="team-member-card__social-logo"
			:class="classAddons"
			width="30"
			height="30"
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15 0C6.71562 0 0 6.71562 0 15C0 23.2844 6.71562 30 15 30C23.2844 30 30 23.2844 30 15C30 6.71562 23.2844 0 15 0ZM11.3281 21.2172H8.29062V11.4422H11.3281V21.2172ZM9.79062 10.2422C8.83125 10.2422 8.21094 9.5625 8.21094 8.72187C8.21094 7.86406 8.85 7.20469 9.82969 7.20469C10.8094 7.20469 11.4094 7.86406 11.4281 8.72187C11.4281 9.5625 10.8094 10.2422 9.79062 10.2422ZM22.4219 21.2172H19.3844V15.8C19.3844 14.5391 18.9438 13.6828 17.8453 13.6828C17.0063 13.6828 16.5078 14.2625 16.2875 14.8203C16.2063 15.0188 16.1859 15.3 16.1859 15.5797V21.2156H13.1469V14.5594C13.1469 13.3391 13.1078 12.3187 13.0672 11.4406H15.7062L15.8453 12.7984H15.9062C16.3062 12.1609 17.2859 11.2203 18.925 11.2203C20.9234 11.2203 22.4219 12.5594 22.4219 15.4375V21.2172Z"
			/>
		</svg>
	</div>
</template>

<script>
	export default {
		name: "ButtonPrimary",
		props: {
			memberPicture: {
				type: String,
				required: true,
			},

			memberName: {
				type: String,
				required: true,
			},

			memberPosition: {
				type: String,
				required: true,
			},

			/* Pass not the desired color of the button itslef,
			but the color of the background where the button will be used,
			and the color of the button will be automatically matched.
			*/
			bgColor: {
				type: String,
				required: true,
				validator: function (color) {
					return ["blue", "red", "brown"].includes(color);
				},
			},
		},

		computed: {
			classAddons() {
				return `team-member-card__social-logo--bg-${this.bgColor}`;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.team-member-card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		&__box {
			width: 20.8rem;
			height: 26rem;
			margin-bottom: 1.8rem;
			border: 1px solid $monezo-black;
			border-radius: 18px;
			overflow: hidden;

			img {
				max-width: 100%;
				max-height: 100%;
				object-fit: contain;
			}
		}

		&__name {
			font-family: "Poppins";
			font-size: 1.8rem;
			font-weight: 400;
			color: $monezo-black;
		}

		&__position {
			margin-bottom: 0.9rem;
			font-family: "Poppins";
			font-size: 1.4rem;
			font-weight: 400;
			color: $monezo-purple-heart;
		}

		&__social-logo {
			fill: black;

			&--bg-blue:hover {
				fill: $monezo-lima-green;
			}

			&--bg-blue:active {
				fill: $monezo-bilbao-green;
			}

			&--bg-red:hover {
				fill: $monezo-persian-blue;
			}

			&--bg-red:active {
				fill: $monezo-torea-bay;
			}

			&--bg-brown:hover {
				fill: $monezo-purple-heart;
			}

			&--bg-brown:active {
				fill: $monezo-blue-gem;
			}
		}
	}
</style>
