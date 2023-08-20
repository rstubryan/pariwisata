function abt() {
  const abts = document.getElementById("about");
  abts.innerHTML = ` 
    <!-- About -->
    <section id="about">
      <div class="container mx-auto">
        <h2
          class="mb-2.5 mt-12 md:text-3xl text-xl font-medium leading-tight text-center text-black"
        >
          Tentang
        </h2>
      </div>

      <div class="container mx-auto text-center w-[1000px]">
        <p class="text-gray-500">
          Does your user know how to exit out of screens? Can they follow your
          intended user journey and buy something from the site you’ve designed?
          By running a usability test, you’ll be able to see how users will
          interact with your design once it’s live.
        </p>
        <blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-200">
          <p class="text-xl italic font-medium leading-relaxed text-gray-900">
            "Flowbite is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application."
          </p>
        </blockquote>
        <p class="text-gray-500">
          First of all you need to understand how Flowbite works. This library
          is not another framework. Rather, it is a set of components based on
          Tailwind CSS that you can just copy-paste from the documentation.
        </p>
      </div>
    </section>
        `;
}

abt();
