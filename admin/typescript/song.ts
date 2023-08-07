const endpoint = "http://localhost:3030/song/";
const tableBody = document.querySelector(".table-body");
const form = document.querySelector("#form") as HTMLFormElement;
let stt = 0;

interface SongData {
  title: string;
  duration: string;
  artist: string;
  album: string;
}

const data = async () => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
};

const row = (obj: SongData, stt: Number) => {
  const template = `
    <tr>
        <th scope="row">${stt}</th>
        <td>${obj.title}</td>
        <td>${obj.duration}</td>
        <td>${obj.duration}</td>
        <td>${obj.album}</td>
    </tr>
    `;
  tableBody?.insertAdjacentHTML("beforeend", template);
};

const renderSong = async () => {
  const listSong = await data();
  if (listSong.length > 0 && Array.isArray(listSong)) {
    listSong.map((song) => {
      stt++;
      row(song, stt);
    });
  }
};

// post
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(this);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", endpoint, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        alert("Dữ liệu đã được gửi lên server thành công!");
      } else {
        console.error("Đã xảy ra lỗi khi gửi dữ liệu lên server.");
      }
    }
  };
  xhr.send(formData);
});
renderSong();
