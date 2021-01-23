import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWin = 0;

// enum
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Drow = 'D',
}

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWin++;
  }
}
console.log(`man united won ${manUnitedWin} times`);
