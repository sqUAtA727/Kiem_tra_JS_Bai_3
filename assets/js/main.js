const buttons = document.querySelectorAll("#buttons button");
const result = document.getElementById("result");
const resourceType = document.getElementById("resource-type");

const renderData = (data) => {
  let html = "";
  data.slice(0, 5).forEach(item => {
    html += `<li>${item.title}</li>`;
  });
  result.innerHTML = html;
};

// Hàm fetch dữ liệu từ API
const fetchData = async (type) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
  const data = await res.json();
  renderData(data);
};

// Xử lý sự kiện click
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Xóa active cũ
    buttons.forEach(btn => btn.classList.remove("active"));
    // Thêm active cho nút được chọn
    button.classList.add("active");

    const type = button.dataset.type;
    resourceType.innerText = type;

    fetchData(type);
  });
});

// Lấy dữ liệu mặc định khi trang được tải
fetchData("posts");