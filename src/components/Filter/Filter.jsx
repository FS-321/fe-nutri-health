import { BiFilter } from "react-icons/bi";

const Filter = () => {
  return (
    <div className="w-full flex items-center justify-between p-5">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full h-10 max-w-xs"
      />
      <details className="dropdown">
        <summary className="btn btn-outline btn-success">
          Filter <BiFilter />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Asc</a>
          </li>
          <li>
            <a>Desc</a>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default Filter;
