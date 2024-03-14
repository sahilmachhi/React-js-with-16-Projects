import { account } from "./UserAuth";
// import ID from "appwrite"

function signIn({ username, email, password }) {
    const promise = account.create(username, email, password)

    promise.then((res) => {
        console.log(res);
        console.log("login successful");
    }, (err) => {
        console.log(err);
        console.log("login failed");
    })


};

export default signIn