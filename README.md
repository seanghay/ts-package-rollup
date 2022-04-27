# ts-package-rollup

A template for building ESM & CommonJS library.

[![test](https://github.com/seanghay/ts-package-rollup/actions/workflows/ci.yml/badge.svg)](https://github.com/seanghay/ts-package-rollup/actions/workflows/ci.yml)

## Features

- [x] TypeScript
- [x] Generating `.d.ts`
- [x] esbuild 
- [x] Vitest
- [x] Use GitHub Actions for publishing to npm
- [x] Output files are minified
- [x] Support for CommonJS & ESM
- [x] JSON Module

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


## Using NPM

This repo is using `pnpm` as a package manager, however if you need to use `npm` you can remove `pnpm-lock.yaml` and run `npm install`

