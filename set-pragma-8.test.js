const sqlite3 = require('better-sqlite3');

test('set pragma', () => {
  sqlite3().pragma('foreign_keys = ON');
});
