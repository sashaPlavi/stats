import fs from 'fs';
import { OutputTarget } from '../Summery';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
    <div>
    <h1>Analasis Output</h1>
    <div>${report}</div>
    </div>
    `;

    fs.writeFileSync('report.html', html);
  }
}
