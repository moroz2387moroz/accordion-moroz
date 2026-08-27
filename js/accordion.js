const btns = document.querySelectorAll(".feature__link");
const lists = document.querySelectorAll(".feature-sub");

btns.forEach((item, idx) => {
  item.addEventListener("click", () => {
    btns.forEach((item, idx) => {
      item.classList.remove("feature__link_active");
    });
    item.classList.add("feature__link_active");

    lists.forEach((listItem) => {
      listItem.classList.add("hidden");
    });
    lists[idx].classList.remove("hidden");
  });
});
