
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
  
      const titles = ('selamat berkurangnya umur<3').split('')
      const titleElement = document.getElementById('title');
      let index = 0;
  
      function appendTitle() {
        if (index < titles.length) {
          titleElement.innerHTML += titles[index];
          index++;
          setTimeout(appendTitle, 200); // 500ms delay
        }
      }
  
      appendTitle();
  
      clearTimeout(c);
    }, 1000);
  };