window.onload = function() {
  const sum = require("./app.test");

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });