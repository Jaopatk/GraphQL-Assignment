import { Lists } from "./dbConnectors.js";

export const resolvers = {
  Query: {
    getLists: () => {
      return Lists.find();
    },
  },
  Mutation: {
    createList: (parent, { input }, context, info) => {
        const arr = input.task
        arr.forEach(e => console.log(e))

      const newList = new Lists({
        title: input.title,
        task: [
          {
            title: input.task[0].title,
            status: input.task[0].status,
          },
          {
            title: input.task[1].title,
            status: input.task[1].status,
          },
        ],
      });
      newList.id = newList._id;
      return newList.save();
    },
    updateList: (parent, { input }) => {
        console.log("update List")
        
        return new Promise((resolve, object) => {
            Lists.findOneAndUpdate({ _id: input.id}, input , { new: true }, (err, list) => {
                if(err) throw err
                else resolve(list)
            })
        })
    },
    updateTask: (parent, { input }) => {
        console.log("update Task")
        
        const objIndex = task.findIndex((obj => obj.id == { _id: input.id}))
        
        return new Promise((resolve, object) => {
            Lists.findOneAndUpdate({ _id: input.id}, input , { new: true }, (err, list) => {
                if(err) throw err
                else resolve(list)
            })
        })
    }


  },
};
