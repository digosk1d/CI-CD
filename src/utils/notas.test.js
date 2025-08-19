const { calcWeightedGrade, percentile } = require('./grades');

describe('calcWeightedGrade', () => {
  test('calculates weighted grade correctly', () => {
    expect(calcWeightedGrade([{ score: 80, weight: 0.4 }, { score: 90, weight: 0.6 }])).toBe(86.00);
    expect(calcWeightedGrade([{ score: 100, weight: 0.5 }, { score: 50, weight: 0.5 }])).toBe(75.00);
  });

  test('throws TypeError for invalid input types', () => {
    expect(() => calcWeightedGrade('not an array')).toThrow(TypeError);
    expect(() => calcWeightedGrade([{ score: '80', weight: 0.4 }])).toThrow(TypeError);
    expect(() => calcWeightedGrade([{ score: 80, weight: '0.4' }])).toThrow(TypeError);
    expect(() => calcWeightedGrade([{}])).toThrow(TypeError);
  });

  test('throws RangeError for invalid score or weight ranges', () => {
    expect(() => calcWeightedGrade([{ score: -1, weight: 0.4 }, { score: 90, weight: 0.6 }])).toThrow(RangeError);
    expect(() => calcWeightedGrade([{ score: 101, weight: 0.4 }, { score: 90, weight: 0.6 }])).toThrow(RangeError);
    expect(() => calcWeightedGrade([{ score: 80, weight: -0.1 }, { score: 90, weight: 1.1 }])).toThrow(RangeError);
    expect(() => calcWeightedGrade([{ score: 80, weight: 0.2 }, { score: 90, weight: 0.6 }])).toThrow(RangeError);
  });
});

describe('percentile', () => {
  test('calculates percentile using nearest-rank method', () => {
    expect(percentile(0, [1, 2, 3])).toBe(1.00);
    expect(percentile(100, [1, 2, 3])).toBe(3.00);
    expect(percentile(50, [1, 2, 3, 4])).toBe(2.00);
    expect(percentile(75, [1, 2, 3, 4])).toBe(3.00);
  });

  test('throws TypeError for invalid input types', () => {
    expect(() => percentile('50', [1, 2, 3])).toThrow(TypeError);
    expect(() => percentile(50, [])).toThrow(TypeError);
    expect(() => percentile(50, ['1', 2, 3])).toThrow(TypeError);
  });

  test('throws RangeError for invalid p range', () => {
    expect(() => percentile(-1, [1, 2, 3])).toThrow(RangeError);
    expect(() => percentile(101, [1, 2, 3])).toThrow(RangeError);
  });
});