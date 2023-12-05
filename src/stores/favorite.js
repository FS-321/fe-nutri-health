import create from "zustand";
import { produce } from "immer";
import api from "../api";

const sliceFavorite = (set) => ({
  favorite: [],
  error: null,

  fetchFavorite: async () => {
    const { data } = await api.get("/favorite", { pages: 1, limit: 1 });

    const makananPromises = data.map(async (item) => {
      const response = await api.get(`makanan/${item.makanan_id}`);
      return response.data;
    });

    const result = await Promise.all(makananPromises);

    set(
      produce((state) => {
        state.favorite = result;
      })
    );
  },

  addFavorite: (id) => {
    set(
      produce(async (state) => {
        const findId = state.favorite.some((state) => state.id === id);

        if (findId) {
          state.error = "id sudah ada";
        } else {
          await api.post(`/makanan/${id}/favorite`);
        }
      })
    );
  },

  deleteFavorite: (id) => {
    set(
      produce(async (state) => {
        return await api.delete(`/makanan/${id}/favorite`);
      })
    );
  },
});

const useFavoriteStore = create(sliceFavorite);

export const selectFavorite = (state) => state.favorite;
export const selectError = (state) => state.error;
export const selectFetchFavorite = (state) => state.fetchFavorite;
export const selectAddFavorite = (state) => state.addFavorite;
export const selectDeleteFavorite = (state) => state.deleteFavorite;

export default useFavoriteStore;
