const observer = new IntersectionObserver(entries => {
  console.log(entries)
  entries.forEach(entry => {
      const left = entry.target.querySelector('.animator-class');
      console.log(left)
      if (entry.isIntersecting) {
          left.classList.add('first');
          return;
      }

      left.classList.remove('first');
  });
});

const observer1 = new IntersectionObserver(entries => {
  console.log(entries)
  entries.forEach(entry => {
      const left = entry.target.querySelector('.animator-class');
      console.log(left)
      if (entry.isIntersecting) {
          left.classList.add('second');
          return;
      }

      left.classList.remove('second');
  });
});

observer.observe(document.querySelector('.para1'));
observer.observe(document.querySelector('.para2'));
observer1.observe(document.querySelector('.para'));