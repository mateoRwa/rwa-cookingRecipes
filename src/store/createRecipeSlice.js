export const createRecipeSlice = (set, get) => ({
  recipes: [],
  setRecipes: (recipes) => {
    set({ recipes: recipes });
  },
});
