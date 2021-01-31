"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summery = void 0;
var WinAnalysis_1 = require("./analyzers/WinAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var Summery = /** @class */ (function () {
    function Summery(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summery.winAnalasisWithHtmlReport = function (teamName) {
        return new Summery(new WinAnalysis_1.WinAnalysis(teamName), new HtmlReport_1.HtmlReport());
    };
    Summery.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return Summery;
}());
exports.Summery = Summery;
