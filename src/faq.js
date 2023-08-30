function faq() {
  const faqs = document.getElementById("faq");
  faqs.innerHTML = ` 
  <!-- FAQ -->
  <section id="faq">
    <div class="container mx-auto">
      <h2
        class="mb-2.5 mt-12 md:text-3xl text-xl font-medium leading-tight text-center text-black"
      >
        FAQ
      </h2>
    </div>

    <div
      id="accordion-collapse"
      data-accordion="collapse"
      class="container mx-auto w-[1000px]"
    >
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span class="text-black"
              >Apakah ada tiket masuk ke Curug Cierang?</span
            >
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
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
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-5 border border-b-0 border-gray-200">
            <p class="mb-2 text-gray-500">
              Tidak, untuk saat ini Curug Cierang tidak memungut biaya tiket
              masuk.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 bg-white border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span class="text-black"
              >Apakah bisa dilalui oleh kendaraan roda dua?</span
            >
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
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
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div class="p-5 border border-b-0 border-gray-200">
            <p class="mb-2 text-gray-500">
              Ya tentu saja sangat bisa, karena jalanan menuju Curug Cierang
              ini sudah diaspal dan bisa dilalui oleh kendaraan roda dua.
            </p>
            <p class="mb-2 text-gray-500">
              Namun, untuk menuju ke Curug Cierang, kendaraan roda dua harus
              diparkir di tempat parkir yang sudah disediakan oleh pengelola
              Curug Cierang. Setelah itu, pengunjung harus berjalan kaki
              menuju Curug Cierang. Jarak tempuh dari tempat parkir ke Curug
              Cierang sekitar 500 m.
            </p>
            <p class="text-gray-500">
              Jadi, jangan khawatir untuk membawa kendaraan roda dua ke Curug
              Cierang.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span class="text-black"
              >Apakah lokasinya dekat dengan Geyser Cisolok?</span
            >
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
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
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div class="p-5 border border-t-0 border-gray-200">
            <p class="mb-2 text-gray-500">
              Ya, lokasi Curug Cierang ini dekat dengan Geyser Cisolok yang
              mana hanya berjarak sekitar 2 km. Jadi, jika anda ingin
              mengunjungi Curug Cierang, anda juga bisa mengunjungi Geyser
              Cisolok.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-4">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
            data-accordion-target="#accordion-collapse-body-4"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-4"
          >
            <span class="text-black"
              >Apa saja fasilitas yang ada di Curug Cierang?</span
            >
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
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
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-4"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-4"
        >
          <div class="p-5 border border-t-0 border-gray-200">
            <p class="mb-2 text-gray-500">
              Fasilitas yang ada di Curug Cierang ini berupa tempat parkir, WC, spot foto yang indah dan gazebo untuk tempat peristirahatan.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    `;
}
faq();

// Get all the accordion buttons
const accordionButtons = document.querySelectorAll("[data-accordion-target]");

// Add click event listener to each accordion button
accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-accordion-target");
    const body = document.querySelector(target);

    if (body.classList.contains("hidden")) {
      // Show the accordion body
      body.classList.remove("hidden");
      button.setAttribute("aria-expanded", "true");
    } else {
      // Hide the accordion body
      body.classList.add("hidden");
      button.setAttribute("aria-expanded", "false");
    }
  });
});
