# GraphQL-Assignment
Backend for task list app with GraphQL API.

this project's running on local server.

## Setting up Database
Download and install [MongoDB community Server](https://www.mongodb.com/try/download/community)
and run [(How to)](https://www.mongodb.com/docs/guides/server/install/)

Set up the MongoDB environment and run by running the command line below.
```bash
"C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --dbpath="c:\data\db"
```
and create 
## Start the app
using terminal in Visual Studio Code and running the command line below.
```bash
> node index.js
```
and go to localhost:8080/graphql

## Playground
using GraphiQL

"Lists" Database and "lists" collections will be created

add list and some tasks
```js
mutation {
  createList(input: {title: "listTitle", 
  task: [{title: "intask", status: false},{title: "intask2", status: false}]}) 
  {
    id
    title
    task {
      title
      status
    }
  }
}

```

to get all List and task
```js
{
  getLists{
    id
    title
    task {
      title
      status
    }
  }
}
```
edit list title
```js
mutation{
  updateList(input:{id:"ur_list_id_in_mongoDB",title:"newtitle"}){
    id
    title
  }
}
```
