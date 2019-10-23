var cov_1jtueiw7e0 = function () {
  var path = "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/Forms/Input/Input.js";
  var hash = "f2df88859c458dd634e52d588db5e51c5148d9e3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/Forms/Input/Input.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 17
        },
        end: {
          line: 7,
          column: 102
        }
      },
      "1": {
        start: {
          line: 8,
          column: 17
        },
        end: {
          line: 8,
          column: 102
        }
      },
      "2": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 15,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        },
        loc: {
          start: {
            line: 6,
            column: 12
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 6
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 17
          },
          end: {
            line: 7,
            column: 102
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 7,
            column: 38
          },
          end: {
            line: 7,
            column: 94
          }
        }, {
          start: {
            line: 7,
            column: 98
          },
          end: {
            line: 7,
            column: 102
          }
        }],
        line: 7
      },
      "1": {
        loc: {
          start: {
            line: 8,
            column: 17
          },
          end: {
            line: 8,
            column: 102
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 8,
            column: 38
          },
          end: {
            line: 8,
            column: 94
          }
        }, {
          start: {
            line: 8,
            column: 98
          },
          end: {
            line: 8,
            column: 102
          }
        }],
        line: 8
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "f2df88859c458dd634e52d588db5e51c5148d9e3"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
  render() {
    cov_1jtueiw7e0.f[0]++;
    let prefix = (cov_1jtueiw7e0.s[0]++, this.props.prefix ? (cov_1jtueiw7e0.b[0][0]++, <div className="Input__prefix">{this.props.prefix}</div>) : (cov_1jtueiw7e0.b[0][1]++, null));
    let suffix = (cov_1jtueiw7e0.s[1]++, this.props.suffix ? (cov_1jtueiw7e0.b[1][0]++, <div className="Input__suffix">{this.props.suffix}</div>) : (cov_1jtueiw7e0.b[1][1]++, null));
    cov_1jtueiw7e0.s[2]++;
    return <div className="Input">
        {prefix}
        <input type="text" placeholder={this.props.placeholder} />
        {suffix}
      </div>;
  }

}

export default Input;