import { account, ID } from "./UserAuth";
import { LogIn } from "./Login"

export function SignIn(email, username, password) {
    const promise = account.create(ID.unique(), email, password, username)

    promise.then((res) => {
        console.log(res);
        LogIn(email, password)
        console.log("account create successful");
    }, (err) => {
        console.log(err);
        console.log("login failed");
    })
}

