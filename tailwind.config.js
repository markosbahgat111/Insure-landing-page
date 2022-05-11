
module.exports = {
	content: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				Karla:['Karla'],
				DM:['DM Serif Display']
			},
			gridTemplateColumns: {
				'sectionOne': "repeat(auto-fill, minmax(300px, 1fr))",
			}
		},
	},
	plugins: [],
};
