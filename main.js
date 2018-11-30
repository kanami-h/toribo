//Lazyload
var io = new IntersectionObserver(
    entries => {
      console.log(entries);
    },
    {
      /* Using default options. Details below */
    }
  );
  // Start observing an element
  io.observe(element);
  
  // Stop observing an element
  // io.unobserve(element);
  
  // Disable entire IntersectionObserver
  // io.disconnect();
  