import { useEffect, useState } from "react";
import { MdFavorite, MdRefresh } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

import LayoutUser from "../../components/layouts/User/LayoutUser";
import CardMakanan from "../../components/Cards/CardMakanan";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagnation/Pagination";

import useFavoriteStore, {
  selectFavorite,
  selectFetchFavorite,
  selectSearchFavorite,
} from "../../stores/favorite";

const Favorite = () => {
  const [search, setSearch] = useState("");

  const favorites = useFavoriteStore(selectFavorite);
  const fetchFavorites = useFavoriteStore(selectFetchFavorite);
  const searchFavorite = useFavoriteStore(selectSearchFavorite);

  useEffect(() => {
    fetchFavorites();
  }, []);

  useEffect(() => {
    searchFavorite(search);
  }, [search]);

  return (
    <LayoutUser>
      <div className="flex items-center justify-between">
        <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
          <MdFavorite size={40} /> Favorite
        </h1>
        <div className="flex gap-1">
          <button
            onClick={fetchFavorites}
            className="flex items-center bg-birutua text-putih p-2 gap-1 rounded-sm hover:bg-oren"
          >
            <MdRefresh size={24} /> Refresh
          </button>
        </div>
      </div>

      <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg mt-5 rounded-lg">
        <Filter setSearch={setSearch} />

        <div className="flex flex-wrap gap-4 px-5">
          {favorites.map((item, i) => (
            <CardMakanan
              key={i}
              item={item}
              icon={<IoMdTrash size={24} action={"delete"} />}
            />
          ))}
        </div>

        <Pagination />
      </div>
    </LayoutUser>
  );
};

export default Favorite;
