function startTrafficLight() {
    let lights = document.querySelectorAll('.light');
    let index = 0;
  
    setInterval(() => {
      lights.forEach(light => light.style.backgroundColor = '#808080');
      lights[index].style.backgroundColor = ['#FF0000', '#FFFF00', '#00FF00'][index];
      index = (index + 1) % 3;
    }, 2000);
  }