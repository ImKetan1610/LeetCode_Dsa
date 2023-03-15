/*

Question:
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/

var longestCommonPrefix = function (a) {
  let size = a.length;

  /* if size is 0, return empty string */
  if (size == 0) return "";

  if (size == 1) return a[0];

  /* sort the array of strings */
  a.sort();

  /* find the minimum length from first and last string */
  let end = Math.min(a[0].length, a[size - 1].length);

  /* find the common prefix between the first and
           last string */
  let i = 0;
  while (i < end && a[0][i] == a[size - 1][i]) i++;

  let pre = a[0].substring(0, i);
  return pre;
};
