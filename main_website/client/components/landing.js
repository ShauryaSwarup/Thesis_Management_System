import React from "react";
import Link from "next/link";

function landing() {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
              Thesis Management System
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>

            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>

            {/* <a
								href="#"
								class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
							>
								Speak to Sales
							</a> */}
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex p-8">
            <img
              src="https://icons.veryicon.com/png/o/business/spirit-erp/thesis-management.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              About
            </h2>
            <p class="mb-4 text-black">
              VJTI Mumbai (estd. in 1887 as Victoria Jubilee Technical
              Institute) has pioneered India’s Engineering education, research
              and training ecosystem. Pre-independence, VJTI had been
              instrumental in driving industrial growth throughout united India.
              Post-independence, VJTI played a pivotal role in setting up IITs
              and RECs of India and strengthened technology excellence of
              country. In 1997, VJTI changed its name to Veermata Jijabai
              Technological Institute to honor mother of Chhatrapati Shivaji
              Maharaj. Located in South Mumbai, VJTI is an autonomous
              institution owned by Maharashtra State Government. The institute
              offers programs in engineering and technology at the diploma,
              degree, post-graduate and doctoral levels. VJTI is known for its
              high quality teaching, collaborative research, industry connect
              and strong alumni network.
            </p>
          </div>
          <div class="">
            <img
              class="w-full"
              src="https://vjti.ac.in/wp-content/uploads/2021/07/VJTI-LandingPageV3.jpg"
              alt="office content 1"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default landing;
