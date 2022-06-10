import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    UserService.getDragonContent().then(
      (response) => {
        setContent(response.data);
        console.log(content);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div>
      {content.map((item) => {
        <>
          <div>{item.name}</div>
          <div>{item.id}</div>
          <div>{item.type}</div>
          <div>{item.createdAt}</div>
        </>;
      })}
    </div>
  );
};

export default Home;
