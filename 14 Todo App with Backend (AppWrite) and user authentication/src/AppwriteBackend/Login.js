import { account } from "./UserAuth";


function signin({ username, password }) {
    const promise = account.createEmailSession(username, password)

    promise.then((res) => {
        console.log(res)
    }, (err) => {
        console.log(err)
    })

}


export default signin