document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.5
    });

    elements.forEach(element => {
      observer.observe(element);
    });
  });

  $(document).ready(function () {
    $(window).on("scroll resize", function () {
      $(".slide-in-text").each(function () {
        const slideInAt = ($(window).scrollTop() + $(window).height()) - ($(this).height() / 2);
        const elementBottom = $(this).offset().top + $(this).height();
        const isHalfShown = slideInAt > $(this).offset().top;
        const isNotScrolledPast = $(window).scrollTop() < elementBottom;
        if (isHalfShown && isNotScrolledPast) {
          $(this).addClass("slide-in");
        } else {
          $(this).removeClass("slide-in");
        }
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-li');

    navLinks.forEach(function (navLink) {
      navLink.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);

        const targetElement = document.getElementById(targetId);

        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });
  const lin = ["MOUNTAINEERING"];
  const outputDivv = document.getElementById('outp');
  let lineIndexx = 0;

  function typelin(index, text) {
    if (index < text.length) {
      outputDivv.textContent += text[index];
      setTimeout(function () {
        typelin(index + 1, text);
      }, 120);
    } else {
      setTimeout(function () {
        eraselin();
      }, 1400); 
    }
  }

  function eraselin() {
    const content = outputDivv.textContent;
    if (content.length > 0) {
      outputDivv.textContent = content.slice(0, -1);
      setTimeout(eraselin, 10); 
     } else {
      lineIndexx = (lineIndexx + 1) % lin.length;
      setTimeout(function () {
        typelin(0, lin[lineIndexx]);
      }, 300); 
    }
  }

  typelin(0, lin[lineIndexx]);
  
  
 
  const outputDiv = document.getElementById('output');
  let lineIndex = 0;

  function typeLines(index, text) {
    if (index < text.length) {
      outputDiv.textContent += text[index];
      setTimeout(function () {
        typeLines(index + 1, text);
      }, 120); 
    } else {
      setTimeout(function () {
        eraseLines();
      }, 1400); 
    }
  }

  function eraseLines() {
    const content = outputDiv.textContent;
    if (content.length > 0) {
      outputDiv.textContent = content.slice(0, -1);
      setTimeout(eraseLines, 50);
    } else {
      lineIndex = (lineIndex + 1) % lines.length;
      setTimeout(function () {
        typeLines(0, lines[lineIndex]);
      }, 500); 
    }
  }


  typeLines(0, lines[lineIndex]);
 

 
  