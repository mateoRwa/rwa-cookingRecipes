import { create } from "zustand";
import { createAuthSlice } from "./createAuthSlice";
import { createRecipeSlice } from "./createRecipeSlice";

const useStore = create((set, get) => ({
  ...createAuthSlice(set, get),
  ...createRecipeSlice(set, get),
}));

export default useStore;
