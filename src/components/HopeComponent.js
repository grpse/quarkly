import React from 'react';
import atomize from "@quarkly/atomize";

const HopeComponent = props => {
	fetch('/').then(r => r.text()).then(console.log);
	return <div {...props}>
		      
		{props.text}
		    
	</div>;
};

export default atomize(HopeComponent)({
	name: "HopeComponent",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "HopeComponent — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		text: "This is a prop info"
	}
});