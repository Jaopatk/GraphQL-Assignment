import { resolvers } from "./resolvers.js";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = `
    """
    List of to-do list
    """
    type List {
        id: ID

        """
        List title
        """
        title: String
        
        """
        tasks in the list
        """
        task: [Task]
    }

    """
    Task in to-do list
    """
    type Task{
        id: ID
        title: String
        status: Boolean
        position: Int
    }

    """
    show all list and its components
    """
    type Query {
        getLists: [List]
    }

    """
    Input of a list 
    """
    input ListInput {
        id: ID
        title: String
        task: [TaskInput]
    }

    """
    Input of a task
    """
    input TaskInput {
        id: ID
        title: String
        status: Boolean
        position: Int
    }
    """
    Edit some part of a to-do list
    """ 
    type Mutation { 
        createList(input: ListInput): List
        # updateTask(id: ID!, input: ListInput): List
        updateList(input: ListInput): List
    }
`;
const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
