const createTestCafe = require('testcafe');

createTestCafe('localhost', 1337, 1338)
    .then(testcafe => {
        const runner = testcafe.createRunner();
        return runner.src(['tests/fixture1.js', 'tests/func/fixture3.js'])
        .browsers(['chrome', 'safari'])
        .run();
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });