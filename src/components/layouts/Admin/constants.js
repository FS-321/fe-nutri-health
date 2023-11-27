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
        path: "/pasien",
      },
      {
        name: "Data Dokter",
        icon: "MdOutlinePersonalInjury",
        path: "/dokter",
      },
      {
        name: "Data Poliklinik",
        icon: "MdOutlineMapsHomeWork",
        path: "/poliklinik",
      },
      {
        name: "Data Rekam Medis",
        icon: "MdOutlineDataThresholding",
        path: "/rekammedis",
      },
    ],
  },
];
