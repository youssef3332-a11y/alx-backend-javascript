const assert = require('assert'); // Node.js assert module for assertions
const sinon = require('sinon');  // Sinon for mocking
const displayMessage = require('../0-console'); // Assuming your function is in displayMessage.js

describe('displayMessage', () => {
  it('should write the message to stdout', () => {
    // Create a spy on process.stdout.write to check if it was called
    const stdoutSpy = sinon.spy(process.stdout, 'write');

    // Call the function with a test message
    const message = 'Hello, World!';
    displayMessage(message);

    // Assert that process.stdout.write was called once with the correct message
    assert(stdoutSpy.calledOnceWithExactly(message));

    // Restore the original process.stdout.write method after the test
    stdoutSpy.restore();
  });
});
