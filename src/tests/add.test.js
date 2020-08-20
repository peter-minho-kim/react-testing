const add = (a, b) => a + b;
const generateGreeting = (name = 'Anon') => `Hello ${name}`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should generate greeting from name', () => {
  const result = generateGreeting('Peter');
  expect(result).toBe('Hello Peter');
});

test('should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anon');
});
