import express from "express";
import { schema } from "./src/data/schema.js";
import { graphqlHTTP } from "express-graphql";

const app = express();
const PORT = 8080;

// serving static files
app.use(express.static("public"));

app.get("/", (req, res) => res.send(`GraphQL is running!`));

//routes
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () =>
  console.log(`your server is running on localhost:${PORT}/graphql`)
);
