import { readFileSync } from 'node:fs';
import formatter from '../src/formatters/index.js';

import calcDiff from '../src/index.js';
import parser from '../src/parsers.js';

const stylishResult = readFileSync('__fixtures__/expected.stylish.txt', 'utf-8');
const plainResult = readFileSync('__fixtures__/expected.plain.txt', 'utf-8');
const jsonResult = readFileSync('__fixtures__/expected.json.txt', 'utf-8');

test('testing stylish nested', () => {
  expect(calcDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toBe(stylishResult);
  expect(calcDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')).toBe(stylishResult);
  expect(calcDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml')).toBe(stylishResult);
});

test('testing plain nested', () => {
  expect(calcDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain')).toBe(plainResult);
  expect(calcDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'plain')).toBe(plainResult);
  expect(calcDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'plain')).toBe(plainResult);
});

test('testing json nested', () => {
  expect(calcDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json')).toBe(jsonResult);
  expect(calcDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'json')).toBe(jsonResult);
  expect(calcDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'json')).toBe(jsonResult);
});

test('should be errors', () => {
  expect(() => (parser('randomdata', 'whoops'))).toThrow('not supported!');
  expect(() => (formatter('randomdata', 'whoops'))).toThrow('not supported!');
});
