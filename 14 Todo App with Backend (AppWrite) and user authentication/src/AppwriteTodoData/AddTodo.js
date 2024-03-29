import { client } from "../AppwriteBackend/UserAuth";
import { Databases, ID } from "appwrite"
import backendData from "../assets/env";


export function AddTodo(todoData) {
    const databases = new Databases(client)

    const promise = databases.createDocument(
        backendData.databaseID,
        backendData.collectionID,
        ID.unique(),
        {
            todoTitle: todoData,
        }
    )

    promise.then((res) => {
        console.log("data send", res)
    }, (err) => {
        console.log("error", err)
    })
}