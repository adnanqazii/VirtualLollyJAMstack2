import { navigate } from "gatsby";
import React, { useEffect } from "react"
import Header from "../component/Header"
//import Lolly from '../svg/lolly-image.svg'
import Lolly from '../component/Lolly'

import faunadb from "faunadb";
const q = faunadb.query;
const client = new faunadb.Client({ secret: "fnAEAfQkujACAUCZh08n41P7nKZHHh8FTvgFuG3r" });
export default function Home() {
 useEffect(()=>{
   const func=async()=>{
    var result = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index("url"))),
        q.Lambda(x => q.Get(x))
      )
    )

    console.log("result",result)
   }
  func()

 },[])
  return (
    <div className="container">
      <Header />
      <div className="listLollies">
        <div>
          <Lolly fillLollyTop="#d52358" fillLollyMiddle="#e95946" fillLollyBottom="#deaa43"  />
        </div> 
        <div>
          <Lolly fillLollyTop="red" fillLollyMiddle="green" fillLollyBottom="blue"  />
        </div>  
      </div>
      <input type="button" value="Create New Lolly"
        onClick={
          ()=>{
            navigate("/createNew");
          }
        }
      ></input>
    </div>

  );
}