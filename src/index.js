import { readFileSync } from 'node:fs';
import path from 'path';

import parser from './parsers.js';
import getDifference from './getDifference.js';
import formatter from './formatters/index.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getFormat = (filepath) => path.extname(filepath).slice(1);

const getData = (filepath) => parser(readFileSync(getFullPath(filepath), 'utf8'), getFormat(filepath));

const calcDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const diff = getDifference(data1, data2);
  return formatter(diff, formatName);
};

export default calcDiff;
