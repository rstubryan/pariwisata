function heroImage() {
  const hero = document.getElementById("hero");
  hero.innerHTML = ` 
  <!-- Hero -->
  <section id="hero">
    <div
      class="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center md:h-[800px] h-[400px]"
      style="background-image: url('https://raw.githubusercontent.com/rstubryan/assets/master/gambar/curug/curug1.jpg')"
    >
      <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.6)"
      >
        <div class="flex h-full items-center justify-center">
          <div class="text-white">
            <h2 class="md:mb-5 mb-2 md:text-5xl text-2xl font-semibold">Wisata<span class="inline-block whitespace-nowrap rounded-xl px-[0.25em] pb-[0.20em] pt-[0.20em] text-center align-baseline md:text-5xl text-2xl font-bold leading-none text-white"
            >Curug Cierang</span> </h2>
            <h3 class="md:mb-7 mb-2 md:text-6xl text-3xl font-bold">Desa Wangunsari Pelabuan Ratu</h3>
            <h4 class="md:text-xl md:mr-0 md:ml-0 text-sm mr-6 ml-6 font-semibolds text-gray-300">
              Selamat datang di dunia keajaiban alam yang memukau! Mari kita berpetualang bersama
            </h4>
            <h4 class="md:mt-2 md:text-xl md:mr-0 md:ml-0 text-sm mr-10 ml-10 font-semibolds text-gray-300">
              dan terpesona dengan keindahan tak tergoyahkan dari Curug Cierang.
            </h4>
            <div class="md:mt-7 mt-4"></div>
            <button
              type="button"
              class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-white bg-gray-500 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-white hover:text-black focus:border-teal-400 focus:text-black focus:outline-none focus:ring-0 active:border-teal-700 active:text-black"
              data-te-ripple-init
              data-te-ripple-color="light"
              id="btn-1"
            >
              Hayuu!
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero -->
  `;
}

heroImage();

function heroButton() {
  const btn1 = document.getElementById("btn-1");
  btn1.addEventListener("click", function () {
    window.open("https://www.youtube.com/@wangunsarichannel");

    btn1.classList.add("animate-pulse");
    btn1.innerHTML = "Loading...";

    setTimeout(function () {
      btn1.classList.remove("animate-pulse");
      btn1.innerHTML = "Hayuu!";
    }, 5000);

    btn1.classList.add("hover:bg-teal-700");
  });
}

heroButton();
