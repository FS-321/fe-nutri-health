import React from "react";

const DetailUser = ({ data }) => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-2 bg-base-100 shadow-lg mt-5 rounded-lg p-5">
      <div className="mb-5">
        <img
          src="https://reqres.in/img/faces/1-image.jpg"
          alt="profile"
          className="rounded-full"
        />
      </div>

      <div className="w-full flex gap-5">
        <div className="w-full flex flex-col gap-2">
          <label className="text-hijau text-xl font-semibold">
            Nama Lengkap
          </label>
          <div className="border border-abu py-2 px-3 rounded-lg text-xl">
            {data.title}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-hijau text-xl font-semibold">No Telepon</label>
          <div className="border border-abu py-2 px-3 rounded-lg text-xl">
            {data.price}
          </div>
        </div>
      </div>
      <div className="w-full flex gap-5">
        <div className="w-full flex flex-col gap-2">
          <label className="text-hijau text-xl font-semibold">
            Jenis Kelamin
          </label>
          <div className="border border-abu py-2 px-3 rounded-lg text-xl">
            {data.brand}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-hijau text-xl font-semibold">Email</label>
          <div className="border border-abu py-2 px-3 rounded-lg text-xl">
            {data.category}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label className="text-hijau text-xl font-semibold">Alamat</label>
        <div className="border border-abu py-2 px-3 rounded-lg text-xl">
          {data.description}
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
