const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    //   convert Counter to number by adding ('+')
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    // Creates Speed of Counter
    const increment = target / 200;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;

      //   Create Delay
      setTimeout(() => {
        updateCounter();
      }, 1);

      //   If Counter fails
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
