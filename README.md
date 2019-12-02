# REACT-NATIVE - TESTING

José N. R.

## Descripción

Proyecto desarrollado como ejemplo para el testing en React Native.

## Herramientas

- React-native
- Jest
- Enzyme
- Enzyme-adapter-react-16
- react-native-testing-library

## ¿Cómno testear?

1. npm i -D enzyme enzyme-adapter-react-16 react-native-testing-library

2. npm i react-dom

3. Crear archivo jestSetup.js en root con lo siguiente:

```
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter(),
});
```

4. En package.json dejar jest como:

```
                ...
  "jest": {
    "preset": "react-native",
    "setupFilesAfterEnv": [
      "<rootDir>/jestSetup.js"
    ]
  }
```

3. Desarrollar tests

4. npm run test

## Fuentes

Tests de ejemplo: https://github.com/tuantvk/WtfReactNativeTesting
