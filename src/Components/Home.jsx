import React from "react";
import { useState,useEffect } from "react";
import {supabase} from "../client"
import Card from "./Card";
import './Home.css'

const Home = (props) =>{
    const[posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setPosts(props.data)
        const fetchPost= async() =>{
            const{data} = await supabase
            .from('Post')
            .select()
            setPosts(data)
            setLoading(false); // 👈 done loading
        }
        fetchPost()
    }, [props]);

    return (
      <div className="home-container">
      {loading ? (
      <div className="loader-container">
      <div className="spinner"></div>
      </div>
      ) : posts && posts.length > 0 ? (
            posts.map((post, index) => (
              <Card
                key={index}
                title={post.Title}
                likes={post.Like}
               
              />
            ))
          ) : (
            <p>No posts yet.</p>
          )}
        </div>
      );
    };
    
    export default Home;
    


