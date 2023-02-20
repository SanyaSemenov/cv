module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                project: ['tsconfig.json', 'tsconfig.spec.json']
            },
            rules: {
                'curly': 'error',
                'object-curly-spacing': [2, 'always'],
                'no-multi-spaces': ['error'],
                'no-trailing-spaces': 'error',
                'no-empty-function': 'warn',
                'no-useless-constructor': 'warn',
                'padded-blocks': ['error'],
                'padding-line-between-statements': [
                    "error",
                    { blankLine: "never", prev: "*", next: "return" }
                ],
                /* вынести */
                // 'space-in-brackets': ['error', 'always'],
                'object-curly-newline': ["error", { "multiline": true }],
                'max-len': ["error", { "code": 120 }],
            },
        }
    ]
}
