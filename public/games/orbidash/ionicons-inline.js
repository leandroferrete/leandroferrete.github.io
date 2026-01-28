(() => {
  const iconSvgs = {
    "pause-outline":
      "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"ionicon\"><path d=\"M176 96h16v320h-16zM320 96h16v320h-16z\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"ionicon-fill-none ionicon-stroke-width\"/></svg>",
    play:
      "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"ionicon\"><path d=\"M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440\"/></svg>",
    "trophy-outline":
      "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"ionicon\"><path d=\"M176 464h160M256 464V336M384 224c0-50.64-.08-134.63-.12-160a16 16 0 0 0-16-16l-223.79.26a16 16 0 0 0-16 15.95c0 30.58-.13 129.17-.13 159.79 0 64.28 83 112 128 112S384 288.28 384 224\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"ionicon-fill-none ionicon-stroke-width\"/><path d=\"M128 96H48v16c0 55.22 33.55 112 80 112M384 96h80v16c0 55.22-33.55 112-80 112\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"ionicon-fill-none ionicon-stroke-width\"/></svg>",
    "volume-medium-outline":
      "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"ionicon\"><path d=\"M157.65 192H88a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h69.65a16 16 0 0 1 10.14 3.63l91.47 75a8 8 0 0 0 12.74-6.46V119.83a8 8 0 0 0-12.74-6.44l-91.47 75a16 16 0 0 1-10.14 3.61M352 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64M400 368c19.48-34 32-64 32-112s-12-77.7-32-112\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"ionicon-fill-none ionicon-stroke-width\"/></svg>",
    "volume-mute-outline":
      "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"ionicon\"><path d=\"M416 432 64 80\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" class=\"ionicon-fill-none ionicon-stroke-width\"/><path d=\"M224 136.92v33.8a4 4 0 0 0 1.17 2.82l24 24a4 4 0 0 0 6.83-2.82v-74.15a24.53 24.53 0 0 0-12.67-21.72 23.91 23.91 0 0 0-25.55 1.83 8 8 0 0 0-.66.51l-31.94 26.15a4 4 0 0 0-.29 5.92l17.05 17.06a4 4 0 0 0 5.37.26ZM224 375.08l-78.07-63.92a32 32 0 0 0-20.28-7.16H64v-96h50.72a4 4 0 0 0 2.82-6.83l-24-24a4 4 0 0 0-2.82-1.17H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h69.76l91.36 74.8a8 8 0 0 0 .66.51 23.93 23.93 0 0 0 25.85 1.69A24.49 24.49 0 0 0 256 391.45v-50.17a4 4 0 0 0-1.17-2.82l-24-24a4 4 0 0 0-6.83 2.82ZM352 256c0-24.56-5.81-47.88-17.75-71.27a16 16 0 0 0-28.5 14.54C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 0 0 2.32 6.25l19.66 19.67a4 4 0 0 0 6.75-2A147 147 0 0 0 352 256M416 256c0-51.19-13.08-83.89-34.18-120.06a16 16 0 0 0-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 0 0 1.9 8.26l16.77 16.76a4 4 0 0 0 6.52-1.27C410.09 315.88 416 289.91 416 256\"/><path d=\"M480 256c0-74.26-20.19-121.11-50.51-168.61a16 16 0 1 0-27 17.22C429.82 147.38 448 189.5 448 256c0 47.45-8.9 82.12-23.59 113a4 4 0 0 0 .77 4.55L443 391.39a4 4 0 0 0 6.4-1C470.88 348.22 480 307 480 256\"/></svg>",
    "diamond-outline":
      "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"ionicon\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m35.42 188.21 207.75 269.46a16.17 16.17 0 0 0 25.66 0l207.75-269.46a16.52 16.52 0 0 0 .95-18.75L407.06 55.71A16.22 16.22 0 0 0 393.27 48H118.73a16.22 16.22 0 0 0-13.79 7.71L34.47 169.46a16.52 16.52 0 0 0 .95 18.75M48 176h416\" class=\"ionicon-fill-none ionicon-stroke-width\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m400 64-48 112-96-128M112 64l48 112 96-128M256 448l-96-272M256 448l96-272\" class=\"ionicon-fill-none ionicon-stroke-width\"/></svg>",
    "close-outline":
      "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"ionicon\"><path d=\"M368 368 144 144M368 144 144 368\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"ionicon-fill-none ionicon-stroke-width\"/></svg>",
    diamond:
      "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"ionicon\"><path d=\"M121.72 32a4 4 0 0 0-3.72 5.56l2.3 5.43 40.7 94.9a4 4 0 0 0 6.88.82L243 38.4a4 4 0 0 0-3.2-6.4ZM419.93 58.06l-41.28 96.37a4 4 0 0 0 3.68 5.57h101a4 4 0 0 0 3.4-6.11L427 57.53a4 4 0 0 0-7.07.53M85 57.57l-59.71 96.32a4 4 0 0 0 3.4 6.11h101a4 4 0 0 0 3.67-5.58L92 58.1a4 4 0 0 0-7-.53M393.27 32H267.82a1.94 1.94 0 0 0-1.56 3.11l79.92 106.46a1.94 1.94 0 0 0 3.34-.4L391.6 43l3.4-8.34a1.92 1.92 0 0 0-1.7-2.66ZM239 448l-89.43-253.49A3.78 3.78 0 0 0 146 192H25.7a3.72 3.72 0 0 0-2.95 6l216 279.81a5.06 5.06 0 0 0 6.39 1.37 5 5 0 0 0 2.39-6.08ZM486.3 192H366a3.75 3.75 0 0 0-3.54 2.51l-98.2 278.16a5.21 5.21 0 0 0 2.42 6.31 5.22 5.22 0 0 0 6.61-1.39L489.25 198a3.72 3.72 0 0 0-2.95-6M259.2 78.93l56 74.67a4 4 0 0 1-3.2 6.4H200a4 4 0 0 1-3.2-6.4l56-74.67a4 4 0 0 1 6.4 0m-7 310.31-67.7-191.91a4 4 0 0 1 3.77-5.33h135.46a4 4 0 0 1 3.77 5.33l-67.73 191.91a4 4 0 0 1-7.54 0Z\"/></svg>",
    "home-outline":
      "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"ionicon\"><path d=\"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"ionicon-fill-none ionicon-stroke-width\"/><path d=\"M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"ionicon-fill-none ionicon-stroke-width\"/></svg>",
    refresh:
      "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"ionicon\"><path d=\"M320 146s24.36-12-64-12a160 160 0 1 0 160 160\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" class=\"ionicon-fill-none ionicon-stroke-width\"/><path d=\"m256 58 80 80-80 80\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"ionicon-fill-none ionicon-stroke-width\"/></svg>",
  };

  const global = window.Ionicons || {};
  const map = global.map || new Map();

  Object.entries(iconSvgs).forEach(([name, svg]) => {
    const data = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    map.set(name, data);
  });

  global.map = map;
  window.Ionicons = global;

  const applyFallbackIcons = () => {
    const icons = document.querySelectorAll("ion-icon");
    icons.forEach((icon) => {
      if (icon.classList.contains("hydrated")) {
        return;
      }
      if (icon.querySelector("svg")) {
        return;
      }
      const name = icon.getAttribute("name");
      if (!name || !iconSvgs[name]) {
        return;
      }
      icon.innerHTML = iconSvgs[name];
      icon.setAttribute("data-inline-icon", name);
    });
  };

  const scheduleFallback = () => {
    applyFallbackIcons();
    setTimeout(applyFallbackIcons, 300);
    setTimeout(applyFallbackIcons, 1200);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleFallback, { once: true });
  } else {
    scheduleFallback();
  }
})();
