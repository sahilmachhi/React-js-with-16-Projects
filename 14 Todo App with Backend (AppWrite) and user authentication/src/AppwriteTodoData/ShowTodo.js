import { Databases } from "appwrite";
import { client } from "../AppwriteBackend/UserAuth";
import backendData from "../assets/env";


export function ShowTodo() {


    const databases = new Databases(client)
    const promise = databases.listDocuments(backendData.databaseID, backendData.collectionID, "documentID");

    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
}