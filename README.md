<img src="https://user-images.githubusercontent.com/15277233/165488604-a2f12818-d21b-4751-af5c-5791ff9facec.png">

# ts-package-rollup

A template for building ESM & CommonJS library.

[![test](https://github.com/seanghay/ts-package-rollup/actions/workflows/ci.yml/badge.svg)](https://github.com/seanghay/ts-package-rollup/actions/workflows/ci.yml)

## Features

- ✅ [Rollup](https://rollupjs.org/)
- ✅ TypeScript
- ✅ Type declaration `.d.ts`
- ✅ [esbuild](https://esbuild.github.io/) 
- ✅ [Vitest](https://vitest.dev/)
- ✅ Use GitHub Actions for publishing to npm
- ✅ Output files are minified with source maps
- ✅ Support for CommonJS & ESM
- ✅ JSON Module
- ✅ Unit tests with GitHub Actions 
- ✅ Conventional Releases 

## Test

Development

```sh
pnpm test
```

CI

```sh
pnpm test:ci
```

## Release

```sh
pnpm release
```

> Note: `NPM_TOKEN` should be added into your repo secret to be able to publish to npm


## Using npm as a package manager

This repo is using `pnpm` as a package manager, however if you need to use `npm` you can remove `pnpm-lock.yaml` and run `npm install`


---

This package is published to https://www.npmjs.com/package/ts-package-rollup
