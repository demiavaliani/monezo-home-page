import * as jsPlumbBrowserUI from "@jsplumb/browser-ui";

export default {
	data() {
		return {
			instanceData: {},
		};
	},

	methods: {
		init(wrapper) {
			this.instanceData = jsPlumbBrowserUI.newInstance({
				container: wrapper,
				elementsDraggable: false,
			});
		},

		instanceConnect(
			endpoint,
			source,
			target,
			label,
			strokeColor,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft
		) {
			this.instanceData.connect(
				endpoint,
				this.connector(
					source,
					target,
					label,
					strokeColor,
					paddingTop,
					paddingRight,
					paddingBottom,
					paddingLeft
				)
			);
		},

		connector(
			source,
			target,
			label,
			strokeColor,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft
		) {
			return {
				source: source,
				target: target,
				connector: "Straight",
				paintStyle: { stroke: strokeColor, strokeWidth: 2 },
				detachable: false,
				overlays: [
					{
						type: "PlainArrow",
						options: {
							location: 0.5,
							width: 22,
							length: 22,
							foldback: 1,
						},
					},
					{
						type: "Label",
						options: {
							label: label,
							location: [0.5],
							cssClass: `jtk-overlay__label padding-top-${paddingTop} padding-right-${paddingRight} padding-bottom-${paddingBottom} padding-left-${paddingLeft}`,
						},
					},
				],
			};
		},
	},

	mounted() {},
};
