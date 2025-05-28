import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../utils/utils";

const HomePage = () => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (query) => {
    setLoading(true);
    setRecipe([]);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      setRecipe(data.meals);
      // console.log(data.meals);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value);
  };

  return (
    <>
      <div className="bg-[#faf9fb] h-full p-10 flex-1">
        <div className="ml-6 sm:ml-48 md:ml-64 mx-auto my-10">
          <div className="flex justify-center items-center my-12">
            <p className="text-2xl md:text-4xl font-mono text-slate-700 tracking-wide mx-2 md:mx-8 justify-center items-center">
              Search for your favorite recipes and discover new at Recipe
              Junction! 🏡
            </p>
          </div>
          <form onSubmit={handleSearchRecipe}>
            <label className="input w-[80%] justify-center ml:8 md:ml-16 lg:ml-28  shadow-md flex items-center gap-2 outline-none ">
              <Search size={"24"} />
              <input
                type="text"
                className="text-sm md:text-md grow outline-none"
                placeholder="Dal Makhani, Chicken Curry..."
              />
            </label>
          </form>

          <div className="flex justify-between items-center my-8 px-5 md:px-16">
            <h1 className="font-mono tracking-wide  text-2xl md:text-3xl lg:text-5xl mt-4 ">
              Recommended Recipes
            </h1>
            <p className="text-slate-500 font-semibold ml-1 my-2 text-base tracking-tight">
              Popular choices
            </p>
          </div>

          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {!loading && recipe && recipe.length > 0 ? (
              recipe.map((recipe, index) => (
                <RecipeCard
                  key={index}
                  details={recipe}
                  {...getRandomColor()}
                />
              ))
            ) : (
              <div className="mt-2 ml-2 sm:ml-20 md:ml-40 flex  w-full h-100vh justify-center items-center p-6 md:p-10">
                <loading className="loading loading-spinner loading-lg text-slate-500" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
