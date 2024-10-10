function generatePassword(length = 12) {  //----------------------------------------------------------  Creates a function that generates a password with a length of 12 characters
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';  //---------  A list of characters that can be used in the password
    let password = '';   //---------------------------------------------------------------------------  Sets the variable 'password' as a string
    for (let i = 0; i < length; i++) {  //------------------------------------------------------------  The amount of characters in the password mus tbe equal to the set length
    password += characters.charAt(Math.floor(Math.random() * characters.length));  //-----------------  Generates a random character based on the length (a length of 12 will generate 12 random characters)
    }
    return password;  //------------------------------------------------------------------------------  Returns the string of randomly generated characters
    }

module.exports = generatePassword;