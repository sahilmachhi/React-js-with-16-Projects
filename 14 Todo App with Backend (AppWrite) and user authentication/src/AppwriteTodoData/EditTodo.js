import { Databases } from "appwrite";
import { client } from "../AppwriteBackend/UserAuth";
import backendData from "../assets/env";

export function DeleteTodo(documentID) {


    const databases = new Databases(client)
    const promise = databases.updateDocument(backendData.databaseID, backendData.collectionID, documentID, "dataObject");

    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
}