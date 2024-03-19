// import { client } from "./UserAuth";
import { Account, Client } from "appwrite"
import backendData from "../assets/env"

export function signin() {

    // const account = new Account(client);
    // console.log(client)
    // console.log(account)

    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject(backendData.projectID);                 // Your project ID

    const account = new Account(client);

    const promise = account.createEmailSession('whonix29@gmail.com', 'sahilsss');

    promise.then((res) => {
        console.log("promise got respose")
        console.log(res)
    }, (err) => {
        console.log("promise got error")
        console.log(err)
    })

}

