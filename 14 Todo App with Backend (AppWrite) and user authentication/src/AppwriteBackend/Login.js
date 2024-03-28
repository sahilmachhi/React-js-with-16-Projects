// import { client } from "./UserAuth";
import { Account, Client } from "appwrite"
import backendData from "../assets/env"

export function LogIn(email, password) {

    // const account = new Account(client);
    // console.log(client)
    // console.log(account)

    const client = new Client();

    const account = new Account(client);

    client
        .setEndpoint(backendData.appwriteUrl) // Your API Endpoint
        .setProject(backendData.databaseID) // Your project ID
        ;

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

