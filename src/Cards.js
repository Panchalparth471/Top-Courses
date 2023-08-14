import { useState } from "react";
import Card from "./Card";

function Cards({ courses ,category}) {
    
    let allCourses = [];
    const [likedCourses, setLikedCourses] = useState([]);
    //Returns you a list of all courses recieved from the api response
    const getCourse = () => {

        if (category === "All") 
        {
            Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => { 
                allCourses.push(course);
            })
        })
      
        return allCourses;
        
        }
       
        else {
            //Show courses of only particular category 
            return courses[category];
        }
      
    }

    return (
        <div className="flex flex-wrap gap-4 mb-4 justify-center"> 
            {
               getCourse().map((course) => {
                   return (<Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>)
                })
            }
        </div>

    );
}

export default Cards