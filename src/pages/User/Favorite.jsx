import { MdFavorite } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

import LayoutUser from "../../components/layouts/User/LayoutUser";
import CardMakanan from "../../components/Cards/CardMakanan";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagnation/Pagination";

import useFavoriteStore, { selectFavorite } from "../../stores/favorite";

const Favorite = () => {
  const favorites = useFavoriteStore(selectFavorite);

  return (
    <LayoutUser>
      <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
        <MdFavorite size={40} /> Favorite
      </h1>

      <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg mt-5 rounded-lg">
        <Filter />

        <div className="flex flex-wrap gap-4 px-5">
          {favorites.map((item, i) => (
            <CardMakanan key={i} item={item} icon={<IoMdTrash size={24} />} />
          ))}
        </div>

        <Pagination />
      </div>
    </LayoutUser>
  );
};

export default Favorite;
