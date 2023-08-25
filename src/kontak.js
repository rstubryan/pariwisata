function kontak() {
  const kontaks = document.getElementById("contact");
  kontaks.innerHTML = ` 
    <!-- Kontak -->
    <section id="contact">
      <div class="container mx-auto text-center">
        <h2
          class="mb-2.5 mt-12 md:text-3xl text-xl font-medium leading-tight text-center text-black"
        >
          Kontak
        </h2>
      </div>

      <div class="md:ml-[710px] md:flex md:flex-cols container mx-auto">
      <div
        class="block max-w-max rounded-lg bg-gray-200 hover:bg-gray-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
      >
        <div
          class="border-b-2 border-gray-300 px-6 py-3 text-black text-center"
        >
          Email
        </div>
        <div class="p-6">
          <p class="text-base text-black">desawangunsari2019@gmail.com</p>
        </div>
      </div>

      <div
        class="block max-w-max rounded-lg bg-gray-200 hover:bg-gray-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
      >
        <div
          class="border-b-2 border-gray-300 px-6 py-3 text-black text-center"
        >
          No. Telpon
        </div>
        <div class="p-6">
          <p class="text-base text-black">085703025651</p>
        </div>
      </div>
    </div>

      <div class="mt-12"></div>
    </section>
    `;
}

kontak();
