function akt() {
    const akts = document.getElementById("activity");
    akts.innerHTML = ` 
    <!-- Aktivitas -->
    <section id="activity">
      <div class="container mx-auto text-center">
        <h2
          class="mb-2.5 mt-12 md:text-3xl text-xl font-medium leading-tight text-center text-black"
        >
          Aktivitas
        </h2>
      </div>

      <ol
        class="relative border-l border-gray-200 container mx-auto w-[1000px]"
      >
        <li class="mb-10 ml-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400"
            >Agustus 2023</time
          >
          <h3 class="text-lg font-semibold text-gray-900">
            Launching destinasi wisata Curug Cierang
          </h3>
          <p class="mb-4 text-base font-normal text-gray-500">
            Peluncuran destinas wisata Curug Cierang yang berada di Desa Wangunsari dilaksanakan di lapangan Cierang.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-gray-700"
            >Video launching
            <svg
              class="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              /></svg
          ></a>
        </li>
        <li class="mb-10 ml-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400"
            >Desember 2023</time
          >
          <h3 class="text-lg font-semibold text-gray-900">
            Pembukaan wisata baru di Curug Cierang
          </h3>
          <p class="text-base font-normal text-gray-500">
            Pembukaan wisata baru ini dilakukan untuk menambah daya tarik wisata di Curug Cierang, sehingga dapat menarik wisatawan untuk berkunjung.
          </p>
        </li>
        <li class="ml-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400"
            >Januari 2024</time
          >
          <h3 class="text-lg font-semibold text-gray-900">
            Tempat kemah di lapangan Cierang
          </h3>
          <p class="text-base font-normal text-gray-500">
            Tempat kemah ini dibuat untuk memudahkan wisatawan yang ingin berkemah di Curug Cierang.
          </p>
        </li>
      </ol>
    </section>
    `;
  }

  akt();
  
  