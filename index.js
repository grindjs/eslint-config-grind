module.exports = {
	extends: 'eslint:recommended',
	rules: {
		indent: [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		quotes: [
			'error',
			'single'
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
			'warn'
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
				'maxBOF': 0,
				'maxEOF': 1
			}
		],
		'no-trailing-spaces': [
			'error'
		],
		'no-redeclare': [
			'error'
		],
		'no-useless-concat': [
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
		'block-spacing': [
			'error',
			'always'
		],
		'brace-style': [
			'error',
			'1tbs',
			{
				'allowSingleLine': true
			}
		],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'key-spacing': [
			'error',
			{
				'beforeColon': false,
				'afterColon': true,
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
		'no-spaced-func': [
			'error'
		],
		'no-unneeded-ternary': [
			'warn'
		],
		'no-whitespace-before-property': [
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
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'never'
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
