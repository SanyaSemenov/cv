module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                project: ['tsconfig.json', 'tsconfig.spec.json']
            },
            rules: {
                'comma-dangle': ['error', {
                    arrays: 'always-multiline',
                    objects: 'always-multiline',
                    imports: 'always-multiline',
                    exports: 'always-multiline',
                    functions: 'always-multiline'
                }],
                'semi': ['error', 'never'],
            },
        }
    ]
}
