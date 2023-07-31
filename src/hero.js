function heroImage() {
  let hero = document.getElementById("hero-button");
  hero.innerHTML = ` 
  <!-- Hero -->
  <section>
    <div
      class="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
      style="background-image: url('img/water.webp'); height: 400px"
    >
      <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.6)"
      >
        <div class="flex h-full items-center justify-center">
          <div class="text-white">
            <h2 class="mb-4 md:text-4xl text-2xl font-semibold">Curug Cierang</h2>
            <h4 class="mb-6 md:text-xl text-sm font-semibold">
              Mari berpetualang dengan destinasi curug yang menantang!
            </h4>
            <button
              type="button"
              class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-white hover:text-black focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
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
  let btn1 = document.getElementById("btn-1");
  btn1.addEventListener("click", function () {
    window.open(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
    );

    btn1.classList.add("animate-pulse");
    btn1.innerHTML = "Loading...";

    setTimeout(function () {
      btn1.classList.remove("animate-pulse");
      btn1.innerHTML = "Hayuu!";
    }, 5000);

    btn1.classList.add("hover:bg-black");
  });
}

heroButton();
