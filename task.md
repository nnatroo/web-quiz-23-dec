# Text Processor — Node.js (Easy)
- Return the exact types and shapes described below.
Good luck — implement the functions in `src/textProcessor.js` and run the tests in `test/run-tests.js` to see feedback.

- No external packages used.
- Code is readable and reasonably efficient for small inputs.
- Functions meet the specification and handle edge cases.

Evaluation criteria

- Normalize case early when comparing frequency.
- For `flattenUnique`, recursion helps for arbitrarily nested arrays.
- Use regex for cleaning punctuation and splitting words.

Hints (only if you get stuck)

- Run the included tests with `node test/run-tests.js` (or `npm test`) to verify behavior. The tests are simple and will fail until your implementation is correct.
- Implement the functions in `src/textProcessor.js`.

What to deliver

- Write idiomatic, readable code and add small in-line comments where helpful.
- Pay attention to edge cases: empty input, inputs with only punctuation/whitespace, nested empty arrays.

Notes & constraints

- Example: `flattenUnique([1, [2, 3], 2, [3, [4]], 'a', ['a']])` => `[1, 2, 3, 4, 'a']`
- Output: a flat array with values in first-seen order and duplicates removed (strict equality). The function should flatten nested arrays recursively.
- Input: an array that may contain values and nested arrays (nested one level deep or deeper).
4) flattenUnique(arr)

- Example: `mostFrequentWord('Apple banana apple. Orange, banana!')` => `'apple'`
- Output: the word that occurs most often (case-insensitive). Strip punctuation, treat words separated by whitespace. If there's a tie, return the word that appears first among the tied words in the original sentence (after normalization).
- Input: a string containing words and basic punctuation (commas, periods, exclamation, question mark).
3) mostFrequentWord(sentence)

- Example: `countVowels('Hello')` => `2`
- Output: number of vowels in the string (a, e, i, o, u) — case-insensitive.
- Input: a string.
2) countVowels(str)

- Example: `capitalizeWords('  hello   WORLD ')` => `'Hello World'`
- Output: a string where each word's first letter is uppercased and the rest are lowercased. Words are separated by one or more spaces. Preserve single spaces between words in the result (no leading/trailing spaces).
- Input: a string (may be empty or contain extra spaces).
1) capitalizeWords(str)

Function specs (implement these)
- Keep functions pure (no I/O inside the functions).
- Do not install or use any npm packages.
- Use only JavaScript (ES5/ES6) that runs in Node.js.

Goals / Requirements

- `src/textProcessor.js` — implement the exported functions described below.

What you'll edit

Implement a small text-processing library in plain JavaScript (Node.js). This is a hands-on coding task where you'll edit one file and implement several utility functions that operate on strings and arrays. No DOM, no third-party packages — just vanilla Node.js.

Overview


