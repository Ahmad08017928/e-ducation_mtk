//main navbar
let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

// Setting Scroll in navigator
document.addEventListener("DOMContentLoaded", function () {
  // Membuat Variabel yang menampung elemen atau id dari "mainnVarbar"
  var navbar = document.getElementById("mainNavbar");

  window.addEventListener("scroll", function () {
    // Melakukan pengecekan scroll pada halaman
    if (window.scrollY > 50) {
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
    }
  });
});

// Tutup sub-menu jika pengguna mengklik di luar sub-menu
document.addEventListener("click", function (event) {
  if (!subMenu.contains(event.target) && !event.target.classList.contains("user-pic")) {
    subMenu.classList.remove("open-menu");
  }
});

// Dropdwon properties
document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = [document.getElementById("menu-button-1"), document.getElementById("menu-button-2")];
  const dropdowns = [document.getElementById("dropdown-menu-1"), document.getElementById("dropdown-menu-2")];

  menuButtons.forEach((button, index) => {
    const dropdown = dropdowns[index];

    // Toggle dropdown visibility
    button.addEventListener("click", () => {
      dropdown.classList.toggle("hidden");
    });

    // Handle item click
    dropdown.querySelectorAll('[role="menuitem"]').forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const file = item.getAttribute("data-file");
        window.location.href = file;
        dropdown.classList.add("hidden"); // Hide dropdown after click
      });
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (e) => {
    dropdowns.forEach((dropdown) => {
      if (!menuButtons.some((button) => button.contains(e.target)) && !dropdown.contains(e.target)) {
        dropdown.classList.add("hidden");
      }
    });
  });
});

// dropdown tugas
function setupDropdown(selectBtnId, textId, nextDropdownId) {
  const selectBtn = document.getElementById(selectBtnId);
  const text = document.getElementById(textId);
  const options = selectBtn.nextElementSibling.getElementsByClassName('options');
  const nextDropdown = nextDropdownId ? document.getElementById(nextDropdownId) : null;

  selectBtn.addEventListener('click', function() {
    selectBtn.classList.toggle('active');
    adjustNextDropdownPosition();
  });

  for (let option of options) {
    option.onclick = function () {
      text.innerHTML = this.textContent;
      selectBtn.classList.remove('active');
      adjustNextDropdownPosition();
    };
  }

  function adjustNextDropdownPosition() {
    const dropdownHeight = selectBtn.nextElementSibling.clientHeight;
    if (selectBtn.classList.contains('active')) {
      if (nextDropdown) {
        nextDropdown.style.marginTop = `${dropdownHeight + 30}px`; // Menyesuaikan jarak dengan opsi yang terbuka
      }
    } else {
      if (nextDropdown) {
        nextDropdown.style.marginTop = '10px'; // Jarak default antara dropdowns
      }
    }
  }
}

setupDropdown('select-btn-1', 'text-1', 'dropdown-2');
setupDropdown('select-btn-2', 'text-2', 'dropdown-3');
setupDropdown('select-btn-3', 'text-3', null);

// Mobile Maintenance
   function redirectIfMobile() {
     var width = window.innerWidth;
     console.log("Lebar layar: " + width + " piksel");

     // Angka 768 piksel menentukan batasan lebar layar di bawahnya pengguna akan diarahkan ke halaman perbaikan
     if (width < 1296) {
       console.log("Pengguna akan diarahkan ke halaman perbaikan.");
       window.location.href = "404.html";
     }
   }

   // Jalankan fungsi saat halaman dimuat dan saat ukuran layar berubah
   window.onload = redirectIfMobile;
   window.onresize = redirectIfMobile;

