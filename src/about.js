function aboutJS() {
  const about = document.getElementById("about");
  about.innerHTML = ` 
    <!-- About -->
    <section id="about">
      <div class="container mx-auto">
        <h2
          class="mb-2.5 mt-12 md:text-3xl text-xl font-medium leading-tight text-center"
        >
          Destinasi Wisata
          <span
            class="inline-block whitespace-nowrap rounded-[0.27rem] bg-black px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-white"
            >Baru</span
          >
        </h2>
      </div>
      <!-- About -->

      <!-- Features -->
        <div
          id="carouselExampleCaptions"
          class="relative"
          data-te-carousel-init
          data-te-carousel-slide
        >
          <!--Carousel indicators-->
          <div
            class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators
          >
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="0"
              data-te-carousel-active
              class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="1"
              class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="2"
              class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 3"
            ></button>
          </div>

          <!--Carousel items-->
          <div
            class="md:w-[1200px] w-96 overflow-hidden after:clear-both after:block after:content-[''] container mx-auto"
          >
            <!--First item-->
            <div
              class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-active
              data-te-carousel-item
              style="backface-visibility: hidden"
            >
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                class="block w-full"
                alt="..."
              />
              <div
                class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"
              >
                <h5 class="text-xl">First slide label</h5>
                <p>
                  Curug yang memiliki keindahan alam yang sangat sejuk dan asri.
                </p>
              </div>
            </div>
            <!--Second item-->
            <div
              class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              style="backface-visibility: hidden"
            >
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                class="block w-full"
                alt="..."
              />
              <div
                class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"
              >
                <h5 class="text-xl">Second slide label</h5>
                <p>Banyak spot foto yang indah.</p>
              </div>
            </div>
            <!--Third item-->
            <div
              class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              style="backface-visibility: hidden"
            >
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                class="block w-full"
                alt="..."
              />
              <div
                class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"
              >
                <h5 class="text-xl">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>

          <!--Carousel controls - prev item-->
          <button
            class="absolute bottom-0 left-0 md:left-72 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="prev"
          >
            <span class="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Previous</span
            >
          </button>
          <!--Carousel controls - next item-->
          <button
            class="absolute bottom-0 right-0 md:right-72 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="next"
          >
            <span class="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Next</span
            >
          </button>
        </div>
    </section>
    <!-- Features -->
    `;
}
aboutJS();

<script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js"></script>;
import { Carousel, initTE } from "tw-elements";

function aboutTW() {
  initTE({ Carousel });
}
aboutTW();
