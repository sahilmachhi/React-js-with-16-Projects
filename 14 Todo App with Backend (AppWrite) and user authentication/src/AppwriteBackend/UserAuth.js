import backendData from "../assets/env";
import { Client, Account } from "appwrite"

export const client = new Client();

client
    .setEndpoint(backendData.appwriteUrl)
    .setProject(backendData.projectID)

export const account = new Account(client)
export { ID } from "appwrite"



