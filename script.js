const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {
  const question = faq.querySelector(".faq-question");

  question.addEventListener("click", () => {

    faqs.forEach(item => {
      if (item !== faq) {
        item.classList.remove("active");
      }
    });

    faq.classList.toggle("active");

  });

});

//for sticky header implementation
const header = document.querySelector(".sticky-header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    // scrolling down
    header.classList.add("show");
  } else {
    // scrolling up
    header.classList.remove("show");
  }

  lastScroll = currentScroll;

});

//MODAL OVERLAY FOR DOWNLOAD DATASHEET

const openBtn = document.querySelector(".download-datasheet");
console.log(openBtn);

const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modalOverlay");

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

//MODAL OVERLAY FOR REQUEST QUOTE
const quoteButton = document.querySelector(".quote-btn");
const quoteModal = document.getElementById("quoteModal");
const closeQuoteModal = document.getElementById("closeQuoteModal");

  quoteButton.addEventListener("click", () => {
    quoteModal.classList.add("active");
  });



closeQuoteModal.addEventListener("click", () => {
  quoteModal.classList.remove("active");
});


//close when clicking outside 

quoteModal.addEventListener("click",(e)=>{
  if(e.target === quoteModal){
    quoteModal.classList.remove("active");
  }
});

//zoom functionality
const image = document.getElementById("productImage");
const zoomPreview = document.getElementById("zoomPreview");

zoomPreview.style.backgroundImage = `url(${image.src})`;

image.addEventListener("mouseenter", () => {
  zoomPreview.style.opacity = "1";
});

image.addEventListener("mouseleave", () => {
  zoomPreview.style.opacity = "0";
});

image.addEventListener("mousemove", (e) => {

  const rect = image.getBoundingClientRect();

  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  zoomPreview.style.backgroundPosition =
    `${x * 100}% ${y * 100}%`;

});