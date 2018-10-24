module.exports = {
	extends: 'eslint:recommended',
	plugins: [
		'babel',
		'grind'
	],
	env: {
		'grind/grind': true
	},
	parserOptions: {
		ecmaVersion: 2018
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
				avoidEscape: true
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
		'space-infix-ops': [
			'error'
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
		'computed-property-spacing': [
			'error',
			'never'
		],
		'block-spacing': [
			'error',
			'always'
		],
		'space-before-blocks': [
			'error',
			'always'
		],
		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true,
				overrides: {
					catch: { after: false },
					for: { after: false },
					if: { after: false },
					import: { before: false },
					switch: { after: false },
					while: { after: false },
					with: { after: false }
				}
			}
		],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true
			}
		],
		'padded-blocks': [
			'error',
			{
				blocks: 'never',
				classes: 'always',
				switches: 'never'
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
		'max-len': [
			'warn',
			{
				code: 120,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreRegExpLiterals: true,
				ignoreTemplateLiterals: true
			}
		],
		'max-lines': [
			'warn'
		],
		'no-lonely-if': [
			'warn'
		],
		'no-mixed-spaces-and-tabs': [
			'error'
		],
		'no-mixed-operators': [
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
			{
				anonymous: 'never',
				asyncArrow: 'always',
				named: 'never'
			}
		],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'arrow-parens': [
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
}
