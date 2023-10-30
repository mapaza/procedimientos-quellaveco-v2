module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{jpg,js,wasm,png,mp3,hdr,css,html,json,ico,svg,md,bin,xz,gltf,mb,xml}'
	],
	swDest: 'sw.js',
	maximumFileSizeToCacheInBytes: 500000000, 
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	
};