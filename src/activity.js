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
            Application UI code in Tailwind CSS
          </h3>
          <p class="mb-4 text-base font-normal text-gray-500">
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-gray-700"
            >Learn more
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
            >March 2022</time
          >
          <h3 class="text-lg font-semibold text-gray-900">
            Marketing UI design in Figma
          </h3>
          <p class="text-base font-normal text-gray-500">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li class="ml-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400"
            >April 2022</time
          >
          <h3 class="text-lg font-semibold text-gray-900">
            E-Commerce UI code in Tailwind CSS
          </h3>
          <p class="text-base font-normal text-gray-500">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </section>
    `;
  }

  akt();
  
  