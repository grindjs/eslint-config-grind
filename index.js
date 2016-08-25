module.exports = {
	extends: 'eslint:recommended',
	plugins: [
		'babel',
		'grind'
	],
	env: {
		es6: true,
		'grind/grind': true
	},
	rules: {
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		quotes: [
			'error',
			'single', {
				'avoidEscape': true
			}
		],
		semi: [
			'error',
			'never'
		],
		'no-console': [
			'off'
		],
		curly: [
			'error'
		],
		eqeqeq: [
			'warn'
		],
		'no-unused-vars': [
			'warn'
		],
		'no-undef': [
			'error'
		],
		'dot-notation': [
			'error'
		],
		'eol-last': [
			'error'
		],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 2,
				maxBOF: 0,
				maxEOF: 1
			}
		],
		'no-trailing-spaces': [
			'error'
		],
		'space-in-parens': [
			'error',
			'never'
		],
		'no-redeclare': [
			'error'
		],
		'no-useless-concat': [
			'warn'
		],
		'prefer-template': [
			'warn'
		],
		'no-useless-escape': [
			'error'
		],
		'no-shadow-restricted-names': [
			'error'
		],
		'no-undef-init': [
			'error'
		],
		'no-path-concat': [
			'error'
		],
		'no-sync': [
			'warn'
		],
		'array-bracket-spacing': [
			'error',
			'always'
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'object-property-newline': [
			'error'
		],
		'computed-property-spacing': [
			'error',
			'never'
		],
		'block-spacing': [
			'error',
			'always'
		],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true
			}
		],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'spaced-comment': [
			'error',
			'always',
			{
				exceptions: [ '*' ]
			}
		],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict'
			}
		],
		'max-depth': [
			'warn',
			{
				max: 4
			}
		],
		'no-lonely-if': [
			'warn'
		],
		'no-mixed-spaces-and-tabs': [
			'error'
		],
		'func-call-spacing': [
			'error',
			'never'
		],
		'no-unneeded-ternary': [
			'warn'
		],
		'no-whitespace-before-property': [
			'error'
		],
		'no-var': [
			'error'
		],
		'one-var': [
			'error',
			'never'
		],
		'operator-assignment': [
			'warn',
			'always'
		],
		'quote-props': [
			'error',
			'as-needed'
		],
		'space-before-function-paren': [
			'error',
			'never'
		],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'babel/arrow-parens': [
			'warn',
			'as-needed'
		],
		'constructor-super': [
			'error'
		],
		'no-class-assign': [
			'error'
		],
		'no-useless-constructor': [
			'error'
		],
		'prefer-arrow-callback': [
			'error'
		],
		'prefer-const': [
			'error'
		],
		'prefer-rest-params': [
			'error'
		],
		'prefer-spread': [
			'error'
		]
	}
};
