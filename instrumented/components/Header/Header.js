var cov_6chigco7q = function () {
  var path = "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/Header/Header.js";
  var hash = "262d8c6cc2ae4da0fd972e688b2ea8e3cf4c5966";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/Header/Header.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 27
        },
        end: {
          line: 11,
          column: 48
        }
      },
      "1": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 14,
          column: 5
        }
      },
      "2": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 55
        }
      },
      "3": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 33,
          column: 6
        }
      },
      "4": {
        start: {
          line: 19,
          column: 30
        },
        end: {
          line: 19,
          column: 59
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        loc: {
          start: {
            line: 9,
            column: 12
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 24
          },
          end: {
            line: 19,
            column: 25
          }
        },
        loc: {
          start: {
            line: 19,
            column: 30
          },
          end: {
            line: 19,
            column: 59
          }
        },
        line: 19
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        }, {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        }],
        line: 12
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "262d8c6cc2ae4da0fd972e688b2ea8e3cf4c5966"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React, { Component } from 'react';
import './Header.scss';
import Input from '../Forms/Input/Input';
import Icon from '../Icon/Icon';
import NotificationTray from '../NotificationTray/NotificationTray';

class Header extends Component {
  render() {
    cov_6chigco7q.f[0]++;
    let hamburgerClasses = (cov_6chigco7q.s[0]++, ['Header__hamburger']);
    cov_6chigco7q.s[1]++;

    if (this.props.isMenuOpen) {
      cov_6chigco7q.b[0][0]++;
      cov_6chigco7q.s[2]++;
      hamburgerClasses.push('Header__hamburger--open');
    } else {
      cov_6chigco7q.b[0][1]++;
    }

    cov_6chigco7q.s[3]++;
    return <div className="Header">
        <div className={hamburgerClasses.join(' ')}>
          <svg onClick={() => {
          cov_6chigco7q.f[1]++;
          cov_6chigco7q.s[4]++;
          return this.props.onClickHamburger();
        }} version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 15" width="36" height="15">
            <path d="M0 2.75L20.67 2.75L20.67 4.75L0 4.75L0 2.75Z" id="first-line"></path>
            <path d="M0 10.25L35.7 10.25L35.7 12.25L0 12.25L0 10.25Z" id="second-line"></path>
          </svg>
        </div>
        <div className="Header__search">
          <Input prefix={<Icon icon="fa-search"></Icon>} placeholder="What you looking for?"></Input>
        </div>
        <div className="Header__notifications">
          <NotificationTray></NotificationTray>
        </div>
      </div>;
  }

}

export default Header;