const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  globals: {
    AMap: false,
    echarts: false,
    _: false,
    logger: 'readonly',

    // Ref sugar (take 2)
    $: 'readonly',
    $$: 'readonly',
    $ref: 'readonly',
    $shallowRef: 'readonly',
    $computed: 'readonly',

    // index.d.ts
    // global.d.ts
    Fn: 'readonly',
    PromiseFn: 'readonly',
    RefType: 'readonly',
    LabelValueOptions: 'readonly',
    EmitType: 'readonly',
    TargetContext: 'readonly',
    ComponentElRef: 'readonly',
    ComponentRef: 'readonly',
    ElRef: 'readonly',
    global: 'readonly',
    ForDataType: 'readonly',
    ComponentRoutes: 'readonly',

    // script setup
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    useSlots: 'readonly',
    useRouter: 'readonly',
    useAttrs: 'readonly',
    useRoute: 'readonly',
    useTemplateRefsList: 'readonly',

    // VueUse
    useDebounceFn: 'readonly',
    useResizeObserver: 'readonly',
    useClipboard: 'readonly',
    useVModel: 'readonly',
    useFetch: 'readonly',

    // antd
    AInput: 'readonly'
  },
  rules: {
    /**
     * 代码错误
     */
    'no-console': 1,
    'no-debugger': 1,

    /**
     * 最佳实践
     */
    eqeqeq: 2, // 强制使用 === 和 !==
    'default-case': 1, // 要求 switch 语句中有 default 分支
    'no-else-return': 0, // 禁止 if 语句中 return 语句之后有 else 块
    'no-empty-function': 1, // 禁止出现空函数
    'no-multi-spaces': 1, // 禁止使用多个空格
    radix: 0, // 强制在parseInt()使用基数参数

    /**
     * 风格指南
     */
    'space-before-function-paren': 0,
    'comma-dangle': 2, // 禁止末尾逗号
    'eol-last': 0, // 要求文件末尾存在空行
    // 对象冒号前禁止空格，冒号后必须空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // 关键字（if、else等）前后必须有空格
    'keyword-spacing': ['error', { before: true, after: true }],
    // 禁止出现多行空行
    'no-multiple-empty-lines': ['error', { max: 1 }],
    semi: ['error', 'never'], // 禁止末尾分号
    'space-infix-ops': 2, // 操作符周围必须有空格
    'spaced-comment': ['error', 'always'], // 注释后面必须跟随至少一个空白
    'object-curly-spacing': ['warn', 'always'],
    'no-unused-expressions': 0,

    /**
     * ECMAScript6
     */
    'arrow-spacing': ['error', { before: true, after: true }], // 强制箭头函数的箭头前后使用空格
    'no-var': 2, // 禁止使用 var 声明变量
    'object-shorthand': 2, // 要求使用对象方法名和属性名简写
    'prefer-arrow-callback': 2, // 要求回调函数使用箭头函数
    'prefer-const': 2, // 使用 const 声明那些声明后不再被修改的变量
    'prefer-rest-params': 2, // 要求使用剩余参数而不是 arguments
    /**
     * typescript
     * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
     */
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-var-requires': 'off',
    /**
     * vue
     */
    'vue/no-v-html': 0,
    'vue/valid-v-model': 0,
    'vue/no-dupe-keys': 0,
    'vue/multi-word-component-names': 0,
    'vue/component-definition-name-casing': 0,
    'vue/require-default-prop': 0,
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          'emits',
          ['props', 'propsData'],
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    'template-curly-spacing': 'off',
    'import/no-unresolved': 0,
    'import/newline-after-import': 0,
    'import/imports-first': 0,
    'import/extensions': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-webpack-loader-syntax': 0,
    'no-mixed-operators': [
      0,
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: true
      }
    ],
    'no-empty': [1, { allowEmptyCatch: true }],
    'no-trailing-spaces': [2, { skipBlankLines: true }],
    'no-new': [1],
    'no-multi-str': [0],
    'no-restricted-syntax': [1, 'DebuggerStatement'],
    'no-plusplus': [1, { allowForLoopAfterthoughts: true }],
    'no-param-reassign': [0, { props: true }],
    'no-shadow': [0],
    'prefer-template': [0],
    'prefer-spread': [1],
    'space-before-blocks': [1],
    'no-unneeded-ternary': [1],
    'newline-per-chained-call': [0, { ignoreChainWithDepth: 3 }],
    'operator-linebreak': [0],
    'prefer-destructuring': [0],
    'object-curly-newline': [0],
    complexity: [0, 15]
  }
})
