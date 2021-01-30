"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summery = void 0;
var Summery = /** @class */ (function () {
    function Summery(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summery.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return Summery;
}());
exports.Summery = Summery;
