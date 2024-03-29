import { account } from "./UserAuth";


export function LogIn(email, password) {

    const promise = account.createEmailSession(email, password)




    promise.then((res) => {
        console.log("promise got respose")
        console.log(res)
        console.log("user login successful")
    }, (err) => {
        console.log("promise got error")
        console.log(err)
    })

}

