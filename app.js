function photoGallery() {
  const slides = [1,2,3,4,5,6].map((n, idx) => `<section class="gallery-slide" data-gallery-slide="${idx}">
    <img src="./assets/photos/photo-${n}.${n === 6 ? 'png' : 'jpeg'}" alt="Museum photograph ${n}" draggable="false" data-palette-image />
    <div class="gallery-count"><span>${String(n).padStart(2,'0')} / 06</span><span>PRIVATE COLLECTION</span></div>
  </section>`).join('');

  return `<div class="gallery-shell" data-gallery-shell>
    <div class="gallery-track" data-gallery-track>
      ${slides}
      <section class="gallery-slide" data-gallery-slide="6">
        <div class="gallery-reserved">
          <div>
            <div class="kicker">07 / ?</div>
            <h2>Reserved for our next favorite photo.</h2>
          </div>
        </div>
        <div class="gallery-count">
          <span>07 / ?</span>
          <span>TO BE CONTINUED</span>
        </div>
      </section>
    </div>
  </div>
  <div class="swipe-hint">Swipe manually through the collection</div>`;
}
