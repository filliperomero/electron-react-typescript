import React from 'react';
import { render } from 'react-dom';

import Screen from './screen';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const App: React.FC = () => (
  <>
    <Screen />
  </>
);

render(<App />, document.getElementById('root'));
