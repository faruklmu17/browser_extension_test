const fs = require('fs');
class SummaryReporter {
  onBegin(config, suite) { this.rootSuite = suite; }
  onEnd(result) {
    const summary = {
      schemaVersion: 1, passed: 0, failed: 0, flaky: 0, total: 0,
      startTime: new Date().toISOString(), isSummary: true
    };
    if (this.rootSuite) {
      for (const test of this.rootSuite.allTests()) {
        const out = test.outcome();
        if (out === 'expected') summary.passed++;
        if (out === 'unexpected') summary.failed++;
        if (out === 'flaky') summary.flaky++;
      }
    }
    summary.total = summary.passed + summary.failed + summary.flaky;
    fs.writeFileSync('test-summary.json', JSON.stringify(summary, null, 2));
  }
}
module.exports = SummaryReporter;
