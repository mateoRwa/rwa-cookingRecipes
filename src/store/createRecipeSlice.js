export const createRecipeSlice = (set, get) => ({
  recipes: [],
  setRecipes: (newrecipes) => {
    set({ recipes: newrecipes });
  },
});
