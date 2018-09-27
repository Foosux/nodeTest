const assert = require('assert');

assert.deepEqual([[[1, 2, 33]], 4, 5], [[[1, 2, '3']], 4, 5]);

// assert (0, 'ok')
