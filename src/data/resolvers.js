import { Lists } from "./dbConnectors.js";

export const resolvers = {
  Query: {
    getLists: () => {
      return Lists.find();
    },
  },
  Mutation: {
    createList: (parent, { input }, context, info) => {
        /*const arr = input.task
        arr.forEach(element => {
          console.log(element.title),
          console.log(element.status),
          console.log(element.position)
        })*/

      const newList = new Lists({
        title: input.title,
        task: [
        {
          title: input.task[0].title,
          status: input.task[0].status,
          position: input.task[0].position
        },
        {
          title: input.task[1].title,
          status: input.task[1].status,
          position: input.task[1].position
        }]
        
      });
      newList.id = newList._id;
      
      return new Promise((resolve, object) => {
        newList.save((err) => {
            if (err) reject(err)
            else resolve(newList)
        })
      })
    },
    updateList: (parent, { input }) => {
        console.log("update List")
        
        return new Promise((resolve, object) => {
            Lists.findOneAndUpdate({ _id: input.id}, input , { new: true }, (err, list) => {
                if(err) reject (err)
                else resolve(list)
            })
        })
    },
  },
};
