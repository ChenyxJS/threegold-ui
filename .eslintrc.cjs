module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    //  https://eslint.vuejs.org/user-guide/#bundle-configurations
    extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:eslint-comments/recommended",
        "plugin:jsonc/recommended-with-jsonc",
        "plugin:markdown/recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    settings: {
        "import/resolver": {
            node: { extensions: [".js", ".mjs", ".ts", ".d.ts", ".tsx"] },
        },
    },
    overrides: [
        {
            files: ["*.json", "*.json5", "*.jsonc"],
            parser: "jsonc-eslint-parser",
        },
        {
            files: ["*.ts", "*.vue"],
            rules: {
                "no-undef": "off",
            },
        },
        {
            files: ["*.d.ts"],
            rules: {
                "import/no-duplicates": "off",
            },
        },
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
            },
        },
        {
            files: ["*.vue"],
            parser: "vue-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".vue"],
                ecmaVersion: "latest",
                ecmaFeatures: {
                    jsx: true,
                },
            },
            rules: {
                "no-undef": "off",
            },
        },

        {
            files: ["**/*.md/*.js", "**/*.md/*.ts"],
            rules: {
                "no-console": "off",
                "import/no-unresolved": "off",
                "@typescript-eslint/no-unused-vars": "off",
            },
        },
    ],
    plugins: ["prettier", "@typescript-eslint"],
    rules: {
        // js/ts
        // 使用驼峰命名法，但是允许属性名使用下划线
        camelcase: ["error", { properties: "never" }],
        // 禁用 console 语句，但是允许 console.error
        "no-console": ["warn", { allow: ["error"] }],
        // 禁用 debugger 语句
        "no-debugger": "warn",
        // 禁止在循环中使用常量作为条件
        "no-constant-condition": ["error", { checkLoops: false }],
        // 禁止使用特定的语法结构，如 LabeledStatement 和 WithStatement
        "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
        // 禁用 return 语句中的 await 关键字
        "no-return-await": "error",
        // 要求使用 let 或 const 而不是 var
        "no-var": "error",
        // 禁止空的语句，但是允许空的 catch 语句
        "no-empty": ["error", { allowEmptyCatch: true }],
        // 建议使用 const 而不是 let，特别是在解构赋值的情况下
        "prefer-const": [
            "warn",
            { destructuring: "all", ignoreReadBeforeAssign: true },
        ],
        // 建议使用箭头函数作为回调函数，并禁用 named function
        "prefer-arrow-callback": [
            "error",
            { allowNamedFunctions: false, allowUnboundThis: true },
        ],
        // 要求使用对象简写语法，并忽略构造函数和避免引号
        "object-shorthand": [
            "error",
            "always",
            { ignoreConstructors: false, avoidQuotes: true },
        ],
        // 建议使用剩余参数语法
        "prefer-rest-params": "error",
        // 建议使用扩展运算符
        "prefer-spread": "error",
        // 建议使用模板字符串
        "prefer-template": "error",
        // 禁用重复声明变量
        "no-redeclare": "off",
        // 禁用重复声明类型
        "@typescript-eslint/no-redeclare": "error",

        // best-practice
        // 要求使用 return 语句来返回数组回调函数
        "array-callback-return": "error",
        // 要求变量声明在块级作用域内
        "block-scoped-var": "error",
        // 禁用 alert 语句
        "no-alert": "warn",
        // 禁用 case 语句中的变量声明
        "no-case-declarations": "error",
        // 禁用多行字符串
        "no-multi-str": "error",
        // 禁用 with 语句
        "no-with": "error",
        // 禁用 void 关键字
        "no-void": "error",
        // 要求导入的模块按照字母顺序排序
        "sort-imports": [
            "warn",
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
                allowSeparatedGroups: false,
            },
        ],

        // stylistic-issues
        "prefer-exponentiation-operator": "error",

        // ts
        // 禁用显式模块边界类型
        "@typescript-eslint/explicit-module-boundary-types": "off",
        // 禁用 any 类型
        "@typescript-eslint/no-explicit-any": "off",
        // 禁用非空断言
        "@typescript-eslint/no-non-null-assertion": "off",
        // 禁用非空断言链
        "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
        // 要求使用一致的类型导入
        "@typescript-eslint/consistent-type-imports": [
            "error",
            { disallowTypeAnnotations: false },
        ],
        // 禁用 TypeScript 注释
        "@typescript-eslint/ban-ts-comment": ["off", { "ts-ignore": false }],

        // vue
        "vue/no-v-html": "off",
        "vue/require-default-prop": "off",
        "vue/require-explicit-emits": "off",
        "vue/multi-word-component-names": "off",
        "vue/prefer-import-from-vue": "off",
        "vue/no-v-text-v-html-on-component": "off",
        "vue/html-self-closing": [
            "error",
            {
                html: {
                    void: "always",
                    normal: "always",
                    component: "always",
                },
                svg: "always",
                math: "always",
            },
        ],

        // prettier
        "prettier/prettier": "error",

        // import
        // 要求导入语句放在其他语句之前
        "import/first": "error",
        // 要求导入语句不能有重复
        "import/no-duplicates": "error",
        // 要求导入语句按照字母顺序排序
        "import/order": [
            "error",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "object",
                    "type",
                ],
                pathGroups: [
                    {
                        pattern: "vue",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "@vue/**",
                        group: "external",
                        position: "before",
                    },
                ],
                pathGroupsExcludedImportTypes: ["type"],
            },
        ],
        // 禁用未解析的导入语句
        "import/no-unresolved": "off",
        // 禁用命名空间导入
        "import/namespace": "off",
        // 禁用默认导入
        "import/default": "off",
        // 禁用 named as default 导入
        "import/no-named-as-default": "off",
        // 禁用 named 导入
        "import/no-named-as-default-member": "off",
        // 禁用 named 导入
        "import/named": "off",

        // eslint-plugin-eslint-comments
        "eslint-comments/disable-enable-pair": [
            "error",
            { allowWholeFile: true },
        ],
    },
};
