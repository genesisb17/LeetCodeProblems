function reverseWords(sentence: string): string {
  let wordStart = sentence.length - 1; // Start from the end of the string
  let wordEnd = sentence.length - 1;
  let out = '';
  
  while (wordStart >= 0) {
    // Skip trailing spaces
    while (wordStart >= 0 && sentence[wordStart] === ' ') {
      wordStart--;
    }
    wordEnd = wordStart; // Set the end of the current word

    // Find the start of the word
    while (wordStart >= 0 && sentence[wordStart] !== ' ') {
      wordStart--;
    }

    // Extract the word and add to the output
    if (wordEnd >= 0) {
      out += sentence.substring(wordStart + 1, wordEnd + 1) + ' ';
    }
  }

  // Remove the trailing space and return
  return out.trim();
}