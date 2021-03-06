import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '@/global/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Main from '@/Main';

ReactDOM.render(<Main />, document.getElementById('root') as HTMLElement);

import { Component } from '@/components/components';

const component = new Component();
component.hello();
