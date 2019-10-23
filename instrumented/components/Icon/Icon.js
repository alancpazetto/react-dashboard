var cov_1igmaekvog = function () {
  var path = "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/Icon/Icon.js";
  var hash = "d10868b85b1da14730a621b1f1022e0a1f72f935";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/Icon/Icon.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 18
        },
        end: {
          line: 4,
          column: 36
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 7,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 3,
            column: 16
          }
        },
        loc: {
          start: {
            line: 3,
            column: 31
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "d10868b85b1da14730a621b1f1022e0a1f72f935"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
export default function (props) {
  cov_1igmaekvog.f[0]++;
  const classes = (cov_1igmaekvog.s[0]++, ['fa', props.icon]);
  cov_1igmaekvog.s[1]++;
  return <i className={classes.join(' ')}></i>;
}