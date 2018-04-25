import * as chalk from 'chalk';

export const success = (...log) => {
  process.env.DEBUG === 'TRUE' && console.log(chalk.default.white.bgGreen.bold(...log));
};

export const error = (...log) => {
  process.env.DEBUG === 'TRUE' && console.log(chalk.default.white.bgRed.bold(...log));
};