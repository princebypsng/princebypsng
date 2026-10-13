// ====== EDIT THESE ======
const WHATSAPP = "+919635502116"; // country code + number, no + or spaces
const PRODUCTS = [
  {n:"Gold Ring",m:"gold",d:"22k and 18k, plain and stone set",i:"ring"},
  {n:"Gold Chain",m:"gold",d:"Rope, box and curb styles",i:"chain"},
  {n:"Gold Earrings",m:"gold",d:"Studs, jhumkas and hoops",i:"ear"},
  {n:"Gold Bangles",m:"gold",d:"Daily wear and bridal sets",i:"bangle"},
  {n:"Silver Anklets",m:"silver",d:"925 silver, with bell options",i:"chain"},
  {n:"Silver Rings",m:"silver",d:"Men's and women's, all sizes",i:"ring"},
  {n:"Silver Pendant Sets",m:"silver",d:"Pendant with matching earrings",i:"drop"},
  {n:"Silver Bangles",m:"silver",d:"Light, polished, easy to wear",i:"bangle"},
  {n:"Pearl Necklace",m:"pearl",d:"Single and multi-strand",i:"pearl"},
  {n:"Pearl Drop Earrings",m:"pearl",d:"Freshwater pearls on silver or gold",i:"drop"},
  {n:"Pearl Bracelet",m:"pearl",d:"Adjustable clasp",i:"pearl"},
  {n:"Gold Pendant",m:"gold",d:"Initials, deities and designs",i:"drop"}
];
// ========================
const ICONS={
 ring:'<circle cx="32" cy="38" r="16"/><path d="M24 22l8-10 8 10-8 6z"/>',
 chain:'<path d="M12 14c0 24 8 36 20 36s20-12 20-36"/><circle cx="32" cy="54" r="4"/>',
 ear:'<circle cx="32" cy="14" r="4"/><path d="M32 18v10"/><circle cx="32" cy="42" r="14"/>',
 bangle:'<ellipse cx="32" cy="32" rx="22" ry="22"/><ellipse cx="32" cy="32" rx="15" ry="15"/>',
 drop:'<path d="M32 8v10"/><path d="M32 18c10 12 14 18 14 25a14 14 0 0 1-28 0c0-7 4-13 14-25z"/>',
 pearl:'<path d="M10 16c0 22 10 34 22 34s22-12 22-34"/><circle cx="14" cy="30" r="3"/><circle cx="20" cy="42" r="3"/><circle cx="32" cy="50" r="3"/><circle cx="44" cy="42" r="3"/><circle cx="50" cy="30" r="3"/>'
};
const grid=document.getElementById("grid");
const wa=t=>`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;
function render(f){
  grid.innerHTML=PRODUCTS.filter(p=>f==="all"||p.m===f).map(p=>`
  <article class="item" data-m="${p.m}">
    <div class="art"><svg viewBox="0 0 64 64" aria-hidden="true">${ICONS[p.i]}</svg></div>
    <div class="info"><h3>${p.n}</h3><small>${p.d}</small>
    <a href="${wa("Hello Prince Silver & Gold, I want to enquire about: "+p.n)}" target="_blank" rel="noopener">Enquire</a></div>
  </article>`).join("");
}
render("all");
document.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".chip").forEach(c=>c.classList.remove("on"));
  b.classList.add("on");render(b.dataset.f);
});
document.getElementById("wa-main").href=wa("Hello Prince Silver & Gold, I would like some help.");
document.getElementById("form").addEventListener("submit",e=>{
  e.preventDefault();const d=new FormData(e.target);
  window.open(wa(`Hello, I am ${d.get("name")}. ${d.get("msg")}`),"_blank","noopener");
});
const mb=document.querySelector(".menu-btn"),nav=document.getElementById("nav");
mb.onclick=()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
nav.querySelectorAll("a").forEach(a=>a.onclick=()=>{nav.classList.remove("open");mb.setAttribute("aria-expanded",false)});
document.getElementById("yr").textContent=new Date().getFullYear();
