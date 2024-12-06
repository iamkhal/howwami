import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('675269230027388cbbfc');

export const account = new Account(client);
export const databases = new Databases(client, '67526a34000e0cf96404');