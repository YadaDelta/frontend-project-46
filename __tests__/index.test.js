import { readFileSync } from 'node:fs';
import formatter from '../src/formatters/index.js';

import calcDiff from '../src/index.js';
import parser from '../src/parsers.js';

const stylishResult = readFileSync('__fixtures__/expected.stylish.txt', 'utf-8');
const plainResult = readFileSync('__fixtures__/expected.plain.txt', 'utf-8');
const jsonResult = readFileSync('__fixtures__/expected.json.txt', 'utf-8');

const formatList = ['json', 'yaml', 'yml'];

test.each(formatList)('testing stylish nested', (format) => {
  expect(calcDiff(`__fixtures__/file1.${format}, __fixtures__/file2.${format}`)).toBe(stylishResult);
});

test.each(formatList)('testing plain nested', (format) => {
  expect(calcDiff(`__fixtures__/file1.${format}, __fixtures__/file2.${format}`)).toBe(plainResult);
});

test.each(formatList)('testing json nested', (format) => {
  expect(calcDiff(`__fixtures__/file1.${format}, __fixtures__/file2.${format}`)).toBe(jsonResult);
});

test('should be errors', () => {
  expect(() => (parser('randomdata', 'whoops'))).toThrow('not supported!');
  expect(() => (formatter('randomdata', 'whoops'))).toThrow('not supported!');
});
