import LayoutAdmin from "../components/layouts/Admin/LayoutAdmin";
import { useState } from "react";
import { MdPeople, MdEdit, MdDelete } from "react-icons/md";

const initialData = [
  {
    id: 1,
    nama: "Johndoe",
    jenisKelamin: "Laki-laki",
    email: "jane@gmail.com",
    telp: "0812",
    alamat: "Jogja",
  },
];

const Pasien = () => {
  // State for managing data
  const [data, setData] = useState(initialData);

  // State for form input
  const [formData, setFormData] = useState({
    nama: "",
    jenisKelamin: "",
    email: "",
    telp: "",
    alamat: "",
  });

  // Function to handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission (create/update)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if form is in edit mode
    if (formData.id) {
      // Update existing data
      setData((prevData) =>
        prevData.map((item) => (item.id === formData.id ? formData : item))
      );
    } else {
      // Create new data
      setData((prevData) => [...prevData, { ...formData, id: Date.now() }]);
    }

    // Reset form data
    setFormData({
      nama: "",
      jenisKelamin: "",
      email: "",
      telp: "",
      alamat: "",
    });
  };

  // Function to handle edit button click
  const handleEdit = (id) => {
    const selectedData = data.find((item) => item.id === id);
    setFormData(selectedData);
  };

  // Function to handle delete button click
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };
  return (
    <LayoutAdmin>
      <div className="container mx-auto my-5">
        <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
          <MdPeople size={40} /> Data Pasien
        </h1>

        {/* Table */}
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-hijau text-putih">
              <th className="p-2">No</th>
              <th className="p-2">Nama Pasien</th>
              <th className="p-2">Jenis Kelamin</th>
              <th className="p-2">Email</th>
              <th className="p-2">Telepon</th>
              <th className="p-2">Alamat</th>
              <th className="p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="text-hitam">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{item.nama}</td>
                <td className="p-2">{item.jenisKelamin}</td>
                <td className="p-2">{item.email}</td>
                <td className="p-2">{item.telp}</td>
                <td className="p-2">{item.alamat}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="text-kuning">
                    <MdEdit size={25} />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-merah">
                    <MdDelete size={25} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-5">
          <label className="block mb-2" htmlFor="nama">
            Nama Pasien:
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </label>

          <label className="block mb-2" htmlFor="jenisKelamin">
            Jenis Kelamin:
            <input
              type="text"
              id="jenisKelamin"
              name="jenisKelamin"
              value={formData.jenisKelamin}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </label>

          <label className="block mb-2" htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </label>

          <label className="block mb-2" htmlFor="telp">
            Telepon:
            <input
              type="text"
              id="telp"
              name="telp"
              value={formData.telp}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </label>

          <label className="block mb-2" htmlFor="alamat">
            Alamat:
            <input
              type="text"
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </label>
        </form>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Simpan
        </button>
      </div>
    </LayoutAdmin>
  );
};
export default Pasien;
