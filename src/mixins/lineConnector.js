import * as jsPlumbBrowserUI from "@jsplumb/browser-ui";
import { FlowchartConnector } from "@jsplumb/connector-flowchart";

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
			paddingLeft,
			connector,
			overlay
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
					paddingLeft,
					connector,
					overlay
				)
			);
		},

		connector(
			source,
			target,
			label,
			strokeColor = "black",
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
			connector,
			overlay = "arrow"
		) {
			if (overlay === "arrow") {
				return {
					source: source,
					target: target,
					connector: connector,
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
			} else
				return {
					source: source,
					target: target,
					connector: connector,
					paintStyle: { stroke: strokeColor, strokeWidth: 2 },
					detachable: false,
				};
		},
	},

	mounted() {},
};
