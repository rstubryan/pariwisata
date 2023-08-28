function kontak() {
  const kontaks = document.getElementById("contact");
  kontaks.innerHTML = ` 
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <!-- Kontak -->
    <section id="contact">
      <div class="container mx-auto text-center">
        <h2
          class="mb-2.5 mt-12 md:text-3xl text-xl font-medium leading-tight text-center text-black"
        >
          Kontak
        </h2>
      </div>      

      <div class="md:flex md:flex-cols md:w-[45%] container mx-auto">
      <div class="container mx-auto">
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow container mx-auto">
          <i class="fas fa-envelope w-7 h-7 text-gray-500 mb-3"></i>
          <a href="#contact">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">E-Mail</h5>
          </a>
          <p class="mb-3 font-normal text-gray-500">desawangunsari2019@gmail.com</p>
          <a href="mailto:desawangunsari2019@gmail.com" class="inline-flex items-center text-blue-600 hover:underline">
            Email Us
            <i class="fas fa-chevron-right ml-2.5"></i>
          </a>
        </div>
      </div>
      
      <div class="md:md-0 mb-4"></div>
    
      <div class="container mx-auto">
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow container mx-auto">
          <i class="fas fa-phone-alt w-7 h-7 text-gray-500 mb-3"></i>
          <a href="#contact">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">No. Telepon</h5>
          </a>
          <p class="mb-3 font-normal text-gray-500">085703025651</p>
          <a href="https://wa.me/085703025651" class="inline-flex items-center text-blue-600 hover:underline" target="_blank">
            Contact Us
            <i class="fas fa-chevron-right ml-2.5"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="mt-12"></div>
    </section>
    `;
}

kontak();
