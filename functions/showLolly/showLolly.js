// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({ secret: "fnAEAfQkujACAUCZh08n41P7nKZHHh8FTvgFuG3r" });
const handler = async (event) => {
  
    const id = event.queryStringParameters.id
    console.log("SHow lolly")
    // find the lolly data in the DB
    client.query(
      q.Get(q.Match(q.Index("index_by_path"), path))
    ).then((response) => {
     // console.log("response:",reponse)
      // if found return a view
      // return callback(null, {
      //   statusCode: 200,
      //   body: pageTemplate(response.data)
      // });

    }).catch((error) => {
      // not found or an error, send the sad user to the generic error page
     // console.log('Error:', error);
      // return callback(null, {
      //   body: JSON.stringify(error),
      //   statusCode: 301,
      //   headers: {
      //     Location: `/melted/index.html`,
      //   }
      // });
    })
  
}

module.exports = { handler }
