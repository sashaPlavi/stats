import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summery } from './Summery';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summery = Summery.winAnalasisWithHtmlReport('Liverpool');

summery.buildAndPrintReport(matchReader.matches);
