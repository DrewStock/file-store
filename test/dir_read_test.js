
const getDirContents = require('../lib/dir_read');
const assert = require('assert');
// const fs = require('fs');

it('dir_read_test gets all "data" file contents', done => {

  getDirContents('data', (err, contents) => {
    if (err) return done(err);

    // assert.deepEqual(actual, expected[, message])
    assert.deepEqual(
            contents,
            ['{\"team\":\"Pirates\",\"city\":\"Pittsburgh\",\"league\":\"National\"}', '{\"city\":\"Oakland\",\"team\":\"Athletics\"}']
        );

    done();
  });
});
