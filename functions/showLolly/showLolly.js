// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const pageTemplate = require('../../src/pages/lollyTemplate.js'); 
const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({ secret: "fnAEAfQkujACAUCZh08n41P7nKZHHh8FTvgFuG3r" });
const handler = async (event, context, callback) => {
  
    const path = event.queryStringParameters.id
    console.log("path",path)
  

    return client.query(
      q.Get(q.Match(q.Index("index_by_path"), path))
    ).then((response) => {
      console.log("template:\n",JSON.stringify(pageTemplate(response.data)))
   
      return {
        statusCode: 200,
        body: pageTemplate(response.data)
      }
   

   }).catch((error) => {
    
     console.log('Error:', error);
      return callback(null, {
        body: JSON.stringify(error),
        statusCode: 301,
        headers: {
          Location: `/melted/index.html`,
        }
      });
   })
  
}

module.exports = { handler }
