var cov_kdjbwj71q = function () {
  var path = "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/Queue/QueueItem/QueueItem.js";
  var hash = "86bfc486869dbe28e082689b23a9019dd2b5d7fb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/components/Queue/QueueItem/QueueItem.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 10
        },
        end: {
          line: 8,
          column: 3
        }
      },
      "1": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 44,
          column: 6
        }
      },
      "2": {
        start: {
          line: 36,
          column: 37
        },
        end: {
          line: 36,
          column: 76
        }
      },
      "3": {
        start: {
          line: 39,
          column: 37
        },
        end: {
          line: 39,
          column: 74
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 11
          },
          end: {
            line: 45,
            column: 3
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 36,
            column: 31
          },
          end: {
            line: 36,
            column: 32
          }
        },
        loc: {
          start: {
            line: 36,
            column: 37
          },
          end: {
            line: 36,
            column: 76
          }
        },
        line: 36
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 39,
            column: 31
          },
          end: {
            line: 39,
            column: 32
          }
        },
        loc: {
          start: {
            line: 39,
            column: 37
          },
          end: {
            line: 39,
            column: 74
          }
        },
        line: 39
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "86bfc486869dbe28e082689b23a9019dd2b5d7fb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React, { Component } from 'react';
import './QueueItem.scss';
import Button from '../../Button/Button';

class QueueItem extends Component {
  state = (cov_kdjbwj71q.s[0]++, {
    timer: '12 minutes'
  });

  render() {
    cov_kdjbwj71q.f[0]++;
    cov_kdjbwj71q.s[1]++;
    return <div className="QueueItem">

        <div className="QueueItem__user">
          <div className="QueueItem__user__photo" style={{
          backgroundImage: `url(${this.props.details.user.avatar})`
        }}></div>
        </div>

        <div className="QueueItem__details">
          <div className="QueueItem__details__content">
            <div className="QueueItem__details__content__text">
              <h3 className="QueueItem__details__content__text__user-name">{this.props.details.user.name}</h3>
              <p className="QueueItem__details__content__text__minimum-seats">A table with <b>{this.props.details.minimumSeats} Seats</b></p>
            </div>
            <div className="QueueItem__details__content__timer">
              <p>
                <small>Waiting for:</small><br />
                {this.state.timer}
              </p>
            </div>
          </div>

          <div className="QueueItem__details__actions">
            <div className="remove">
              <Button onClick={() => {
              cov_kdjbwj71q.f[1]++;
              cov_kdjbwj71q.s[2]++;
              return this.props.onRemove(this.props.details);
            }} color="danger">Remove from queue</Button>
            </div>
            <div className="call">
              <Button onClick={() => {
              cov_kdjbwj71q.f[2]++;
              cov_kdjbwj71q.s[3]++;
              return this.props.onCall(this.props.details);
            }}>Call {this.props.details.user.name}</Button>
            </div>
          </div>
        </div>
      </div>;
  }

}

export default QueueItem;