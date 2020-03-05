import React from 'react';
import LoginContainer from './src/container/login';

import { investigate } from 'react-native-bundle-splitter/dist/utils';

const investigateInfo = investigate();

console.log(`\nBundle Info:\n-----------\nloaded: ${investigateInfo.loaded.length}\nwaiting: ${investigateInfo.waiting.length}\n-----------`);

const App = () => {
  return (
    <LoginContainer />
  );
};

export default App;
