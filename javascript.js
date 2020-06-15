const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


// window.addEventListener('scroll', () => {
//   if (window.scrollY > 730) {
//     navbar.classList.remove('navbar');
//     navbar.classList.add("navbar-under");
//   }
// });

// window.addEventListener('scroll', () => {
//   if (window.scrollY < 730) {
//     navbar.classList.remove("navbar-under");
//     navbar.classList.add('navbar');
//   }
// });

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 730) {
//     menu.classList.remove('menu');
//     menu.classList.add("menu-under");
//   }
// });

// window.addEventListener('scroll', () => {
//   if (window.scrollY < 730) {
//     menu.classList.remove("menu-under");
//     menu.classList.add('menu');
//   }
// });

// if (vw < 1300) {
//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 630) {
//       navbar.classList.remove('navbar');
//       navbar.classList.add("navbar-under");
//     }
//   });

//   window.addEventListener('scroll', () => {
//     if (window.scrollY < 630) {
//       navbar.classList.remove("navbar-under");
//       navbar.classList.add('navbar');
//     }
//   });

//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 630) {
//       menu.classList.remove('menu');
//       menu.classList.add("menu-under");
//     }
//   });

//   window.addEventListener('scroll', () => {
//     if (window.scrollY < 630) {
//       menu.classList.remove("menu-under");
//       menu.classList.add('menu');
//     }
//   });
// }


// if (vw < 1150) {
//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 470) {
//       navbar.classList.remove('navbar');
//       navbar.classList.add("navbar-under");
//     }
//   });

//   window.addEventListener('scroll', () => {
//     if (window.scrollY < 470) {
//       navbar.classList.remove("navbar-under");
//       navbar.classList.add('navbar');
//     }
//   });

//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 470) {
//       menu.classList.remove('menu');
//       menu.classList.add("menu-under");
//     }
//   });

//   window.addEventListener('scroll', () => {
//     if (window.scrollY < 470) {
//       menu.classList.remove("menu-under");
//       menu.classList.add('menu');
//     }
//   });
// }

// if (vw < 900) {
//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 390) {
//       navbar.classList.remove('navbar');
//       navbar.classList.add("navbar-under");
//     }
//   });

//   window.addEventListener('scroll', () => {
//     if (window.scrollY < 390) {
//       navbar.classList.remove("navbar-under");
//       navbar.classList.add('navbar');
//     }
//   });

//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 390) {
//       menu.classList.remove('menu');
//       menu.classList.add("menu-under");
//     }
//   });

//   window.addEventListener('scroll', () => {
//     if (window.scrollY < 390) {
//       menu.classList.remove("menu-under");
//       menu.classList.add('menu');
//     }
//   });
// }



const target = document.querySelector('.banner');

const options = {};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting === false) {
      navbar.classList.remove('navbar');
      navbar.classList.add("navbar-under");
      menu.classList.remove("menu");
      menu.classList.add('menu-under');
    } else {
      navbar.classList.remove('navbar-under');
      navbar.classList.add("navbar");
      menu.classList.remove("menu-under");
      menu.classList.add('menu');
    }
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(target);




const menuIphone = document.querySelector(".menu-iphone");

const optionsPhone = {};

const callbackPhone = (entriesPhone, observerPhone) => {
  entriesPhone.forEach(entry => {
    if (entry.isIntersecting === false) {
      console.log(target);
      menuIphone.classList.remove("menu-iphone");
      menuIphone.classList.add('menu-iphone-under');
    } else {
      menuIphone.classList.remove("menu-iphone-under");
      menuIphone.classList.add('menu-iphone');
    }
  });
};

const observerPhone = new IntersectionObserver(callbackPhone, optionsPhone);

observerPhone.observe(target);

