export function scrollLeft(ref) {
    if (ref.current) {
      ref.current.scrollLeft -= 300;
    }
  }
  
  export function scrollRight(ref) {
    if (ref.current) {
      ref.current.scrollLeft += 300;
    }
  }
  