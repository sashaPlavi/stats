"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summery_1 = require("./Summery");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
var summery = Summery_1.Summery.winAnalasisWithHtmlReport('Liverpool');
summery.buildAndPrintReport(matchReader.matches);
