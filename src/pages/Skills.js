import React from 'react';
import SkillItem from '../Components/SkillItem';
import Title from '../Components/Title';

const Skills = () => {
  return <div className='md:h-full h-full lg:h-screen bg-slate-900'>
    <Title title={"Stacks"}/>
    <div class="container mx-auto">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-2">
  <div
      class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-slate-700 aos-init aos-animate" data-aos="fade-down" aos-delay="4000"
    >
     <svg className='w-15 h-20' fill="none" height="2500" width="2183" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26"/><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a"/><path d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" fill="#fff"/></svg>
    </div>
    <div
      class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-slate-700 aos-init aos-animate" data-aos="fade-down" aos-delay="4000"
    >
      <svg className='w-15 h-20' fill="none" height="2500" width="2183" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba"/><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7"/><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff"/></svg>
    </div>
    
    <div
      class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-slate-700 aos-init aos-animate" data-aos="fade-down" aos-delay="4000"
    >
      <svg className='w-15 h-20' xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>
    </div>
    <div
      class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-slate-700 aos-init aos-animate" data-aos="fade-down" aos-delay="4000"
    >
      <svg  className='w-15 h-20' height="2500" viewBox="175.7 78 490.6 436.9" width="2194" xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"/><circle cx="420.9" cy="296.5" r="45.7"/></g></svg>
    </div>

    <div
      class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-slate-700 aos-init aos-animate" data-aos="fade-down" aos-delay="4000"
    >
      <svg className='w-15 h-20' xmlns="http://www.w3.org/2000/svg" width="1344" height="2500" viewBox="6.527 4.399 290.829 540.906"><path d="M285.104 430.945h-2.037v-1.14h5.486v1.14h-2.025v5.688h-1.424v-5.688zm10.942.297h-.032l-2.02 5.393h-.924l-2.006-5.393h-.024v5.393h-1.343v-6.828h1.976l1.86 4.835 1.854-4.835h1.969v6.828h-1.311l.001-5.393z" fill="#e76f00"/><path d="M102.681 291.324s-14.178 8.245 10.09 11.035c29.4 3.354 44.426 2.873 76.825-3.259 0 0 8.518 5.341 20.414 9.967-72.63 31.128-164.376-1.803-107.329-17.743M93.806 250.704s-15.902 11.771 8.384 14.283c31.406 3.24 56.208 3.505 99.125-4.759 0 0 5.937 6.018 15.271 9.309-87.815 25.678-185.624 2.025-122.78-18.833" fill="#5382a1"/><path d="M168.625 181.799c17.896 20.604-4.701 39.146-4.701 39.146s45.439-23.458 24.571-52.833c-19.491-27.395-34.438-41.005 46.479-87.934.001-.001-127.013 31.721-66.349 101.621" fill="#e76f00"/><path d="M264.684 321.369s10.492 8.646-11.555 15.333c-41.923 12.7-174.488 16.535-211.314.507-13.238-5.76 11.587-13.752 19.396-15.429 8.144-1.766 12.798-1.437 12.798-1.437-14.722-10.371-95.157 20.363-40.857 29.166 148.084 24.015 269.944-10.814 231.532-28.14M109.499 208.617s-67.431 16.016-23.879 21.832c18.389 2.462 55.047 1.905 89.192-.956 27.906-2.354 55.928-7.358 55.928-7.358s-9.84 4.214-16.959 9.074c-68.475 18.01-200.756 9.631-162.674-8.79 32.206-15.568 58.392-13.802 58.392-13.802M230.462 276.231c69.608-36.171 37.425-70.932 14.96-66.248-5.506 1.146-7.961 2.139-7.961 2.139s2.045-3.202 5.947-4.588c44.441-15.624 78.619 46.081-14.346 70.521 0 0 1.079-.962 1.4-1.824" fill="#5382a1"/><path d="M188.495 4.399s38.55 38.562-36.563 97.862c-60.233 47.567-13.735 74.689-.025 105.678-35.158-31.723-60.96-59.647-43.65-85.637 25.406-38.151 95.792-56.648 80.238-117.903" fill="#e76f00"/><path d="M116.339 374.246c66.815 4.277 169.417-2.373 171.846-33.987 0 0-4.67 11.984-55.219 21.503-57.027 10.731-127.364 9.479-169.081 2.601.002-.002 8.541 7.067 52.454 9.883" fill="#5382a1"/><path d="M105.389 495.049c-6.303 5.467-12.96 8.536-18.934 8.536-8.527 0-13.134-5.113-13.134-13.314 0-8.871 4.937-15.357 24.739-15.357h7.328l.001 20.135m17.392 19.623V453.93c0-15.518-8.85-25.756-30.188-25.756-12.457 0-23.369 3.076-32.238 6.999l2.56 10.752c6.983-2.563 16.022-4.949 24.894-4.949 12.292 0 17.58 4.949 17.58 15.181v7.678h-6.135c-29.865 0-43.337 11.593-43.337 28.993 0 15.018 8.878 23.554 25.594 23.554 10.745 0 18.766-4.437 26.264-10.929l1.361 9.221 13.645-.002zM180.824 514.672h-21.691l-26.106-84.96h18.944l16.198 52.199 3.601 15.699c8.195-22.698 13.992-45.726 16.891-67.898h18.427c-4.938 27.976-13.822 58.684-26.264 84.96M264.038 495.049c-6.315 5.467-12.983 8.536-18.958 8.536-8.512 0-13.131-5.113-13.131-13.314 0-8.871 4.947-15.357 24.748-15.357h7.341v20.135m17.39 19.623V453.93c0-15.518-8.871-25.756-30.186-25.756-12.465 0-23.381 3.076-32.246 6.999l2.557 10.752c6.985-2.563 16.041-4.949 24.906-4.949 12.283 0 17.579 4.949 17.579 15.181v7.678h-6.146c-29.873 0-43.34 11.593-43.34 28.993 0 15.018 8.871 23.554 25.584 23.554 10.752 0 18.77-4.437 26.28-10.929l1.366 9.221 13.646-.002zM36.847 529.099c-4.958 7.239-12.966 12.966-21.733 16.206L6.527 535.2c6.673-3.424 12.396-8.954 15.055-14.104 2.3-4.581 3.252-10.485 3.252-24.604v-96.995h18.478v95.666c-.001 18.875-1.51 26.5-6.465 33.936" fill="#e76f00"/></svg>
    </div>
    
    <div
      class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-slate-700 aos-init aos-animate" data-aos="fade-down" aos-delay="4000"
    >
      <svg className='w-15 h-20' height="2500" viewBox=".29 .22 77.26 95.75" width="2014" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m48.75 95.97-25.91-25.74 14.32-14.57 40.39 40.31z" fill="#02539a"/><g fill="#45d1fd"><path d="m22.52 70.25 25.68-25.68h28.87l-39.95 39.95z" fill-opacity=".85"/><path d="m.29 47.85 14.58 14.57 62.2-62.2h-29.02z"/></g></g></svg>
    </div>
    <div
      class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-slate-700 aos-init aos-animate" data-aos="fade-down" aos-delay="4000"
    >
     <svg className='w-15 h-20' xmlns="http://www.w3.org/2000/svg" width="2500" height="873" viewBox="0 0 436.506 152.503"><g fill="#092e20"><path d="M51.465 0h23.871v110.496c-12.245 2.325-21.236 3.256-31.002 3.256C15.191 113.75 0 100.576 0 75.308c0-24.337 16.122-40.147 41.078-40.147 3.875 0 6.82.309 10.387 1.239V0zm0 55.62c-2.79-.929-5.115-1.239-8.061-1.239-12.091 0-19.067 7.441-19.067 20.461 0 12.712 6.666 19.687 18.912 19.687 2.635 0 4.806-.154 8.216-.619V55.62z"/><path d="M113.312 36.865v55.338c0 19.067-1.396 28.213-5.58 36.118-3.876 7.597-8.992 12.401-19.532 17.673l-22.167-10.541c10.541-4.961 15.656-9.3 18.911-15.968 3.411-6.819 4.497-14.726 4.497-35.497V36.865h23.871zM89.441.127h23.871v24.492H89.441V.127zM127.731 42.29c10.542-4.959 20.617-7.129 31.623-7.129 12.246 0 20.306 3.254 23.872 9.61 2.014 3.565 2.634 8.215 2.634 18.137v48.517c-10.697 1.55-24.182 2.636-34.102 2.636-19.996 0-28.988-6.978-28.988-22.478 0-16.743 11.936-24.493 41.233-26.974v-5.27c0-4.34-2.17-5.889-8.216-5.889-8.835 0-18.756 2.48-28.058 7.286l.002-18.446zm37.359 37.978c-15.812 1.55-20.928 4.03-20.928 10.231 0 4.649 2.946 6.819 9.456 6.819 3.566 0 6.82-.309 11.471-1.084l.001-15.966zM197.487 40.585c14.105-3.72 25.731-5.424 37.512-5.424 12.246 0 21.082 2.789 26.354 8.215 4.96 5.114 6.509 10.694 6.509 22.632v46.812H243.99V66.938c0-9.145-3.1-12.557-11.625-12.557-3.255 0-6.2.31-11.007 1.705v56.734h-23.871V40.585zM277.142 125.841c8.372 4.341 16.742 6.354 25.577 6.354 15.654 0 22.32-6.354 22.32-21.546v-.465c-4.649 2.324-9.301 3.255-15.5 3.255-20.927 0-34.26-13.796-34.26-35.651 0-27.129 19.688-42.474 54.564-42.474 10.231 0 19.688 1.084 31.158 3.409l-8.174 17.219c-6.355-1.24-.509-.166-5.312-.631v2.481l.309 10.074.154 13.022c.155 3.254.155 6.51.311 9.765v6.512c0 20.461-1.705 30.071-6.819 37.977-7.441 11.627-20.308 17.361-38.599 17.361-9.301 0-17.359-1.395-25.731-4.65l.002-22.012zm47.434-71.305h-2.479c-4.649-.155-10.074 1.084-13.796 3.409-5.734 3.256-8.682 9.147-8.682 17.517 0 11.937 5.893 18.757 16.433 18.757 3.255 0 5.891-.621 8.989-1.55v-8.215c0-2.791-.153-5.893-.153-9.146l-.154-11.005-.156-7.906-.002-1.861zM398.062 34.85c23.871 0 38.443 15.037 38.443 39.373 0 24.958-15.19 40.614-39.373 40.614-23.873 0-38.6-15.037-38.6-39.218.002-25.114 15.194-40.769 39.53-40.769zm-.467 60.764c9.146 0 14.572-7.596 14.572-20.772 0-13.02-5.271-20.771-14.415-20.771-9.457 0-14.884 7.597-14.884 20.771.002 13.177 5.428 20.772 14.727 20.772z"/></g></svg>
    </div>
    
    <div
      class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-slate-700 aos-init aos-animate" data-aos="fade-down" aos-delay="4000"
    >
      <svg className='w-15 h-20' height="1504" preserveAspectRatio="xMidYMid" width="2500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153.6"><linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%"><stop offset="0" stop-color="#2298bd"/><stop offset="1" stop-color="#0ed7b5"/></linearGradient><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="url(#a)"/></svg>
    </div>

  </div>
</div>

  </div>;
};

export default Skills;
