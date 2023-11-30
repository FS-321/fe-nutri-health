const Filter = () => {
  return (
    <div className="w-full flex items-center justify-between p-5">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full h-10 max-w-xs"
      />
      <select className="select w-28 text-lg border-hijau text-hijau">
        <option disabled selected>
          Filter
        </option>
        <option>Asc</option>
        <option>Desc</option>
      </select>
    </div>
  );
};

export default Filter;
