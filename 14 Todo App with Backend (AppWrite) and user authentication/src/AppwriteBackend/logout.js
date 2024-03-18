import { account } from "./UserAuth"


function logout() {
    const promise = account.deleteSessions();

    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
}

export default logout