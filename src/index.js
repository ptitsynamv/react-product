import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Button } from './components/app/app';
import FormTest from './components/form-test/FormTest';
import FormTest2 from './components/form-text-2/FormTest2';
import styled from 'styled-components';
import Slider from './components/slider/Slider';
import Calculator from './components/calculator/Calculator';
import FilteredPosts from './components/filtered-posts/FilteredPosts';
import FormMemoTest from './components/memo-text/FormMemoTest';
import FormContextTest from './components/form-context-test/FormContextTest';
import SliderReducerTest from './components/slider-reducer-test/SliderReducerTest';
import HigherOrderComponents from './components/higher-order-components/HigherOrderComponents';
import ModalTestWrapper from './components/modal-test/ModalTest';
import FormikFormTestWrapper from './components/formik-form-test/FormikFormTest';
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
    <FormikFormTestWrapper />
  </React.StrictMode>
);
