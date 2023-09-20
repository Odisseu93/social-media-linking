const Theme = {
	colors: {
		nileBlue: '#213555',
		whiteProcelain: '#F0F0F0',
		yellowStraw: '#E5D283',
		yellowCanary: '#FFEB4B',
	},

	background: {
		bodyDesktop: 'assets/img/bglight_body_desktop.jpg',
		bodyMobile: 'assets/img/bglight_body_mobile.jpg',
		linearPurple: 'linear-gradient(180deg, rgba(112, 14, 249, 0.30) 0%, rgba(135, 27, 251, 0.10) 100%), linear-gradient(120deg, rgba(250, 250, 250, 0.40) 0%, rgba(254, 253, 250, 0.10) 96.16%)'
	},

	fontSizes: { 
		/* 16px / 24px */	
		base: `font-size: 1rem;
					line-height: 1.5rem;`, 

		/* 18px / 28px */
		'text-lg': `font-size: 1.125rem;
		line-height: 1.75rem;`,
		
		/* 20px / 28px */
		'text-xl': `font-size: 1.25rem;
		line-height: 1.75rem;`,

		/* 32px / 36px */
		'text-3xl': `font-size: 1.875rem;
		line-height: 2rem; `
	},

	effects: {
		backdropFilterBlurWhite: 'blur(9.888904571533203px)',
		shadowDarkMd: '-7px 9px 7px 0px rgba(33, 53, 85, 0.64);',
		shadowLightMd: '0px 4px 12px 0px rgba(240, 240, 240, 0.46);'
	}
};

export default Theme;