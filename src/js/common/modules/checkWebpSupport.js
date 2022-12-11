export default function checkWebpSupport() {
   document.addEventListener('DOMContentLoaded', () => {
      const webp = new Image();
      webp.src =
         'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

      webp.onload = webp.onerror = () => {
         if (webp.height === 2) {
            document.body.classList.add('webp');
         }
      };
   });
}
