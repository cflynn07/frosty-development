module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    'styled-components',
    '@babel/plugin-proposal-class-properties'
  ],
  env: {
    production: {
      only: ['app'],
      plugins: [
      ]
    },
    test: {
      plugins: [
      ]
    }
  }
}
