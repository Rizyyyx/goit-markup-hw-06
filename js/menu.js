(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    console.error('One or more modal elements not found!');
    return;
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  console.log("⏺️ openModalBtn:", refs.openModalBtn);
  console.log("⏺️ closeModalBtn:", refs.closeModalBtn);
  console.log("⏺️ modal:", refs.modal);

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    console.error("❌ Один з елементів не знайдено!");
    return;
  }

  refs.openModalBtn.addEventListener("click", () => {
    console.log("✅ Клік по openModalBtn");
    toggleModal();
  });

  refs.closeModalBtn.addEventListener("click", () => {
    console.log("✅ Клік по closeModalBtn");
    toggleModal();
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    console.log("↔️ is-open клас:", refs.modal.classList.contains("is-open"));
  }
})();
