/* eslint-disable no-unused-vars */
import React from "react";

import Hero from "../../components/Hero/Hero";
import Story from "../../components/Story/Story";
import Partner from "../../components/Partner/Partner";

import { useSelector as UseSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";

function HomePage() {
  useAuth();
  const user = UseSelector((state) => state.user.value);
  // console.log(user);

  return (
    <div>
      <h2> username here {user.username}</h2>
      <Hero />
      <Story />
      <Partner />
    </div>
  );
}

export default HomePage;
