// problem statement Link 
// https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript


function expect(val_one) {
    return {

        toBe(val_two) {
            if (val_one === val_two) {
                return true ;
            }
            else {
                throw new Error("Not Equal") ;
            }
        },

        notToBe(val_three) {
            if (val_one !== val_three) {
                return true ;
            }
            else {
                 throw new Error("Equal") ;
            }
        }
    }
}

// OutPut :
// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.