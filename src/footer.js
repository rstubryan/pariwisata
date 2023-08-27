function foot() {
  const foots = document.getElementById("footer");
  foots.innerHTML = ` 
    <!-- Footer -->
    <section id="footer">
      <footer class="bg-gray-200 shadow">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="#" class="flex items-center mb-4 sm:mb-0">
                    <img src="img/logo1.png" class="h-8 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">Curug Cierang</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Website Desa</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center">© 2023 <a href="https://wangunsari.desa.id/" class="hover:underline">Desa Wangunsari™</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </section>
    `;
}

foot();
