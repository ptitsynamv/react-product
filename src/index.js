import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Button } from './components/app/app';
import FormTest from './components/form-test/FormTest';
import styled from 'styled-components';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 350px;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BigButton>my-text</BigButton>
    <BigButton as="a">my-text-a</BigButton>

    <App /> */}
    <FormTest />
  </React.StrictMode>
);
