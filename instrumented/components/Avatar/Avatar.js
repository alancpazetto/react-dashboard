var cov_1my5dgn80s = function () {
  var path = "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/Avatar/Avatar.js";
  var hash = "50a31f505b5459f92fb55ff4abef497be74bc2aa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/Avatar/Avatar.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 26
        },
        end: {
          line: 10,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 15
          },
          end: {
            line: 4,
            column: 16
          }
        },
        loc: {
          start: {
            line: 4,
            column: 26
          },
          end: {
            line: 10,
            column: 6
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "50a31f505b5459f92fb55ff4abef497be74bc2aa"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import './Avatar.scss';
export default (props => {
  cov_1my5dgn80s.f[0]++;
  cov_1my5dgn80s.s[0]++;
  return <div className="Avatar">
  <div className="Avatar__image" style={{
      backgroundImage: `url(${props.avatar})`
    }}></div>
  <p className="Avatar__name">{props.name}</p>
  <p className="Avatar__nickname">{props.nickname}</p>
  </div>;
});