function foot() {
  const foots = document.getElementById("footer");
  foots.innerHTML = ` 
    <!-- Footer -->
    <section id="footer">
      <footer class="bg-gray-500" id="foot">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0 max-[767px]:hidden">
              <a
                href="https://www.instagram.com/curug.cierang/"
                target="_blank"
                class="flex items-center"
              >
                <img src="img/logo.png" class="h-8 mr-3" alt="KKN Logo" />
                <span
                  class="self-center text-2xl max-[767px]:text-lg font-semibold whitespace-nowrap text-white hover:text-black"
                  >Curug Cierang</span
                >
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-black uppercase">
                  Informasi
                </h2>
                <ul class="text-white font-medium">
                  <li class="mb-4">
                    <a
                      href="https://wangunsari.desa.id/"
                      target="_blank"
                      class="hover:underline hover:text-white"
                      >Google Maps</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      class="hover:underline hover:text-white"
                      >Website Desa
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-black uppercase">
                  Follow us
                </h2>
                <ul class="text-white font-medium">
                  <li class="mb-4">
                    <a
                      href="https://www.instagram.com/kkn_desawangunsari/"
                      target="_blank"
                      class="hover:underline"
                      >Instagram</a
                    >
                  </li>
                  <li>
                    <a href="#" target="_blank" class="hover:underline"
                      >TikTok</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-black uppercase">
                  Legal
                </h2>
                <ul class="text-white font-medium">
                  <li class="mb-4">
                    <a href="#" target="_blank" class="hover:underline"
                      >Privacy Policy</a
                    >
                  </li>
                  <li>
                    <a href="#" target="_blank" class="hover:underline"
                      >Terms &amp; Conditions</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-white sm:mx-auto lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-white sm:text-center"
              >© 2023
              <a href="index.html" class="hover:underline">Desa Wangunsari</a>.
              All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a
                href="https://github.com/rstubryan/kkn"
                target="_blank"
                class="text-white hover:text-black"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
    `;
}

foot();
