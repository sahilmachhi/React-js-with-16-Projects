import { client } from "../AppwriteBackend/UserAuth";
import { Databases, ID } from "appwrite"
import backendData from "../assets/env";


export function DeleteTodo() {
    const databases = new Databases(client)

    const promise = databases.deleteDocument(backendData.databaseID, backendData.collectionID, "document id")

    promise.then((res) => {
        console.log("data send", res)
    }, (err) => {
        console.log("error", err)
    })
}