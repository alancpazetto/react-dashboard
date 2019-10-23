var cov_1fq5le5k6l = function () {
  var path = "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/NotificationTray/NotificationTray.js";
  var hash = "b5d2e5798a4c22933d0bc0df3aa3c9d7c59294ed";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/NotificationTray/NotificationTray.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 27
        },
        end: {
          line: 9,
          column: 48
        }
      },
      "1": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 12,
          column: 5
        }
      },
      "2": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 55
        }
      },
      "3": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 18,
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
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 12
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 7
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        }, {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "b5d2e5798a4c22933d0bc0df3aa3c9d7c59294ed"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React, { Component } from 'react';
import './NotificationTray.scss';
import Icon from '../Icon/Icon';

class NotificationTray extends Component {
  render() {
    cov_1fq5le5k6l.f[0]++;
    let hamburgerClasses = (cov_1fq5le5k6l.s[0]++, ['Header__hamburger']);
    cov_1fq5le5k6l.s[1]++;

    if (this.props.isMenuOpen) {
      cov_1fq5le5k6l.b[0][0]++;
      cov_1fq5le5k6l.s[2]++;
      hamburgerClasses.push('Header__hamburger--open');
    } else {
      cov_1fq5le5k6l.b[0][1]++;
    }

    cov_1fq5le5k6l.s[3]++;
    return <div className="NotificationTray">
        <Icon icon="fa-bell"></Icon>
      </div>;
  }

}

export default NotificationTray;