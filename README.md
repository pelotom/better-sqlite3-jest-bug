This illustrates a bug that occurs when using `jest` with `better-sqlite3`. After cloning, run `npm install && npm test`:

```
 PASS  ./set-pragma-4.test.js (19 MB heap size)
 FAIL  ./set-pragma-9.test.js (24 MB heap size)
  ● set pragma

    TypeError: Expected first argument to be a string

      2 |
      3 | test('set pragma', () => {
    > 4 |   sqlite3().pragma('foreign_keys = ON');
        |             ^
      5 | });
      6 |

      at Database.pragma (node_modules/better-sqlite3/lib/pragma.js:7:41)
      at Object.<anonymous> (set-pragma-9.test.js:4:13)

 FAIL  ./set-pragma-3.test.js (27 MB heap size)
  ● set pragma

    TypeError: Expected first argument to be a string

      2 |
      3 | test('set pragma', () => {
    > 4 |   sqlite3().pragma('foreign_keys = ON');
        |             ^
      5 | });
      6 |

      at Database.pragma (node_modules/better-sqlite3/lib/pragma.js:7:41)
      at Object.<anonymous> (set-pragma-3.test.js:4:13)

 FAIL  ./set-pragma-7.test.js (31 MB heap size)
  ● set pragma

    TypeError: Expected first argument to be a string

      2 |
      3 | test('set pragma', () => {
    > 4 |   sqlite3().pragma('foreign_keys = ON');
        |             ^
      5 | });
      6 |

      at Database.pragma (node_modules/better-sqlite3/lib/pragma.js:7:41)
      at Object.<anonymous> (set-pragma-7.test.js:4:13)

 FAIL  ./set-pragma-1.test.js (35 MB heap size)
  ● set pragma

    TypeError: Expected first argument to be a string

      2 |
      3 | test('set pragma', () => {
    > 4 |   sqlite3().pragma('foreign_keys = ON');
        |             ^
      5 | });
      6 |

      at Database.pragma (node_modules/better-sqlite3/lib/pragma.js:7:41)
      at Object.<anonymous> (set-pragma-1.test.js:4:13)

 FAIL  ./set-pragma-6.test.js (38 MB heap size)
  ● set pragma

    TypeError: Expected first argument to be a string

      2 |
      3 | test('set pragma', () => {
    > 4 |   sqlite3().pragma('foreign_keys = ON');
        |             ^
      5 | });
      6 |

      at Database.pragma (node_modules/better-sqlite3/lib/pragma.js:7:41)
      at Object.<anonymous> (set-pragma-6.test.js:4:13)

 FAIL  ./set-pragma-8.test.js (42 MB heap size)
  ● set pragma

    TypeError: Expected first argument to be a string

      2 |
      3 | test('set pragma', () => {
    > 4 |   sqlite3().pragma('foreign_keys = ON');
        |             ^
      5 | });
      6 |

      at Database.pragma (node_modules/better-sqlite3/lib/pragma.js:7:41)
      at Object.<anonymous> (set-pragma-8.test.js:4:13)

 FAIL  ./set-pragma-2.test.js (45 MB heap size)
  ● set pragma

    TypeError: Expected first argument to be a string

      2 |
      3 | test('set pragma', () => {
    > 4 |   sqlite3().pragma('foreign_keys = ON');
        |             ^
      5 | });
      6 |

      at Database.pragma (node_modules/better-sqlite3/lib/pragma.js:7:41)
      at Object.<anonymous> (set-pragma-2.test.js:4:13)

 FAIL  ./set-pragma-0.test.js (49 MB heap size)
  ● set pragma

    TypeError: Expected first argument to be a string

      2 |
      3 | test('set pragma', () => {
    > 4 |   sqlite3().pragma('foreign_keys = ON');
        |             ^
      5 | });
      6 |

      at Database.pragma (node_modules/better-sqlite3/lib/pragma.js:7:41)
      at Object.<anonymous> (set-pragma-0.test.js:4:13)

 FAIL  ./set-pragma-5.test.js (53 MB heap size)
  ● set pragma

    TypeError: Expected first argument to be a string

      2 |
      3 | test('set pragma', () => {
    > 4 |   sqlite3().pragma('foreign_keys = ON');
        |             ^
      5 | });
      6 |

      at Database.pragma (node_modules/better-sqlite3/lib/pragma.js:7:41)
      at Object.<anonymous> (set-pragma-5.test.js:4:13)

Test Suites: 9 failed, 1 passed, 10 total
Tests:       9 failed, 1 passed, 10 total
Snapshots:   0 total
Time:        2.601 s, estimated 3 s
Ran all test suites.
```

There is an error with every test suite after the first, and a memory leak of ~4MB per suite.