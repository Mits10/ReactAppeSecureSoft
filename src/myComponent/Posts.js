import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Posts.css'
export default function Posts() {

    const url = "https://jsonplaceholder.typicode.com/posts"
    const [posts,setPosts] = useState(null)
   let content =null
    useEffect(()=>{
        axios.get(url)
            .then(response => {
                setPosts(response.data)
                })
},[url])
if(posts){
    content = 
    <div>
        <div className="gridContainer">
        {posts.map(post => (
            <>
            <div className="gridItem">
             <li key={post.id}></li>
           <h1>{post.title}</h1>
           <h1>{post.body}</h1>
           </div>
           </>
          ))}
          </div>
    </div>
}
    
 return(
     <>
     <div>
         {content}
     </div>
     </>
 )           
}
