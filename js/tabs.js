const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");
const tabsContentElems = document.querySelectorAll("[data-tabs-field]");
const tabsTitleElems = document.querySelectorAll(".design__title");

tabsHandlerElems.forEach((button) => {
  button.addEventListener("click", () => {
    tabsHandlerElems.forEach((item) => {
      item.classList.toggle("design-list__item_active", item === button);
    });

    tabsContentElems.forEach((content) => {
      const isActive = content.dataset.tabsField === button.dataset.tabsHandler;
      content.classList.toggle("hidden", !isActive);
    });

    tabsTitleElems.forEach((title) => {
      const isActive = title.dataset.tabsField === button.dataset.tabsHandler;
      title.classList.toggle("hidden", !isActive);
    });
  });
});
