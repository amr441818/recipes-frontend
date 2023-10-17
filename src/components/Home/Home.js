import React from "react";
import Header from "../Header/Header";
import Recipes from "../Recipes/Recipes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Recipes />
    </div>
  );
};

export default Home;
