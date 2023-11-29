import useFavoriteStore, { selectDeleteFavorite } from "../../stores/favorite";

const CardMakanan = ({ item, icon }) => {
  const deleteFavorite = useFavoriteStore(selectDeleteFavorite);

  return (
    <div className="w-52 flex flex-col bg-base-100 shadow-lg rounded-lg relative">
      <div>
        <button
          className="btn btn-circle btn-sm text-merah absolute right-2 top-2"
          onClick={() => deleteFavorite(item.id)}
        >
          {icon}
        </button>
        <img
          src={item.url}
          alt="makanan"
          className="rounded-ss-lg max-h-36 w-full"
        />
      </div>
      <div className="p-2">
        <h1 className="text-hijau text-lg font-bold mb-2">{item.name}</h1>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between bg-biru text-putih py-1 px-2 rounded-sm">
            <span className="font-bold">Energi</span>
            <span className="font-semibold">{item.energi} kj</span>
          </div>
          <div className="flex justify-between bg-hijau text-putih py-1 px-2 rounded-sm">
            <span className="font-bold">Protein</span>
            <span className="font-semibold">{item.protein} g</span>
          </div>
          <div className="flex justify-between bg-merah text-putih py-1 px-2 rounded-sm">
            <span className="font-bold">Lemak</span>
            <span className="font-semibold">{item.lemak} g</span>
          </div>
          <div className="flex justify-between bg-oren text-putih py-1 px-2 rounded-sm">
            <span className="font-bold">Karbohidrat</span>
            <span className="font-semibold">{item.karbohidrat} g</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMakanan;
