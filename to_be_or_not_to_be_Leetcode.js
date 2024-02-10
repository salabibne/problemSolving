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