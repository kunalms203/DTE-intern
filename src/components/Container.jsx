import React, { useState, useEffect } from "react";
import "./container.css";
import Card from "./Card";
import axios from "axios";
import Board from "./Board";

const Container = () => {
  const [content, setContent] = useState(null);
  
  const getData = async () => {
    try {
      const {data} = await axios.get("/app.json"); // File in the public folder
      const task = data.tasks[0].assets ;
      setContent(task);
    } catch (e) {
      console.log("Error fetching data:", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
      console.log("Content updated:");
  }, []);

  return (
    <div className="container">
      <div className="title">
        <span>Technical Project Management</span>
        <button>Submit Task</button>
      </div>
      <div className="box">
        <p className="bold">Explore the world of management</p>
        <p className="normal">
          As a project manager, you play an important role in leading a project
          through initiation, planning, execution, monitoring, controlling, and
          completion. How? Do you want to manage each and every step of your
          life?
        </p>
      </div>
      <div className="container-card">
        {content ? (
          content.map((task, index) => (
            <Card
              key={index}
              title={task.asset_title}
              description={task.asset_description}
              content={task.asset_content
              }
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      < Board name={content}/>
    </div>
  );
};

export default Container;
