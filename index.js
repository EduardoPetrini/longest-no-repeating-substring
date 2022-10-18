import { findLongestSubstring } from "./lib/longest-no-repeating-substring.js";

const start = () =>{
  const inputString = process.argv[2];

  const longestSubstringLength = findLongestSubstring(inputString);

  console.log(longestSubstringLength);
}

start();
