var cov_15rgcz52bs = function () {
  var path = "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/App.js";
  var hash = "bee9db1985252e075326861240045ea5114ece8d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/App.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 10
        },
        end: {
          line: 12,
          column: 3
        }
      },
      "1": {
        start: {
          line: 16,
          column: 21
        },
        end: {
          line: 16,
          column: 28
        }
      },
      "2": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "3": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 43
        }
      },
      "4": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 93,
          column: 10
        }
      },
      "5": {
        start: {
          line: 75,
          column: 36
        },
        end: {
          line: 75,
          column: 95
        }
      },
      "6": {
        start: {
          line: 87,
          column: 14
        },
        end: {
          line: 87,
          column: 53
        }
      },
      "7": {
        start: {
          line: 97,
          column: 24
        },
        end: {
          line: 99,
          column: 2
        }
      },
      "8": {
        start: {
          line: 97,
          column: 34
        },
        end: {
          line: 99,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 11
          },
          end: {
            line: 94,
            column: 3
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 75,
            column: 30
          },
          end: {
            line: 75,
            column: 31
          }
        },
        loc: {
          start: {
            line: 75,
            column: 36
          },
          end: {
            line: 75,
            column: 95
          }
        },
        line: 75
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 86,
            column: 44
          },
          end: {
            line: 86,
            column: 45
          }
        },
        loc: {
          start: {
            line: 86,
            column: 52
          },
          end: {
            line: 88,
            column: 13
          }
        },
        line: 86
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 97,
            column: 24
          },
          end: {
            line: 97,
            column: 25
          }
        },
        loc: {
          start: {
            line: 97,
            column: 34
          },
          end: {
            line: 99,
            column: 1
          }
        },
        line: 97
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        }],
        line: 17
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "bee9db1985252e075326861240045ea5114ece8d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Avatar from './components/Avatar/Avatar';
import Header from './components/Header/Header';
import Queue from './components/Queue/Queue';

class App extends (React.Component) {
  state = (cov_15rgcz52bs.s[0]++, {
    isSidebarOpen: false
  });

  render() {
    cov_15rgcz52bs.f[0]++;
    let appClasses = (cov_15rgcz52bs.s[1]++, ['App']);
    cov_15rgcz52bs.s[2]++;

    if (this.state.isSidebarOpen) {
      cov_15rgcz52bs.b[0][0]++;
      cov_15rgcz52bs.s[3]++;
      appClasses.push('App--sidebar-open');
    } else {
      cov_15rgcz52bs.b[0][1]++;
    }

    cov_15rgcz52bs.s[4]++;
    return <div className={appClasses.join(' ')}>
    
      <div className="App__sidebar">

        <div className="App__sidebar__header">
          <Avatar avatar="https://randomuser.me/api/portraits/men/78.jpg" name="Gerald Wolfe" nickname="@Wolfe"></Avatar>
        </div>

        <div className="App__sidebar__menu">
          <nav>
            <ul>
              <li>
                <a href="#foo">
                  <i className="fa fa-user"></i>
                  <span className="hidden">Users</span>
                </a>
              </li>
              <li>
                <a href="#foo">
                  <i className="fa fa-briefcase"></i>
                  <span className="hidden">Leads</span>
                </a>
              </li>
              <li>
                <a href="#foo">
                  <i className="fa fa-chart-line"></i>
                  <span className="hidden">Analytics</span>
                </a>
              </li>
              <li>
                <a href="#foo">
                  <i className="fa fa-cog"></i>
                  <span className="hidden">Settings</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="App__sidebar__footer">
          <a href="#foo">
            <i className="fa fa-sign-out-alt"></i>
            <span className="hidden">Log out</span>
          </a>
        </div>
      </div>

      <div className="App__content">
        <div className="App__content__center">
          <Header isMenuOpen={this.state.isSidebarOpen} onClickHamburger={() => {
            cov_15rgcz52bs.f[1]++;
            cov_15rgcz52bs.s[5]++;
            return this.setState({
              isSidebarOpen: !this.state.isSidebarOpen
            });
          }}></Header>

          <div className="App__content__center__queue">
            <Queue />
          </div>

        </div>
        <div className="App__content__right-sidebar">
          <h2>Inside Customers</h2>

          <div className="App__content__right-sidebar__active-users">
            {this.props.insideCustomers.map(user => {
              cov_15rgcz52bs.f[2]++;
              cov_15rgcz52bs.s[6]++;
              return <Avatar avatar={user.avatar} />;
            })}
          </div>

        </div>
      </div>
    </div>;
  }

}

cov_15rgcz52bs.s[7]++;

const mapStateToProps = store => {
  cov_15rgcz52bs.f[3]++;
  cov_15rgcz52bs.s[8]++;
  return {
    insideCustomers: store.insideCustomers
  };
};

export default connect(mapStateToProps)(App);