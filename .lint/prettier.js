module.exports = {
    overrides: [
        {
            files: ['*.html'],
            plugins: ['prettier'],
            rules: {
                "prettier/prettier": [
                  "error", 
                  {
                    "bracketSameLine": true,
                    "bracketSpacing": true,
                    "embeddedLanguageFormatting": "off",
                    "htmlWhitespaceSensitivity": "ignore",
                    "tabWidth": 2,
                    "useTabs": false,
                    "printWidth": 80,
                    "singleAttributePerLine": true
                  },
                  { "usePrettierrc": false }
                ]
            },
        }
    ]
}
