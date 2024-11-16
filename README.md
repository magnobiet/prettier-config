# Prettier config

A Prettier shareable config

## Installation

```bash
npm install prettier @magno/prettier-config --save-dev

# or using Yarn
yarn add prettier @magno/prettier-config --dev

# or using PNPM
pnpm add prettier @magno/prettier-config --save-dev
```

## Usage

Create a `prettier.config.js` file in your root project directory and extend the config.

```js
module.exports = {
  ...require('@magno/prettier-config'),
  endOfLine: 'lf', // to overwrite the default value
};
```

Or, just add the following line to your `package.json` file:

```json
"prettier": "@magno/prettier-config"
```

### With Tailwind CSS sort classes

```js
module.exports = {
  ...require('@magno/prettier-config/tailwind'),
};
```

## Contributing

1. Fork it!
2. Create your feature branch
   - `git checkout -b feature/my-new-feature`
3. Commit your changes
   - `git commit -m "feat: add some feature"`
4. Push to the branch
   - `git push origin feature/my-new-feature`
5. Submit a pull request

## Security Vulnerabilities

If you discover a security vulnerability within this project, please send an e-mail to Magno Biét via [magno.biet@gmail.com](mailto:magno.biet@gmail.com). All security vulnerabilities will be promptly addressed.

## License

This package is licensed under the [MIT license](https://license.magno.com/mit/2023). Copyright © Magno Biét.
