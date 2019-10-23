var cov_2pcm1dnvvq = function () {
  var path = "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/store/reducers.js";
  var hash = "3b19341214ee89c5d981975c382f5d61b72a2f5e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/store/reducers.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 24
        },
        end: {
          line: 6,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "3b19341214ee89c5d981975c382f5d61b72a2f5e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import { clickReducer } from './clickReducer';
import { combineReducers } from 'redux';
export const Reducers = (cov_2pcm1dnvvq.s[0]++, combineReducers({
  clickState: clickReducer
}));