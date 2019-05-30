module.exports = {
        extends: "eslint:recommended",
        env: {
            node: true,
            es6: true
        },
        parserOptions: {
            "ecmaVersion": 2017
        },
        rules: {
            indent: ['error', 4],
            semi: [2, 'always'],
            quotes: [2, 'single']
        }
}