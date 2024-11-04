function validPalindrome(str: string): boolean {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] === str[right]) {
            left++;
            right--;
        } else {
            // Skip one character from either left or right and check if remaining is palindrome
            return (
                isSubPalindrome(str, left + 1, right) ||
                isSubPalindrome(str, left, right - 1)
            );
        }
    }

    return true;
}

// Helper function to check if a substring is a palindrome
function isSubPalindrome(str, left, right) {
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}