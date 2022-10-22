const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
				@import "@/styles/color_variables.scss";
				@import "@/styles/overrides.scss";`,
			},
		},
	},
});
