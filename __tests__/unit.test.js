// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

/* Phone number tests*/
test('checks if number is valid', () => {
    expect(functions.isPhoneNumber('(323) 834-1676')).toBe(true);
})
test('checks if number is valid', () => {
    expect(functions.isPhoneNumber('(001) 001-0001')).toBe(true);
})
test('checks if number is invalid', () => {
    expect(functions.isPhoneNumber('0000000001')).toBe(false);
})
test('checks if number is invalid', () => {
    expect(functions.isPhoneNumber('8341428955')).toBe(false);
})

/* Email tests */
test('checks if email is valid', () => {
    expect(functions.isEmail('jrarreguin@ucsd.edu')).toBe(true);
})
test('checks if email is valid', () => {
    expect(functions.isEmail('josearreguin1676@gmail.com')).toBe(true);
})
test('checks if email is invalid', () => {
    expect(functions.isEmail('hahahahahah')).toBe(false);
})
test('checks if email is invalid', () => {
    expect(functions.isEmail('328947')).toBe(false);
})

/* Strong password tests */
test('checks if password is strong', () => {
    expect(functions.isStrongPassword('a3781cde')).toBe(true);
})
test('checks if password is strong', () => {
    expect(functions.isStrongPassword('k_3_1_387dc')).toBe(true);
})
test('checks if password is not strong', () => {
    expect(functions.isStrongPassword('ab$cd')).toBe(false);
})
test('checks if password is not strong', () => {
    expect(functions.isStrongPassword('0123456789')).toBe(false);
})

/* Date tests */
test('checks if date is valid', () => {
    expect(functions.isDate('04/09/2003')).toBe(true);
})
test('checks if date is valid', () => {
    expect(functions.isDate('4/9/2003')).toBe(true);    
})
test('checks if date is invalid', () => {
    expect(functions.isDate('23-3-2001')).toBe(false);    
})
test('checks if date is invalid', () => {
    expect(functions.isDate('April 2003')).toBe(false);    
})

/* Hex number tests */
test('checks if valid hex code', () => {
    expect(functions.isHexColor('#F1F')).toBe(true);
})
test('checks if valid hex code', () => {
    expect(functions.isHexColor('#CC12D2')).toBe(true);
})
test('checks if invalid hex code', () => {
    expect(functions.isHexColor('#MMM')).toBe(false);
})
test('checks if invalid hex code', () => {
    expect(functions.isHexColor('#C101Z1')).toBe(false);
})