QUnit.test('Amounts under £125,001 have 0 LBTT', function(assert) {
  assert.strictEqual(calcLBTT(1), 0, '1 should give 0 LBTT');
  assert.strictEqual(calcLBTT(79635), 0, '79635 should give 0 LBTT');
  assert.strictEqual(calcLBTT(125000), 0, '125000 should give 0 LBTT');
});

QUnit.test('Amounts between £125,001 and £250k (allowing for rounding)', function(assert) {
  assert.strictEqual(calcLBTT(125001), 0, '125,001 should give 0 LBTT');
  assert.strictEqual(calcLBTT(125049), 0, '125,049 should give 0 LBTT');
  assert.strictEqual(calcLBTT(125050), 0, '125,050 should give 1 LBTT');
  assert.strictEqual(calcLBTT(250000), 2100, '250,000 should give 2,100 LBTT');
});

QUnit.test('Amounts between £250,001 and £325k ', function(assert) {
  assert.strictEqual(calcLBTT(250001), 2100, '£250,001 should give £2100 LBTT');
  assert.strictEqual(calcLBTT(325000), 5850, '£325,000 should give £5,850 LBTT');
});

QUnit.test('Amounts between £325,001 and £750k', function(assert) {
  assert.strictEqual(calcLBTT(325001), 5850, '£325,001 should give £5,850 LBTT');
  assert.strictEqual(calcLBTT(750000), 48350, '£750,000 should give £48,350 LBTT');
});

QUnit.test('Amounts over £750k', function(assert) {
  assert.strictEqual(calcLBTT(750001), 48350, '£750001 should give £48,350 LBTT');
  assert.strictEqual(calcLBTT(99000000), 11838350, '£99,000,000 should give £11,838,350 LBTT');
});