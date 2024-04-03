import { Databases } from "appwrite";
import { client } from "../AppwriteBackend/UserAuth";
import backendData from "../assets/env";


export function ShowTodo() {


    const databases = new Databases(client)
    const promise = databases.listDocuments(backendData.databaseID, backendData.collectionID);


    promise.then(function (response) {
        const documents = response.documents;
        console.log(documents); // Success
        return documents
    }, function (error) {
        console.log(error); // Failure
    });
}