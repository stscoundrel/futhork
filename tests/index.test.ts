import exampleModule from '../src';

describe('Example tests', () => {
  test('Test suite runs', () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
  });

  test('Example function returns correct string', () => {
    const result = exampleModule.example();

    expect(result).toBe('test string');
  });
});
