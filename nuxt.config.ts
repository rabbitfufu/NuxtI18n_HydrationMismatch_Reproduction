export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	future: {
		compatibilityVersion: 4
	},
	i18n: {
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root'
		},
		langDir: 'locales',
		lazy: true,
		locales: [
			{code: 'en', language: 'en-CA', name: 'en-ca', file: 'en.json'},
			{code: 'fr', language: 'fr', name: 'fr', file: 'fr.json'},
		],
		strategy: 'prefix_except_default'
	},
	modules: [
		'@nuxtjs/i18n'
	],
	ssr: true
})
