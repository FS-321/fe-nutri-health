export function formatDate(tanggal) {
  try {
    const tanggalObj = new Date(tanggal);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const tanggalFormatted = tanggalObj.toLocaleDateString("id-ID", options);
    return tanggalFormatted;
  } catch (error) {
    return "Format tanggal tidak valid";
  }
}
