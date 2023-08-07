"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const endpoint = "http://localhost:3030/song/";
const tableBody = document.querySelector(".table-body");
const form = document.querySelector("#form");
let stt = 0;
const data = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(endpoint);
    const data = yield res.json();
    return data;
});
const row = (obj, stt) => {
    const template = `
    <tr>
        <th scope="row">${stt}</th>
        <td>${obj.title}</td>
        <td>${obj.duration}</td>
        <td>${obj.duration}</td>
        <td>${obj.album}</td>
    </tr>
    `;
    tableBody === null || tableBody === void 0 ? void 0 : tableBody.insertAdjacentHTML("beforeend", template);
};
const renderSong = () => __awaiter(void 0, void 0, void 0, function* () {
    const listSong = yield data();
    if (listSong.length > 0 && Array.isArray(listSong)) {
        listSong.map((song) => {
            stt++;
            row(song, stt);
        });
    }
});
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
            }
            else {
                console.error("Đã xảy ra lỗi khi gửi dữ liệu lên server.");
            }
        }
    };
    xhr.send(formData);
});
renderSong();
