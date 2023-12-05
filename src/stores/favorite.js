import create from "zustand";
import { produce } from "immer";
import api from "../api";

import { userLogin } from "../utils/userAuth";

// const user = userLogin();
// const data = [
//   {
//     id: 1,
//     name: "Udang",
//     url: "https://www.dapurkobe.co.id/wp-content/uploads/udang-goreng-bumbu.jpg",
//     energi: "2",
//     protein: "3",
//     lemak: "4",
//     karbohidrat: "5",
//   },
//   {
//     id: 2,
//     name: "Cumi",
//     url: "https://pict.sindonews.net/dyn/850/pena/news/2021/03/08/185/357390/resep-cumi-goreng-tepung-yang-empuk-krenyes-ghy.jpg",
//     energi: "2",
//     protein: "3",
//     lemak: "4",
//     karbohidrat: "5",
//   },
//   {
//     id: 3,
//     name: "Telur",
//     url: "https://img-global.cpcdn.com/recipes/c04ca908eed73ee0/680x482cq70/telur-dadar-tepung-foto-resep-utama.jpg",
//     energi: "2",
//     protein: "3",
//     lemak: "4",
//     karbohidrat: "5",
//   },
//   {
//     id: 4,
//     name: "Ikan",
//     url: "https://awsimages.detik.net.id/community/media/visual/2023/06/15/resep-fillet-ikan-goreng-tepung_43.jpeg?w=600&q=90",
//     energi: "2",
//     protein: "3",
//     lemak: "4",
//     karbohidrat: "5",
//   },
// ];

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
