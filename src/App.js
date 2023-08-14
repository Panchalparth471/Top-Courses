import React, { useEffect } from "react";
import Cards from "./Cards";
import Filter from "./Filter";
import Navbar from "./Navbar";
import { useState } from "react"; 
import Spinner from "./Spinner";
import { ToastContainer } from "react-toastify";
import {apiUrl, filterData } from "./data";

const App = () => {

  const [courses, setCourses] = useState('');
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  

  //Fetching data for the first time only by using Second variation
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        
        console.log(output);
        //Save Data in variable

        setCourses(output.data);
      }

      catch (error) {
        ToastContainer.error("Something went wrong");
      }
      setLoading(false);
    }

    fetchData();
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      <div>
           <Navbar></Navbar>
      </div>

      <div className="bg-bgDark2 min-h-screen">
      <div>
           <Filter filterData={filterData} setCategory={setCategory} category={category}></Filter>
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap font-medium justify-center items-center min-h-[50vh]">
        {
            (loading)?(<Spinner></Spinner>):(<Cards courses={courses} category={category}></Cards>)
        }
         
      </div>
    </div>

    </div>


  )
};

export default App;
