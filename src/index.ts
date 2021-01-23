import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResults';

const reader = new CsvFileReader('football.csv');
reader.read();
//console.log(reader.data);

let manUnitedWin = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWin++;
  }
}
console.log(`man united won ${manUnitedWin} times`);
