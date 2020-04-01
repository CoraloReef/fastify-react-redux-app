import React from 'react';
import i18next from 'i18next';

import ThemeSwitcher from './ThemeSwitcher';
import Counter from './Counter';

const App = () => (
  <>
    <h2>{i18next.t('helloText')}</h2>
    <hr />
    <ThemeSwitcher />
    <hr />
    <Counter />
  </>
);

export default App;
