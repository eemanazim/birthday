function startCake() {
  const layers = [
    { el: ".layer1", delay: 0 },
    { el: ".layer2", delay: 800 },
    { el: ".layer3", delay: 1600 }
  ];

  layers.forEach(l => {
    const e = document.querySelector(l.el);
    e.style.transform = "translateY(-200px)";
    e.style.opacity = "0";
    setTimeout(() => {
      e.style.transition = "all .8s ease";
      e.style.transform = "translateY(0)";
      e.style.opacity = "1";
    }, l.delay);
  });

  const candles = document.querySelector(".candles");
  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      const c = document.createElement("div");
      c.className = "candle";
      candles.appendChild(c);
    }
    candles.style.opacity = "1";
    startFireworks();
  }, 2400);
}

function startFireworks() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  let p = Array.from({ length: 100 }, () => ({
    x: canvas.width / 2,
    y: canvas.height / 2,
    r: Math.random() * 5,
    dx: (Math.random() - 0.5) * 6,
    dy: Math.random() * -6,
    life: 60,
    c: `hsl(${Math.random() * 360},100%,50%)`
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    p.forEach(o => {
      if (o.life-- > 0) {
        ctx.fillStyle = o.c;
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fill();
        o.x += o.dx;
        o.y += o.dy;
        o.dy += .1;
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
}
