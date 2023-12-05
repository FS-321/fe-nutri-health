export const MENU_LIST = [
  {
    name: "Dashboard",
    icon: "MdDashboard",
    path: "/dashboard",
  },
  {
    name: "Makanan",
    icon: "MdFastfood",
    path: "/makanan",
  },
  {
    name: "Layanan",
    icon: "MdOutlineAccessTimeFilled",
    path: "/layanan",
  },
  {
    name: "Data",
    icon: "MdWysiwyg",
    child: [
      {
        name: "Data Pasien",
        icon: "MdOutlinePeople",
        path: "/data/pasien",
      },
      {
        name: "Data Dokter",
        icon: "MdPerson",
        path: "/data/dokter",
      },
      {
        name: "Data Poliklinik",
        icon: "MdOutlineMapsHomeWork",
        path: "/data/poliklinik",
      },
      {
        name: "Data Rekam Medis",
        icon: "MdOutlineDataThresholding",
        path: "/data/rekammedis",
      },
    ],
  },
];
