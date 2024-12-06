import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6752d0de00147406bced');

export const account = new Account(client);
export const databases = new Databases(client, '6752d675000a004a8506');