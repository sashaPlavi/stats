import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summery } from './Summery';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summery = new Summery(new WinAnalysis('Man United'), new ConsoleReport());

summery.buildAndPrintReport(matchReader.matches);
