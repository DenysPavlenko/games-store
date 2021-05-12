import validateInput from './validate-input';

describe('Validatae input', () => {
  test('Should return false on invalid text input', () => {
    expect(validateInput('text', 'a')).toBe(false)
  });
  test('Should return true on valid text input', () => {
    expect(validateInput('text', 'test')).toBe(true)
  });
  test('Should return false on invalid email input', () => {
    expect(validateInput('email', 'testgmail.com')).toBe(false)
  });
  test('Should return true on valid email input', () => {
    expect(validateInput('email', 'test@gmail.com')).toBe(true)
  });
  test('Should return false on invalid number input', () => {
    expect(validateInput('number', 'a')).toBe(false)
  });
  test('Should return true on valid number input', () => {
    expect(validateInput('number', '1234')).toBe(true)
  });
  test('Should return false on invalid password input', () => {
    expect(validateInput('password', '1')).toBe(false)
  });
  test('Should return true on valid password input', () => {
    expect(validateInput('password', '123123')).toBe(true)
  });
  test('Should break if type is not a case', () => {
    expect(validateInput('test', '123123')).toBe(undefined)
  });
});
