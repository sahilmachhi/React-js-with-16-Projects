import { Client, Account, ID } from "appwrite";

function defaultWay() {
    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('65e8311c89305a3fe3a7');

    const account = new Account(client);

    // sign up
    const promise = account.create(ID.unique(), 'email@example.com', 'password');

    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
}

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
            .setProject('65e8311c89305a3fe3a7');
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const AuthService = new AuthService()

export default AuthService