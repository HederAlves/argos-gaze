# Drive ADS

<div align="center">

![logo-argos-gaze](https://github.com/HederAlves/argos-gaze/assets/83372052/69e7b4a7-01ad-4632-9d95-2607b71417c3)

![Badge](https://img.shields.io/badge/Developer-Grupo1_Drive_ADS-%237159c1?style=for-the-badge&logo=ghost)
![Badge under development](http://img.shields.io/static/v1?label=STATUS&message=under%20development&color=GREEN&style=for-the-badge)

## Technologies

![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Badge](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
![Badge](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Badge](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Badge](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)

</div>

## About

Argos Gaze is a cutting-edge software solution designed to analyze data collected through cameras on billboards to study the effectiveness of advertisements. By leveraging advanced computer vision and machine learning techniques, Argos Gauze provides insights into whether people are looking at the advertisements, thereby offering valuable data on ad engagement and effectiveness.

## Project setup

<p> To install the necessary packages for the app use </p>

```
yarn install
```

## Commands

<p> To run the application use </p>

```bash
yarn dev
```

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
