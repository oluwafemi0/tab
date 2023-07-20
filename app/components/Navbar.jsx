

const Navbar = () => {
  return (
    <div class="flex p-2 bg-[#262626] justify-between items-center border-b border-gray-300 flex-wrap">
    <div class="flex items-center m-1">
    <li class="flex mb-1 ml-0">
                <svg width="20px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 18H9" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    <a href="/" class="text-sm font-normal ml-1  mt-1 text-white list-none hover:text-white"
                        target="">Home</a>
                </li>
                <li class="flex ml-1">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 7H19" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 12H19" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 17H12" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <a href="#" class="text-sm font-normal ml-1  mt-0 text-white list-none hover:text-white"
                        target="">Contents
                    </a>
                </li>
                
                <div class="p-1 max-w-lg  mx-auto mb-6 ml-1">
    <details class="fixed ">
        <summary class=" rounded-lg cursor-pointer shadow-md ">
            <span class="text-sm">Catergories</span>
        </summary>
        <ul class="ml-8 space-y-1">
            <li>
                <details class="mb-1">
                    <summary class=" p-2 bg-[#262626]  cursor-pointer shadow">
                        <span class="font-semibold">Elements</span>
                    </summary>
                    <div class="bg-[#262626] p-2">
                        <p class="text-white">reusable</p>
                    </div>
                    <div class="bg-[#262626] p-2">
                        <p class="text-white">reusable</p>
                    </div>
                </details>
            </li>
            <li>
                <details class="mb-1">
                    <summary class=" p-2 bg-[#262626]  cursor-pointer shadow">
                        <span class="font-semibold">Forms</span>
                    </summary>
                    <div class="bg-[#262626] p-2">
                        <p class="text-white">reusable</p>
                    </div>
                    <div class="bg-[#262626] p-2">
                        <p class="text-white">reusable</p>
                    </div>
                </details>
            </li>
            <li>
                <details class="mb-1">
                    <summary class=" p-2 bg-[#262626] cursor-pointer shadow">
                        <span class="font-semibold">Plugin</span>
                    </summary>
                    <div class="bg-[#262626] p-2">
                        <p class="text-white">reusable</p>
                    </div>
                    <div class="bg-[#262626] p-2">
                        <p class="text-white">reusable</p>
                    </div>
                </details>
            </li>
            <li>
                <details class="mb-1">
                    <summary class=" p-3 bg-[#262626]  cursor-pointer shadow">
                        <span class="font-semibold">Datagrid</span>
                    </summary>
                    <div class="bg-[#262626] p-2">
                        <p class="text-white">reusable</p>
                    </div>
                    <div class="bg-[#262626] p-2">
                        <p class="text-white">reusable</p>
                    </div>
                </details>
            </li>
        </ul>
    </details>

</div>

                <li class="flex ml-[95px]">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="3" stroke="#fff" stroke-width="1.5"></circle> <path d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" stroke="#fff" stroke-width="1.5"></path> </g></svg>
                    <a href="#" class="text-sm font-normal ml-2  mt-0 text-white list-none hover:text-white"
                        target="_blank">Settings
                    </a>
                </li>
    </div>
    <div class="relative flex items-center hidden md:inline-flex">
        
    </div>
    <div class="flex items-center p-1 bg-white  rounded-full gap-2">
    <img class="block mx-auto  h-8 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="" />
                        <div class="text-center space-y-2 ml-4  sm:text-left">
                            <div class="space-y-0.5  ml-2 ">
                                <p class="text-sm  text-[#262626] font-semibold">
                                    Oluwafemi Emmanuel
                                </p>
                                
                            </div>
                        </div>
    </div>
</div>

  )
}

export default Navbar