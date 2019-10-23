var cov_2o06tkzitk = function () {
  var path = "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/index.js";
  var hash = "335c207c8bc074f5904e209c1f5e6e2b9fad9c41";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 11,
          column: 46
        }
      },
      "1": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 27
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "335c207c8bc074f5904e209c1f5e6e2b9fad9c41"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/store';
import { Provider } from 'react-redux';
cov_2o06tkzitk.s[0]++;
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

cov_2o06tkzitk.s[1]++;
serviceWorker.unregister();