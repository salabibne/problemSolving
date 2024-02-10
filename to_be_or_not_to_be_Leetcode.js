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