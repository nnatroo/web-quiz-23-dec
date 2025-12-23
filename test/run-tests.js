const tp = require('../src/textProcessor');

function assertEqual(actual, expected) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  return a === e;
}

const tests = [
  {
    name: 'capitalizeWords: basic',
    run: () => tp.capitalizeWords('  hello   WORLD '),
    expected: 'Hello World'
  },
  {
    name: 'countVowels: basic',
    run: () => tp.countVowels('Hello'),
    expected: 2
  },
  {
    name: 'mostFrequentWord: tie and punctuation',
    run: () => tp.mostFrequentWord('Apple banana apple. Orange, banana!'),
    expected: 'apple'
  },
  {
    name: 'flattenUnique: nested and duplicates',
    run: () => tp.flattenUnique([1, [2, 3], 2, [3, [4]], 'a', ['a']]),
    expected: [1, 2, 3, 4, 'a']
  },
  {
    name: 'capitalizeWords: empty',
    run: () => tp.capitalizeWords('   '),
    expected: ''
  },
  {
    name: 'countVowels: none',
    run: () => tp.countVowels('bcdfg'),
    expected: 0
  }
];

console.log('Running tests...');
let passed = 0;
for (const t of tests) {
  try {
    const out = t.run();
    if (assertEqual(out, t.expected)) {
      console.log(`✓ ${t.name}`);
      passed++;
    } else {
      console.log(`✗ ${t.name}`);
      console.log('  Expected:', t.expected);
      console.log('  Received:', out);
    }
  } catch (err) {
    console.log(`✗ ${t.name}`);
    console.log('  Error when running test:', err && err.message);
  }
}

console.log(`${passed}/${tests.length} tests passed`);

if (passed === tests.length) {
  console.log('All tests passed — nice work!');
} else {
  console.log('Some tests failed. Implement the functions in src/textProcessor.js and try again.');
}
