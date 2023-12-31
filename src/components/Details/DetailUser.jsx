import React from "react";
import { formatDate } from "../../utils/formatDate";

const DetailUser = ({ data }) => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-2 bg-base-100 shadow-lg mt-5 rounded-lg p-5">
      <div className="mb-5">
        <img
          src="https://i.pinimg.com/originals/c6/e9/ed/c6e9ed167165ca99c4d428426e256fae.png"
          alt="profile"
          className="rounded-full w-40"
        />
      </div>

      <div className="w-full flex gap-5">
        <div className="w-full flex flex-col gap-2">
          <label className="text-hijau text-xl font-semibold">
            Nama Lengkap
          </label>
          <div className="border border-abu py-2 px-3 rounded-lg text-xl">
            {data.nama_depan} {data.nama_belakang}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-hijau text-xl font-semibold">No Telepon</label>
          <div className="border border-abu py-2 px-3 rounded-lg text-xl">
            {data.no_hp ? data.no_hp : "Null"}
          </div>
        </div>
      </div>
      <div className="w-full flex gap-5">
        <div className="w-full flex flex-col gap-2">
          <label className="text-hijau text-xl font-semibold">
            Tanggal Lahir
          </label>
          <div className="border border-abu py-2 px-3 rounded-lg text-xl">
            {formatDate(data.tanggal_lahir)}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-hijau text-xl font-semibold">Email</label>
          <div className="border border-abu py-2 px-3 rounded-lg text-xl">
            {data.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
