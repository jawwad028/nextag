const l = [
    "Steep Cliff",
      "Extreme SnowFall",
      "Landslides",
      "Rockfalls",
      "Frostbite",
      "Hypothermia",
  
    ];
  
    const outttt = document.getElementById('hazard');
    let asdkj = 0;
  
    function typel(index, text) {
      if (index < text.length) {
        outttt.textContent += text[index];
        setTimeout(function () {
          typel(index + 1, text);
        }, 120); 
      } else {
        setTimeout(function () {
          erasel();
        }, 1400); 
      }
    }
  
    function erasel() {
      const content = outttt.textContent;
      if (content.length > 0) {
        outttt.textContent = content.slice(0, -1);
        setTimeout(erasel, 50);
      } else {
        asdkj = (asdkj + 1) % l.length;
        setTimeout(function () {
          typel(0, l[asdkj]);
        }, 500); 
      }
    }
  
    typel(0, l[asdkj]);
  
    