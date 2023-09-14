import React , {useState,useEffect } from "react";
import axios from 'axios';
import Category from "./Category";
import CategoryData from "../data/category";


const CategoryList  = ()=>{
    const [categories,setCatgories] = useState([]);

    const fetchData  = ()=>{
        axios.get('https://orca-app-jhg4l.ondigitalocean.app/api/category')
             .then((response) =>{
                setCatgories(response.data.data)
             })
             .catch(error => console.log(error))
    }

    useEffect(()=>{
      //do-task
      fetchData();
    },[])

    return (
     <div className="container">
        <h1 className="text-center">category List</h1>
        {/* <button className="btn btn-primary" onClick={fetchData}>Get data </button> */}
        <div className="row">
         {
            categories.map((category,index)=>(
                <Category data = {category}/>
            ))

         }
        </div>
        </div>

    )
}
export default CategoryList;