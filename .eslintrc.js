module.exports = {
  root: true,

  // unopinionated
  extends: ['@nuxt/eslint-config', 'plugin:nuxt/recommended'],

  // opinionated
  // extends: ['@nuxtjs/eslint-config'],

  rules: {
    indent: ['error', 2],

    quotes: ['error', 'single'],
    semi: ['error', 'always'],

    'vue/multi-word-component-names': 'off',
    'vue/object-property-newline': 'error',

    // style of arrays
    'array-element-newline': ['error', { minItems: 3 }],
    'array-bracket-newline': [
      'error', {
        minItems: 3,
        multiline: true,
      },
    ],

    // formats vue/html correctly
    'vue/max-attributes-per-line': [
      'error', {
        singleline: 2,
        multiline: 1,
      },
    ],

    'comma-dangle': [
      'error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],

    'arrow-parens': [
      'error',
      'as-needed',
      { requireForBlockBody: true },
    ],

    'space-before-function-paren': ['error', 'never'],

    // style of objects
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],

    'brace-style': ['error', 'stroustrup'],
  },
};
