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

      <aside class="container mx-auto w-[1000px]" aria-label="Subscribe to the newsletter">
      <p class="mb-5 text-sm font-medium text-gray-500">Apakah Anda ingin mendapatkan pemberitahuan ketika ada informasi terbaru terhadap Curug Cierang? Daftarlah untuk newsletter kami dan Anda akan menjadi salah satu yang pertama mengetahui tentang informasi curug yang paling terbaru.</p>
      <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      <form action="https://app.convertkit.com/forms/4692392/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="4692392" data-uid="344e3b5c48" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Sekarang periksa email Anda untuk mengonfirmasi langganan Anda .&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="">
          <div data-style="clean" class="flex items-end mb-3">
              <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
              <div data-element="fields" data-stacked="false" class="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields">
                  <div class="relative w-full mr-3 formkit-field">
                      <label for="member_email" class="hidden block mb-2 text-sm font-medium text-gray-900">Email address</label>
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg class="w-3.5 h-3.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                        </svg>
                      </div>
                      <input id="member_email" class="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" name="email_address" aria-label="Email Address" placeholder="Your email address..." required="" type="email">
                  </div>
                  <button data-element="submit" class="formkit-submit">
                      <div class="formkit-spinner">
                          <div></div>
                          <div></div>
                          <div></div>
                      </div>
                      <span class="px-5 py-3 text-sm font-medium text-center text-white bg-gray-500 rounded-lg cursor-pointer hover:bg-gray-800 focus:ring-4 focus:ring-blue-300">Subscribe</span>
                  </button>
              </div>
          </div>
      </form>
      <div class="text-sm font-medium text-gray-500">By subscribing, you agree with ConvertKit's <a rel="nofollow" href="https://convertkit.com/terms" class="text-blue-600 hover:underline">Terms of Service</a> and <a rel="nofollow" class="text-blue-600 hover:underline" href="https://convertkit.com/privacy">Privacy Policy</a>.</div>
    </aside>

      <div class="mt-12"></div>
    </section>
    `;
}

kontak();
