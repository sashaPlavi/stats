import { MatchData } from './MatchData';

export interface Analizer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summery {
  constructor(public analizer: Analizer, public outputTarget: OutputTarget) {}
}
