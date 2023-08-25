function navBar() {
  const navbar = document.getElementById("nav");
  navbar.innerHTML = ` 
  <!-- Navbar -->
  <section id="nav">
    <nav class="bg-white border-gray-200">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="#" class="flex items-center">
          <img src="img/logo1.png" class="h-8 mr-3" alt="KKN" />
          <span
            class="self-center text-lg md:text-2xl font-semibold whitespace-nowrap text-black"
            >Curug Cierang</span
          >
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-16 md:mt-0 md:border-0 md:bg-white"
          >
            <li>
              <a
                href="#hero"
                class="block py-2 pl-3 pr-4 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-500 md:p-0"
                aria-current="page"
                >Beranda</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0"
                >Tentang</a
              >
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 md:w-auto"
              >
                Panduan Akses
                <svg
                  class="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
              >
                <ul
                  class="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a href="#activity" class="block px-4 py-2 hover:bg-gray-100"
                      >Aktivitas</a
                    >
                  </li>
                  <li>
                    <a href="#carousel" class="block px-4 py-2 hover:bg-gray-100"
                      >Galeri</a
                    >
                  </li>
                  <li>
                    <a href="#gmaps" class="block px-4 py-2 hover:bg-gray-100"
                      >Google Maps</a
                    >
                  </li>
                  <li>
                    <a href="#testimoni" class="block px-4 py-2 hover:bg-gray-100"
                      >Testimoni</a
                    >
                  </li>
                  <li>
                    <a href="#faq" class="block px-4 py-2 hover:bg-gray-100"
                      >FAQ</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#contact"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0"
                >Kontak</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
  <!-- Navbar -->
    `;
}
navBar();

function naviBar() {
  const collapseToggles = document.querySelectorAll("[data-collapse-toggle]");
  const dropdownToggles = document.querySelectorAll("[data-dropdown-toggle]");

  collapseToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const target = document.querySelector(
        `#${toggle.getAttribute("data-collapse-toggle")}`
      );
      target.classList.toggle("hidden");
    });
  });

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const target = document.querySelector(
        `#${toggle.getAttribute("data-dropdown-toggle")}`
      );
      target.classList.toggle("hidden");
    });
  });
}
naviBar();
