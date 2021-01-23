import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

let manUnitedWin = 0;

// enum
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Drow = 'D',
}

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWin++;
  }
}
console.log(`man united won ${manUnitedWin} times`);
