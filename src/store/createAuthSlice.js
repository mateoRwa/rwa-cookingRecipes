export const createAuthSlice = (set, get) => ({
  token: null,
  setToken: (token) => {
    set({ token: token });
  },
});
