import { account, ID } from "./UserAuth";
import { LogIn } from "./Login"

export function SignIn(email, username, password) {
    const promise = account.create(ID.unique(), email, username, password)

    promise.then((res) => {
        console.log(res);
        LogIn(username, password)
        console.log("account create successful");
    }, (err) => {
        console.log(err);
        console.log("login failed");
    })


}

