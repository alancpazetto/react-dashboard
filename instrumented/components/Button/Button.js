var cov_1wts15zihc = function () {
  var path = "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/Button/Button.js";
  var hash = "0662611689ac4809976392ccf7e993752d27ed7d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/Button/Button.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 10
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "1": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 28
        }
      },
      "2": {
        start: {
          line: 17,
          column: 18
        },
        end: {
          line: 17,
          column: 34
        }
      },
      "3": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "4": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 43
        }
      },
      "5": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 23,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 13
          },
          end: {
            line: 7,
            column: 14
          }
        },
        loc: {
          start: {
            line: 7,
            column: 19
          },
          end: {
            line: 7,
            column: 22
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 15
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        loc: {
          start: {
            line: 16,
            column: 11
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 16
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 24
          }
        }, {
          start: {
            line: 18,
            column: 28
          },
          end: {
            line: 18,
            column: 57
          }
        }],
        line: 18
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "0662611689ac4809976392ccf7e993752d27ed7d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  props = (cov_1wts15zihc.s[0]++, {
    onClick: () => {
      cov_1wts15zihc.f[0]++;
    },
    color: 'normal',
    className: ''
  });

  onClick(evt) {
    cov_1wts15zihc.f[1]++;
    cov_1wts15zihc.s[1]++;
    this.props.onClick(evt);
  }

  render() {
    cov_1wts15zihc.f[2]++;
    let classes = (cov_1wts15zihc.s[2]++, ['CustomButton']);
    cov_1wts15zihc.s[3]++;

    if ((cov_1wts15zihc.b[1][0]++, this.props.color) && (cov_1wts15zihc.b[1][1]++, this.props.color === 'danger')) {
      cov_1wts15zihc.b[0][0]++;
      cov_1wts15zihc.s[4]++;
      classes.push('CustomButton--danger');
    } else {
      cov_1wts15zihc.b[0][1]++;
    }

    cov_1wts15zihc.s[5]++;
    return <button className={classes.join(' ')} onClick={this.onClick.bind(this)}>{this.props.children}</button>;
  }

}

export default Button;