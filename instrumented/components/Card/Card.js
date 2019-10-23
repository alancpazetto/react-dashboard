var cov_2522q8w8tc = function () {
  var path = "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/Card/Card.js";
  var hash = "edd4f688b5d3d789494c88fbee5768568fb243bf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/Card/Card.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 12,
          column: 8
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
            line: 5,
            column: 2
          },
          end: {
            line: 12,
            column: 8
          }
        },
        line: 5
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
    hash: "edd4f688b5d3d789494c88fbee5768568fb243bf"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import './Card.scss';
export default (props => {
  cov_2522q8w8tc.f[0]++;
  cov_2522q8w8tc.s[0]++;
  return <div className="Card">

    <div className="Card__content">
      <div className="Card__content__limit-usage-label">Limit utilizado</div>
      <div className="Card__content__limit-usage">R$ {props.limitUsage}</div>
      <div className="Card__content__name">{props.name}</div>
    </div>
  </div>;
});