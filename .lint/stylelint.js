module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-sass-guidelines",
    "stylelint-config-prettier"
  ],
  plugins: [
    "stylelint-scss",
    "stylelint-order"
  ],
  rules: {
      "order/order": [
        "custom-properties",
        "dollar-variables",
        {
          "type": "at-rule",
          "name": "extend"
        },
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": false
        },
        {
          "type": "at-rule",
          "name": "mixin",
          "hasBlock": false
        },
        "declarations",
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": true
        },
        {
          "type": "at-rule",
          "name": "mixin",
          "hasBlock": true
        },
        "rules"
      ],
      "max-nesting-depth": 4,
      "color-named": "always-where-possible"
  }
}
