// Here i will write all method to perform operation on data set.

// when someone login--
    // you will get userid and password from user
    // Now you have to searh for existing user in user detail if user is exist the compare pssword

// const getUser = () => {

// }
import {userDtail} from '../Date';


export const checkUser = (loginDetail) => {
    console.log(loginDetail)
    let user_detail = userDtail.filter((user) => {
        console.log(user)
        if (user.email == loginDetail.email && user.password == loginDetail.password){
            console.log("Username and form is validated")
            return true
        }
        return false
    })
    console.log(user_detail)
    if (user_detail){
        return user_detail[0]
    }
}

export const getUser = (email) => {
    userDtail.filter((user) => {
        if (user.email == email){
            return user
        }
    })
}

