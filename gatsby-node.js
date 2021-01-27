
const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({ secret: "fnAEAfQkujACAUCZh08n41P7nKZHHh8FTvgFuG3r" });


exports.createPages = async function ({ graphql, actions}) {

    var result = await client.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection('lollies'))),
            q.Lambda(x => q.Get(x))
          )
      )
            console.log("client",client)
      console.log("result",result)
       result.data.map(d => {
        actions.createPage({
            path: d.data.lollyPath,
            component: require.resolve(`./src/pages/lollyTemplate.tsx`),
            context: d.data,
        });
      })
  
      
      console.log("End of Gatsby Node File");
  }