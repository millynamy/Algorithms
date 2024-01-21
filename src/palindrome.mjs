//Given an integer x, return true if x is a palindrome
//, and false otherwise.
function isPalindrome(x) {
    let str = String(x);
    let start = 0;
    let end = str.length - 1;
    
    while (start <= end) {
        if (str.charAt(start) !== str.charAt(end)) {
            return false;
        }
        start++;
        end--;
    }
    
    return true;
}
export { isPalindrome, };