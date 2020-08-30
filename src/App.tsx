import React from 'react';
import { RecoilRoot } from 'recoil';

import Routes from './Routes';

const App: React.FC = () => (
  <RecoilRoot>
    <Routes />
  </RecoilRoot>
);

export default App;
