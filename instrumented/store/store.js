var cov_2a978v7i4x = function () {
  var path = "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/store/store.js";
  var hash = "5334c0c4bba6ee37baea8a7a644d09423f9fd4fe";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alanpazetto/Documents/Git Repositories/sandbox/my-react-dashboard/src/store/store.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 22
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "1": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 15
        }
      },
      "2": {
        start: {
          line: 27,
          column: 21
        },
        end: {
          line: 27,
          column: 57
        }
      }
    },
    fnMap: {
      "0": {
        name: "reducers",
        decl: {
          start: {
            line: 23,
            column: 9
          },
          end: {
            line: 23,
            column: 17
          }
        },
        loc: {
          start: {
            line: 23,
            column: 49
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 23
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 18
          },
          end: {
            line: 23,
            column: 39
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 23,
            column: 26
          },
          end: {
            line: 23,
            column: 39
          }
        }],
        line: 23
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
      "0": [0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "5334c0c4bba6ee37baea8a7a644d09423f9fd4fe"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import { createStore } from 'redux';
const INITIAL_STATE = (cov_2a978v7i4x.s[0]++, {
  insideCustomers: [{
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Russell Rusty'
  }, {
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Tess Warner'
  }, {
    avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
    name: 'Adalyn Archer'
  }, {
    avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
    name: 'Laney Bryant'
  }, {
    avatar: 'https://randomuser.me/api/portraits/women/80.jpg',
    name: 'Ean Mahoney'
  }, {
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    name: 'Branden Melton'
  }, {
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    name: 'Dashawn Grimes'
  }, {
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    name: 'Ivy Booker'
  }, {
    avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
    name: 'Stacy Larson'
  }, {
    avatar: 'https://randomuser.me/api/portraits/women/84.jpg',
    name: 'Bryson Stark'
  }],
  customerQueue: [],
  cards: [{
    name: 'NuBank',
    limitUsage: '3.983,22'
  }, {
    name: 'Itaú',
    limitUsage: '1.211,22'
  }]
});

function reducers(state = (cov_2a978v7i4x.b[0][0]++, INITIAL_STATE), action) {
  cov_2a978v7i4x.f[0]++;
  cov_2a978v7i4x.s[1]++;
  return state;
}

export const store = (cov_2a978v7i4x.s[2]++, createStore(reducers, INITIAL_STATE));