import {DatabaseSync} from 'node:sqlite'

const db = new DatabaseSync(':memory:') //starting our database, noe here we have used the memory beacuse it a normal not a production

