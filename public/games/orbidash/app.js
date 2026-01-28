const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const overlay = document.getElementById("overlay");
const ctaText = document.querySelector("[data-i18n='cta']");
const leaderboardList = document.getElementById("leaderboard-list");
// Removed overlayTitle/Text as we use specific headers per view now

const views = document.querySelectorAll('.view');
const btnNavRank = document.getElementById("nav-rank");
const btnNavSound = document.getElementById("nav-sound");
const btnNavStore = document.getElementById("nav-store");
const btnCloseRank = document.getElementById("close-rank");
const btnCloseStore = document.getElementById("close-store");
const btnReplay = document.getElementById("replay-btn");
const btnHome = document.getElementById("home-btn");

const pauseButton = document.getElementById("pause-btn");
const resumeButton = document.getElementById("resume-btn");
const exitButton = document.getElementById("exit-btn");
const startButton = document.getElementById("start-btn");

const removeAdsButton = document.getElementById("purchase-remove-ads");
const restorePurchasesButton = document.getElementById("restore-purchases");
const removeAdsPriceEl = document.getElementById("remove-ads-price");
const purchaseStatusEl = document.getElementById("purchase-status");
const scoreEndEl = document.getElementById("end-score");
const scoreEl = document.getElementById("score");
const bestEl = document.getElementById("best");
const scorePop = document.getElementById("score-pop");
const recordCelebration = document.getElementById("record-celebration");
const recordScoreEl = document.getElementById("record-score");
const recordChip = document.getElementById("record-chip");
const hud = document.getElementById("hud");
const desktopQuery = window.matchMedia
  ? window.matchMedia("(hover: hover) and (pointer: fine)")
  : { matches: false };

const analytics = window.Capacitor?.Plugins?.FirebaseAnalytics;
const admob = window.Capacitor?.Plugins?.AdMob;
const isNative = () => Boolean(window.Capacitor?.isNativePlatform?.());
const PURCHASE_REMOVE_ADS_KEY = "orbidash-remove-ads";
const storedRemoveAds = localStorage.getItem(PURCHASE_REMOVE_ADS_KEY) === "true";
let adsEnabled = window.ORBIDASH_ADS_ENABLED !== false && !storedRemoveAds;
const IAP_REMOVE_ADS_ID = window.ORBIDASH_IAP_REMOVE_ADS_ID || "remove_ads";
const iapState = {
  ready: false,
  available: false,
  owned: storedRemoveAds,
  product: null,
  busy: false,
  store: null,
  lastError: "",
};

const storedSound = localStorage.getItem("orbit-sound");
let soundEnabled = storedSound !== "off";
const audioState = {
  ctx: null,
  master: null,
};

function logEvent(name, params = {}) {
  try {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ source: "orbidash", type: name, params }, "*");
    }
  } catch (err) {
    // Ignore postMessage errors (cross-origin restrictions in some hosts)
  }
  if (!analytics || !isNative()) {
    return;
  }
  analytics.logEvent({ name, params }).catch(() => { });
}

function getAudioContext() {
  if (audioState.ctx) {
    return audioState.ctx;
  }
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) {
    return null;
  }
  audioState.ctx = new AudioCtx();
  audioState.master = audioState.ctx.createGain();
  audioState.master.gain.value = 0.45;
  audioState.master.connect(audioState.ctx.destination);
  return audioState.ctx;
}

function resumeAudio() {
  if (!soundEnabled) {
    return;
  }
  const ctx = getAudioContext();
  if (!ctx || ctx.state === "running") {
    return;
  }
  ctx.resume().catch(() => { });
}

function playTone({
  frequency,
  endFrequency,
  duration = 0.2,
  gain = 0.2,
  type = "sine",
  attack = 0.01,
  release = 0.08,
  filter = 1400,
  delay = 0,
} = {}) {
  if (!soundEnabled) {
    return;
  }
  const ctx = getAudioContext();
  if (!ctx || ctx.state !== "running") {
    return;
  }
  const now = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();
  const filterNode = ctx.createBiquadFilter();

  osc.type = type;
  osc.frequency.setValueAtTime(frequency, now);
  if (endFrequency) {
    osc.frequency.exponentialRampToValueAtTime(
      endFrequency,
      now + Math.max(0.05, duration)
    );
  }

  filterNode.type = "lowpass";
  filterNode.frequency.setValueAtTime(filter, now);

  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(gain, now + attack);
  gainNode.gain.exponentialRampToValueAtTime(
    Math.max(0.001, gain * 0.2),
    now + duration
  );
  gainNode.gain.linearRampToValueAtTime(0, now + duration + release);

  osc.connect(filterNode);
  filterNode.connect(gainNode);
  gainNode.connect(audioState.master);

  osc.start(now);
  osc.stop(now + duration + release + 0.02);
  osc.onended = () => {
    osc.disconnect();
    filterNode.disconnect();
    gainNode.disconnect();
  };
}

function playScoreSound() {
  playTone({ frequency: 620, duration: 0.12, gain: 0.12, filter: 1800 });
  playTone({
    frequency: 880,
    duration: 0.14,
    gain: 0.1,
    filter: 2200,
    delay: 0.05,
  });
}

function playFlipSound() {
  playTone({
    frequency: 420,
    endFrequency: 240,
    duration: 0.12,
    gain: 0.08,
    type: "triangle",
    filter: 1200,
  });
}

function playGameOverSound() {
  playTone({
    frequency: 220,
    endFrequency: 120,
    duration: 0.35,
    gain: 0.18,
    type: "sine",
    filter: 900,
  });
}

function playRecordSound() {
  playTone({ frequency: 660, duration: 0.18, gain: 0.12, filter: 2000 });
  playTone({
    frequency: 880,
    duration: 0.18,
    gain: 0.12,
    filter: 2200,
    delay: 0.06,
  });
  playTone({
    frequency: 1100,
    duration: 0.2,
    gain: 0.12,
    filter: 2400,
    delay: 0.12,
  });
}


const btnSound = document.getElementById("nav-sound");

function updateSoundToggle() {
  if (!btnSound) return;
  if (soundEnabled) {
    btnSound.classList.remove("muted");
  } else {
    btnSound.classList.add("muted");
  }
}

function enableSound() {
  soundEnabled = true;
  localStorage.setItem("orbit-sound", "on");
  updateSoundToggle();
  resumeAudio();
}

function disableSound() {
  soundEnabled = false;
  localStorage.setItem("orbit-sound", "off");
  updateSoundToggle();
  if (audioState.ctx && audioState.ctx.state === "running") {
    audioState.ctx.suspend().catch(() => { });
  }
}

function onUserGesture() {
  if (!soundEnabled) return;
  resumeAudio();
}

if (btnSound) {
  updateSoundToggle();
  btnSound.addEventListener("click", (event) => {
    event.preventDefault();
    if (soundEnabled) {
      disableSound();
    } else {
      enableSound();
    }
  });
}

const adConfig = {
  bannerId: "ca-app-pub-4276044088545493/5640295672",
  interstitialId: "ca-app-pub-4276044088545493/7660772599",
};

const adState = {
  initialized: false,
  interstitialReady: false,
  bannerVisible: false,
  bannerRetry: 0,
  bannerTimer: null,
};

async function setAdsEnabled(enabled) {
  adsEnabled = Boolean(enabled);
  if (!adsEnabled && admob && isNative()) {
    if (adState.bannerTimer) {
      clearTimeout(adState.bannerTimer);
      adState.bannerTimer = null;
    }
    adState.bannerVisible = false;
    adState.interstitialReady = false;
    try {
      await admob.hideBanner();
      await admob.removeBanner();
    } catch (err) {
      return;
    }
  }
}

function grantRemoveAds(source = "purchase") {
  if (!localStorage.getItem(PURCHASE_REMOVE_ADS_KEY)) {
    localStorage.setItem(PURCHASE_REMOVE_ADS_KEY, "true");
  }
  iapState.owned = true;
  setAdsEnabled(false);
  updatePurchaseUI();
  if (source) {
    logEvent("ads_removed", { source });
  }
}

function scheduleBannerRetry() {
  if (adState.bannerTimer) {
    clearTimeout(adState.bannerTimer);
  }
  const delay = Math.min(30000, 2000 + adState.bannerRetry * 3000);
  adState.bannerRetry += 1;
  adState.bannerTimer = setTimeout(() => {
    showBanner();
  }, delay);
}

async function showBanner() {
  if (!adsEnabled || !isNative() || !admob) {
    return;
  }
  try {
    await admob.showBanner({
      adId: adConfig.bannerId,
      adSize: "ADAPTIVE_BANNER",
      position: "BOTTOM_CENTER",
      margin: 0,
    });
    adState.bannerVisible = true;
    adState.bannerRetry = 0;
  } catch (err) {
    adState.bannerVisible = false;
    scheduleBannerRetry();
  }
}

async function initAds() {
  if (!adsEnabled || !isNative() || !admob) {
    return;
  }
  if (adState.initialized) {
    return;
  }
  adState.initialized = true;
  try {
    await admob.initialize();
    admob.addListener?.("bannerAdLoaded", () => {
      adState.bannerVisible = true;
      adState.bannerRetry = 0;
    });
    admob.addListener?.("bannerAdFailedToLoad", () => {
      adState.bannerVisible = false;
      scheduleBannerRetry();
    });
    await showBanner();
  } catch (err) {
    adState.initialized = false;
  }
  await prepareInterstitial();
}

async function prepareInterstitial() {
  if (!adsEnabled || !isNative() || !admob) {
    return;
  }
  try {
    await admob.prepareInterstitial({
      adId: adConfig.interstitialId,
    });
    adState.interstitialReady = true;
  } catch (err) {
    adState.interstitialReady = false;
  }
}

async function maybeShowInterstitial() {
  if (!adsEnabled || !isNative() || !admob) {
    return;
  }
  if (state.deaths % 10 !== 0) {
    return;
  }
  try {
    if (!adState.interstitialReady) {
      await prepareInterstitial();
    }
    await admob.showInterstitial();
  } catch (err) {
    return;
  }
  adState.interstitialReady = false;
  await prepareInterstitial();
  await showBanner();
}

function setPurchaseStatus(message) {
  if (!purchaseStatusEl) {
    return;
  }
  purchaseStatusEl.textContent = message;
}

function getProductPrice(product) {
  if (!product) {
    return "";
  }
  if (product.pricing && product.pricing.price) {
    return product.pricing.price;
  }
  const offer = product.getOffer?.();
  const phase = offer?.pricingPhases?.[0];
  return phase?.price || "";
}

function updatePurchaseUI() {
  // Logic simplified for specific store button, no longer toggling a whole section
  const hasStore = Boolean(window.CdvPurchase && isNative());

  if (!hasStore) {
    if (removeAdsPriceEl) removeAdsPriceEl.textContent = "";
    return;
  }

  if (removeAdsPriceEl) {
    const price = getProductPrice(iapState.product);
    removeAdsPriceEl.textContent = price || t("removeAdsPricePending");
  }

  if (iapState.owned) {
    if (removeAdsButton) {
      removeAdsButton.disabled = true;
      removeAdsButton.textContent = t("removeAdsOwned");
    }
    return;
  }

  if (!iapState.ready) {
    setPurchaseStatus(t("removeAdsLoading"));
  } else if (iapState.lastError) {
    setPurchaseStatus(iapState.lastError);
  } else {
    setPurchaseStatus("");
  }

  if (removeAdsButton) {
    removeAdsButton.disabled = !iapState.ready || iapState.busy;
    removeAdsButton.classList.toggle("is-loading", iapState.busy);
  }
  if (restorePurchasesButton) {
    restorePurchasesButton.disabled = !iapState.ready || iapState.busy;
  }
}

function refreshIapOwnership(source = "refresh") {
  const store = iapState.store;
  if (!store) {
    updatePurchaseUI();
    return;
  }
  const owned = store.owned(IAP_REMOVE_ADS_ID);
  if (owned) {
    grantRemoveAds(source);
    return;
  }
  updatePurchaseUI();
}

async function initIapStore() {
  if (!window.CdvPurchase || !isNative()) {
    updatePurchaseUI();
    return;
  }
  const { store, ProductType, Platform, LogLevel } = window.CdvPurchase;
  iapState.store = store;
  store.verbosity = LogLevel.WARNING;

  store.register([
    {
      id: IAP_REMOVE_ADS_ID,
      type: ProductType.NON_CONSUMABLE,
      platform: Platform.GOOGLE_PLAY,
    },
    {
      id: IAP_REMOVE_ADS_ID,
      type: ProductType.NON_CONSUMABLE,
      platform: Platform.APPLE_APPSTORE,
    },
  ]);

  const validator = window.ORBIDASH_IAP_VALIDATOR_URL;
  if (validator) {
    store.validator = validator;
  }

  store
    .when()
    .productUpdated((product) => {
      if (product.id === IAP_REMOVE_ADS_ID) {
        iapState.product = product;
        updatePurchaseUI();
      }
    })
    .receiptUpdated(() => {
      refreshIapOwnership("receipt");
    })
    .approved((transaction) => {
      if (store.validator) {
        transaction.verify();
      } else {
        transaction.finish();
        grantRemoveAds("purchase");
      }
    })
    .verified((receipt) => {
      receipt.finish();
      refreshIapOwnership("verified");
    })
    .unverified(() => {
      iapState.lastError = t("removeAdsVerifyFailed");
      updatePurchaseUI();
    })
    .receiptsReady(() => {
      refreshIapOwnership("ready");
    });

  const errors = await store.initialize([
    Platform.GOOGLE_PLAY,
    {
      platform: Platform.APPLE_APPSTORE,
      options: { needAppReceipt: true },
    },
  ]);

  if (errors && errors.length) {
    iapState.lastError = t("removeAdsStoreError");
    updatePurchaseUI();
    return;
  }

  iapState.ready = true;
  iapState.available = true;
  iapState.lastError = "";
  updatePurchaseUI();
  await store.update();
  refreshIapOwnership("init");
}

async function purchaseRemoveAds(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  if (!iapState.store || !iapState.ready || iapState.busy) {
    if (!isNative()) {
      alert(t("removeAdsBillingUnavailable"));
    }
    return;
  }
  if (iapState.owned) {
    updatePurchaseUI();
    return;
  }
  const product = iapState.product || iapState.store.get(IAP_REMOVE_ADS_ID);
  const offer = product?.getOffer?.();
  if (!offer) {
    iapState.lastError = t("removeAdsUnavailable");
    updatePurchaseUI();
    return;
  }
  iapState.busy = true;
  iapState.lastError = "";
  updatePurchaseUI();

  const error = await iapState.store.order(offer);
  iapState.busy = false;
  if (error) {
    if (error.code === window.CdvPurchase.ErrorCode.PAYMENT_CANCELLED) {
      iapState.lastError = t("removeAdsCancelled");
    } else {
      iapState.lastError = t("removeAdsError");
    }
  }
  updatePurchaseUI();
}

async function restorePurchases(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  if (!iapState.store || !iapState.ready || iapState.busy) {
    return;
  }
  iapState.busy = true;
  iapState.lastError = "";
  setPurchaseStatus(t("removeAdsRestoring"));
  updatePurchaseUI();

  const error = await iapState.store.restorePurchases();
  iapState.busy = false;
  if (error) {
    iapState.lastError = t("removeAdsRestoreError");
  } else {
    iapState.lastError = "";
    setPurchaseStatus(t("removeAdsRestoreDone"));
    refreshIapOwnership("restore");
  }
  updatePurchaseUI();
}

const translations = {
  en: {
    badge: "Arcade Core",
    title: "Tap to flip the orbit",
    subtitle: "Line up with the gap and pass through the rings.",
    tipFast: "Quick taps boost your spin",
    tipCombo: "Combos increase your score",
    cta: "Play now",
    ctaReplay: "Play again",
    recordBadge: "New record",
    recordChip: "High score",
    recordOverTitlePersonal: "Personal best!",
    recordOverTextPersonal: "New best: {score}",
    recordOverTitleGlobal: "Global record!",
    recordOverTextGlobal: "You lead the leaderboard: {score}",
    recordLabel: "New record",
    leaderboardTitle: "Global ranking",
    youName: "YOU",
    focusTitle: "Total focus",
    focusText: "Tap to flip and cross the gap.",
    gameOverTitle: "Game over",
    gameOverText: "Final score: {score}",
    removeAdsTitle: "Remove ads",
    removeAdsSubtitle: "One-time purchase to remove all ads.",
    removeAdsCta: "Remove ads",
    removeAdsOwned: "Ads removed",
    removeAdsUnavailable: "Available on mobile only",
    removeAdsLoading: "Loading store...",
    removeAdsPricePending: "Price...",
    removeAdsCancelled: "Purchase cancelled",
    removeAdsError: "Purchase failed. Try again.",
    removeAdsVerifyFailed: "Purchase needs verification.",
    removeAdsStoreError: "Store unavailable right now.",
    removeAdsRestoring: "Restoring purchases...",
    removeAdsRestoreDone: "Purchases restored.",
    removeAdsRestoreError: "Restore failed. Try again.",
    restorePurchases: "Restore purchases",
    storeNavLabel: "Store",
    removeAdsBillingUnavailable: "Billing is only available on a mobile device with Google Play/App Store.",
    navRankLabel: "Ranking",
    navSoundLabel: "Sound",
    pauseLabel: "Pause",
    closeLabel: "Close",
    hudScoreLabel: "Score",
    hudBestLabel: "Best",
    ctaHome: "Back to menu",
    ctaResume: "Resume",
    ctaExit: "Exit Game",
    pauseTitle: "Paused",
    pauseText: "Take a breath, you're doing great.",
  },
  pt: {
    badge: "Arcade Core",
    title: "Toque para inverter a orbita",
    subtitle: "Alinhe a bolinha com o gap e atravesse os aneis.",
    tipFast: "Toques rapidos aumentam o giro",
    tipCombo: "Combos aumentam a pontuacao",
    cta: "Jogar agora",
    ctaReplay: "Jogar de novo",
    recordBadge: "Novo recorde",
    recordChip: "Recorde alcancado",
    recordOverTitlePersonal: "Recorde pessoal!",
    recordOverTextPersonal: "Novo melhor placar: {score}",
    recordOverTitleGlobal: "Recorde global!",
    recordOverTextGlobal: "Voce lidera o ranking: {score}",
    recordLabel: "Novo recorde",
    leaderboardTitle: "Ranking global",
    youName: "VOCE",
    focusTitle: "Foco total",
    focusText: "Toque para inverter e atravessar o gap.",
    gameOverTitle: "Fim de jogo",
    gameOverText: "Pontuacao final: {score}",
    removeAdsTitle: "Remover anuncios",
    removeAdsSubtitle: "Compra unica para remover todos os anuncios.",
    removeAdsCta: "Remover anuncios",
    removeAdsOwned: "Anuncios removidos",
    removeAdsUnavailable: "Disponivel somente no app",
    removeAdsLoading: "Carregando loja...",
    removeAdsPricePending: "Preco...",
    removeAdsCancelled: "Compra cancelada",
    removeAdsError: "Falha na compra. Tente novamente.",
    removeAdsVerifyFailed: "Compra precisa de verificacao.",
    removeAdsStoreError: "Loja indisponivel no momento.",
    removeAdsRestoring: "Restaurando compras...",
    removeAdsRestoreDone: "Compras restauradas.",
    removeAdsRestoreError: "Falha ao restaurar. Tente novamente.",
    restorePurchases: "Restaurar compras",
    storeNavLabel: "Loja",
    removeAdsBillingUnavailable: "Pagamento disponivel apenas no app com Google Play/App Store.",
    navRankLabel: "Ranking",
    navSoundLabel: "Som",
    pauseLabel: "Pausar",
    pauseTitle: "Pausado",
    closeLabel: "Fechar",
    hudScoreLabel: "Pontos",
    hudBestLabel: "Recorde",
    ctaHome: "Voltar ao menu",
  },
  es: {
    badge: "Arcade Core",
    title: "Toca para invertir la orbita",
    subtitle: "Alinea con la abertura y cruza los anillos.",
    tipFast: "Toques rapidos impulsan el giro",
    tipCombo: "Los combos aumentan tu puntaje",
    cta: "Jugar ahora",
    ctaReplay: "Jugar otra vez",
    recordBadge: "Nuevo record",
    recordChip: "Record logrado",
    recordOverTitlePersonal: "Record personal",
    recordOverTextPersonal: "Nuevo mejor puntaje: {score}",
    recordOverTitleGlobal: "Record global",
    recordOverTextGlobal: "Lideras el ranking: {score}",
    recordLabel: "Nuevo record",
    leaderboardTitle: "Ranking global",
    youName: "TU",
    focusTitle: "Concentracion total",
    focusText: "Toca para invertir y cruzar el hueco.",
    gameOverTitle: "Fin del juego",
    gameOverText: "Puntaje final: {score}",
    removeAdsTitle: "Quitar anuncios",
    removeAdsSubtitle: "Compra unica para quitar todos los anuncios.",
    removeAdsCta: "Quitar anuncios",
    removeAdsOwned: "Anuncios eliminados",
    removeAdsUnavailable: "Disponible solo en la app",
    removeAdsLoading: "Cargando tienda...",
    removeAdsPricePending: "Precio...",
    removeAdsCancelled: "Compra cancelada",
    removeAdsError: "Fallo en la compra. Intentalo de nuevo.",
    removeAdsVerifyFailed: "La compra necesita verificacion.",
    removeAdsStoreError: "Tienda no disponible ahora.",
    removeAdsRestoring: "Restaurando compras...",
    removeAdsRestoreDone: "Compras restauradas.",
    removeAdsRestoreError: "Error al restaurar. Intenta de nuevo.",
    restorePurchases: "Restaurar compras",
    storeNavLabel: "Tienda",
    removeAdsBillingUnavailable: "El pago solo esta disponible en una app con Google Play/App Store.",
    navRankLabel: "Ranking",
    navSoundLabel: "Sonido",
    pauseLabel: "Pausa",
    pauseTitle: "Pausa",
    closeLabel: "Cerrar",
    hudScoreLabel: "Puntuacion",
    hudBestLabel: "Record",
    ctaHome: "Volver al menu",
  },
  fr: {
    badge: "Arcade Core",
    title: "Touchez pour inverser l orbite",
    subtitle: "Alignez la bille avec l ouverture.",
    tipFast: "Des touches rapides augmentent la rotation",
    tipCombo: "Les combos augmentent le score",
    cta: "Jouer maintenant",
    ctaReplay: "Rejouer",
    recordBadge: "Nouveau record",
    recordChip: "Record atteint",
    recordOverTitlePersonal: "Record personnel",
    recordOverTextPersonal: "Nouveau meilleur score: {score}",
    recordOverTitleGlobal: "Record mondial",
    recordOverTextGlobal: "Vous etes en tete: {score}",
    recordLabel: "Nouveau record",
    leaderboardTitle: "Classement global",
    youName: "VOUS",
    focusTitle: "Concentration totale",
    focusText: "Touchez pour inverser et passer l ouverture.",
    gameOverTitle: "Fin de partie",
    gameOverText: "Score final: {score}",
    removeAdsTitle: "Supprimer les pubs",
    removeAdsSubtitle: "Achat unique pour supprimer toutes les pubs.",
    removeAdsCta: "Supprimer les pubs",
    removeAdsOwned: "Pubs supprimées",
    removeAdsUnavailable: "Disponible uniquement dans l app",
    removeAdsLoading: "Chargement de la boutique...",
    removeAdsPricePending: "Prix...",
    removeAdsCancelled: "Achat annule",
    removeAdsError: "Echec de l achat. Reessayez.",
    removeAdsVerifyFailed: "Achat a verifier.",
    removeAdsStoreError: "Boutique indisponible.",
    removeAdsRestoring: "Restauration des achats...",
    removeAdsRestoreDone: "Achats restaures.",
    removeAdsRestoreError: "Echec de restauration. Reessayez.",
    restorePurchases: "Restaurer les achats",
    storeNavLabel: "Boutique",
    removeAdsBillingUnavailable: "Le paiement est disponible uniquement dans l app avec Google Play/App Store.",
    navRankLabel: "Classement",
    navSoundLabel: "Son",
    pauseLabel: "Pause",
    pauseTitle: "Pause",
    closeLabel: "Fermer",
    hudScoreLabel: "Score",
    hudBestLabel: "Record",
    ctaHome: "Retour au menu",
  },
};

function pickLocale() {
  const raw = (navigator.language || "en").toLowerCase();
  const base = raw.split("-")[0];
  if (translations[raw]) {
    return raw;
  }
  if (translations[base]) {
    return base;
  }
  return "en";
}

const locale = pickLocale();

function t(key, vars = {}) {
  const dict = translations[locale] || translations.en;
  const template = dict[key] || translations.en[key] || "";
  return template.replace(/\{(\w+)\}/g, (_, token) =>
    Object.prototype.hasOwnProperty.call(vars, token) ? vars[token] : ""
  );
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
  });
  if (btnNavRank) {
    btnNavRank.setAttribute("aria-label", t("navRankLabel"));
  }
  if (btnNavSound) {
    btnNavSound.setAttribute("aria-label", t("navSoundLabel"));
  }
  if (btnNavStore) {
    btnNavStore.setAttribute("aria-label", t("storeNavLabel"));
  }
  if (btnCloseRank) {
    btnCloseRank.setAttribute("aria-label", t("closeLabel"));
  }
  if (btnCloseStore) {
    btnCloseStore.setAttribute("aria-label", t("closeLabel"));
  }
  if (pauseButton) {
    pauseButton.setAttribute("aria-label", t("pauseLabel"));
  }
  if (startButton) {
    startButton.setAttribute("aria-label", t("cta"));
  }
  if (btnReplay) {
    btnReplay.setAttribute("aria-label", t("ctaReplay"));
  }
}

const baseLeaders = [
  { name: "NOVA", score: 180 },
  { name: "ARC", score: 160 },
  { name: "BYTE", score: 142 },
  { name: "ZEN", score: 128 },
];
const globalRecord = Math.max(...baseLeaders.map((entry) => entry.score));

function updateLeaderboard() {
  if (!leaderboardList) {
    return;
  }
  const entries = baseLeaders.map((entry) => ({ ...entry }));
  const playerScore = state.best;
  if (playerScore > 0) {
    const playerEntry = { name: t("youName"), score: playerScore, isPlayer: true };
    const filtered = entries.filter((entry) => entry.name !== playerEntry.name);
    filtered.push(playerEntry);
    filtered.sort((a, b) => b.score - a.score);
    const top = filtered.slice(0, 8);
    const inTop = top.some((entry) => entry.isPlayer);
    const finalList = inTop ? top : [...top.slice(0, 7), playerEntry];
    renderLeaderboard(finalList);
    return;
  }
  renderLeaderboard(entries);
}

function renderLeaderboard(entries) {
  leaderboardList.innerHTML = "";
  entries.forEach((entry, index) => {
    const item = document.createElement("li");
    item.className = `leaderboard-item${entry.isPlayer ? " you" : ""}`;
    item.innerHTML = `
      <span class="leaderboard-rank">${index + 1}</span>
      <span class="leaderboard-name">${entry.name}</span>
      <span class="leaderboard-score">${entry.score}</span>
    `;
    leaderboardList.appendChild(item);
  });
}

// Old setOverlayMode removed - using new View System below

const state = {
  playing: false,
  score: 0,
  best: Number(localStorage.getItem("orbit-best") || 0),
  direction: 1,
  angle: 0,
  angularSpeed: 0,
  flipBoost: 0,
  rings: [],
  spawnTimer: 0,
  lastTime: 0,
  stars: [],
  starPhase: 0,
  recordTriggered: false,
  recordGlobal: false,
  runStartedAt: 0,
  deaths: 0,
};

const config = {
  baseAngularSpeed: 3.6,
  baseRingSpeed: 140,
  ringSpacing: 1.35,
  ringThickness: 26,
  gapSize: Math.PI / 1.8,
  gapGrace: 0.35,
  flipBoost: 0.8,
  accel: 6,
};

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  createStars();
}

function createStars() {
  state.stars = [];
  const count = Math.floor((window.innerWidth + window.innerHeight) / 10);
  for (let i = 0; i < count; i += 1) {
    state.stars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.2,
      a: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 8 + 4,
      tw: Math.random() * Math.PI * 2,
    });
  }
}

function angleDiff(a, b) {
  const diff = Math.atan2(Math.sin(a - b), Math.cos(a - b));
  return Math.abs(diff);
}

// --- View System Logic ---

function switchView(viewId) {
  views.forEach(v => v.classList.remove('active'));
  const target = document.getElementById(viewId);
  if (target) {
    target.classList.add('active');
  }
  overlay.classList.add('show');

  // Hide HUD in Menu AND Pause/Game Over views
  // Only show HUD when the game overlay is completely hidden (playing) due to switchView closure?
  // Actually switchView is called FOR overlays.
  // So if ANY view is active (menu, pause, gameover), HUD should be hidden.
  // HUD should only be visible when NO view is active (gameplay).

  if (viewId === 'view-menu' || viewId === 'view-gameover' || viewId === 'view-pause') {
    if (hud) hud.classList.add('hidden');
  } else {
    // For other modals (leaderboard/store) we might keep HUD or hide it.
    // Let's hide it for cleanliness.
    if (hud) hud.classList.add('hidden');
  }
}

// NOTE: When starting game, we manually remove 'hidden' from hud.
// So this logic covers HIDING it when entering menus.

function setOverlayMode(mode, score = 0, isRecord = false) {
  if (mode === "record" || mode === "gameover") {
    if (scoreEndEl) scoreEndEl.textContent = String(score);
    if (recordChip) {
      if (isRecord) {
        recordChip.classList.remove('hidden');
      } else {
        recordChip.classList.add('hidden');
      }
    }
    switchView('view-gameover');
    return;
  }

  if (mode === "pause") {
    switchView('view-pause');
    return;
  }

  // Default to menu
  switchView('view-menu');
}

function resetGame() {
  state.score = 0;
  state.direction = 1;
  state.angle = Math.random() * Math.PI * 2;
  state.angularSpeed = config.baseAngularSpeed;
  state.flipBoost = 0;
  state.rings = [];
  state.spawnTimer = 0;
  state.lastTime = performance.now();
  state.recordTriggered = false;
  state.recordGlobal = false;
  state.runStartedAt = Date.now();
  if (scoreEl) scoreEl.textContent = "0";
  if (recordCelebration) recordCelebration.classList.remove("show");
  if (bestEl) bestEl.classList.remove("best-glow");
  setOverlayMode("menu");
  updateLeaderboard();

  // Ensure HUD is hidden on reset (menu)
  if (hud) hud.classList.add('hidden');
}


function triggerRecordCelebration(score) {
  if (recordScoreEl) recordScoreEl.textContent = String(score);
  if (recordCelebration) {
    recordCelebration.classList.remove("show");
    void recordCelebration.offsetWidth;
    recordCelebration.classList.add("show");
  }
  if (bestEl) {
    bestEl.classList.remove("best-glow");
    void bestEl.offsetWidth;
    bestEl.classList.add("best-glow");
  }
  logEvent("record_celebration", { best: score, global: state.recordGlobal });
  playRecordSound();
}

function spawnRing() {
  const maxRadius = Math.min(window.innerWidth, window.innerHeight) * 0.45;
  state.rings.push({
    radius: maxRadius + 160,
    prevRadius: maxRadius + 160,
    gapCenter: Math.random() * Math.PI * 2,
    gapSize: config.gapSize,
    overlapping: false,
    scored: false,
  });
}

function update(dt) {
  const speedBoost = 1 + Math.min(state.score / 30, 1.8);
  const targetAngular = config.baseAngularSpeed * speedBoost;
  state.angularSpeed +=
    (targetAngular - state.angularSpeed) * Math.min(1, dt * config.accel);
  const ringSpeed = config.baseRingSpeed * speedBoost;

  const boost = 1 + state.flipBoost * config.flipBoost;
  state.angle += state.direction * state.angularSpeed * boost * dt;
  state.flipBoost = Math.max(0, state.flipBoost - dt * 4);
  state.spawnTimer += dt;
  state.starPhase += dt;

  const spawnInterval =
    (config.ringSpacing * config.gapSize) / targetAngular + 0.2;

  if (state.spawnTimer > spawnInterval) {
    state.spawnTimer = 0;
    spawnRing();
  }

  const playerRadius = Math.min(window.innerWidth, window.innerHeight) * 0.28;
  const ballRadius = 10;
  const hitBand = config.ringThickness / 2 + ballRadius;
  const upperBand = playerRadius + hitBand;
  const lowerBand = playerRadius - hitBand;

  state.rings.forEach((ring) => {
    ring.prevRadius = ring.radius;
    ring.radius -= ringSpeed * dt;

    const inBand = ring.radius <= upperBand && ring.radius >= lowerBand;
    const skippedBand = ring.prevRadius > upperBand && ring.radius < lowerBand;
    const shouldCheck = (inBand || skippedBand || ring.overlapping) && !ring.scored;

    if (shouldCheck) {
      const gapHalf = ring.gapSize / 2 + config.gapGrace;
      const angularMargin = Math.asin(
        Math.min((ballRadius + 6) / playerRadius, 0.6)
      );
      const safeThreshold = gapHalf - angularMargin;
      const safe =
        safeThreshold > 0 &&
        angleDiff(state.angle, ring.gapCenter) <= safeThreshold;
      if (!safe) {
        endGame();
      } else {
        ring.overlapping = true;
      }
    }

    if (ring.overlapping && !ring.scored && ring.radius < lowerBand) {
      ring.scored = true;
      const bonus = Math.max(0, Math.floor(speedBoost - 1));
      const gain = 1 + bonus;
      state.score += gain;
      scoreEl.textContent = String(state.score);
      logEvent("score_gain", { score: state.score, gain });
      if (gain > 1) {
        logEvent("combo_gain", { score: state.score, gain, bonus });
      }
      playScoreSound();
      if (state.score > state.best) {
        state.best = state.score;
        localStorage.setItem("orbit-best", String(state.best));
        bestEl.textContent = String(state.best);
        logEvent("best_update", { best: state.best });
        state.recordGlobal = state.best > globalRecord;
        updateLeaderboard();
        if (!state.recordTriggered) {
          state.recordTriggered = true;
          triggerRecordCelebration(state.best);
          logEvent("new_record", {
            best: state.best,
            global: state.recordGlobal,
          });
        }
      }
      scoreEl.classList.remove("score-burst");
      void scoreEl.offsetWidth;
      scoreEl.classList.add("score-burst");
      scorePop.textContent = `+${gain}`;
      scorePop.classList.remove("show");
      void scorePop.offsetWidth;
      scorePop.classList.add("show");
    }
  });

  state.rings = state.rings.filter((ring) => ring.radius > lowerBand - 140);
}

function drawBackground() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  const gradient = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
  gradient.addColorStop(0, "#0a1020");
  gradient.addColorStop(0.5, "#0b1528");
  gradient.addColorStop(1, "#0c1a30");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.save();
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  state.stars.forEach((star) => {
    const drift = (star.y + state.starPhase * star.speed) % window.innerHeight;
    const twinkle = 0.6 + 0.4 * Math.sin(state.starPhase * 2 + star.tw);
    ctx.globalAlpha = star.a * twinkle;
    ctx.beginPath();
    ctx.arc(star.x, drift, star.r, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

function draw() {
  drawBackground();

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const playerRadius = Math.min(window.innerWidth, window.innerHeight) * 0.28;

  ctx.save();
  ctx.translate(centerX, centerY);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.14)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, playerRadius, 0, Math.PI * 2);
  ctx.stroke();

  state.rings.forEach((ring) => {
    if (ring.radius <= 0) {
      return;
    }
    const gapStart = ring.gapCenter - ring.gapSize / 2;
    const gapEnd = ring.gapCenter + ring.gapSize / 2;

    ctx.strokeStyle = "rgba(255, 209, 102, 0.95)";
    ctx.lineWidth = config.ringThickness;
    ctx.shadowColor = "rgba(255, 209, 102, 0.6)";
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(0, 0, ring.radius, gapEnd, gapStart + Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "rgba(110, 231, 255, 0.9)";
    ctx.lineWidth = 4;
    ctx.shadowColor = "rgba(110, 231, 255, 0.8)";
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(0, 0, ring.radius, gapStart, gapEnd);
    ctx.stroke();
  });

  const px = Math.cos(state.angle) * playerRadius;
  const py = Math.sin(state.angle) * playerRadius;
  const glow = ctx.createRadialGradient(px, py, 2, px, py, 18);
  glow.addColorStop(0, "rgba(255, 255, 255, 1)");
  glow.addColorStop(1, "rgba(110, 231, 255, 0.2)");
  ctx.fillStyle = glow;
  ctx.shadowColor = "rgba(110, 231, 255, 0.9)";
  ctx.shadowBlur = 20;
  ctx.beginPath();
  ctx.arc(px, py, 10, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function loop(timestamp) {
  if (!state.playing) {
    draw();
    requestAnimationFrame(loop);
    return;
  }

  const dt = Math.min((timestamp - state.lastTime) / 1000, 0.033);
  state.lastTime = timestamp;
  update(dt);
  draw();
  requestAnimationFrame(loop);
}

function startGame() {
  // Hide overlay to show game
  overlay.classList.remove("show");

  // Reset game state
  state.score = 0;
  state.direction = 1;
  state.angle = Math.random() * Math.PI * 2;
  state.angularSpeed = config.baseAngularSpeed;
  state.flipBoost = 0;
  state.rings = [];
  state.spawnTimer = 0;
  state.lastTime = performance.now();
  state.recordTriggered = false;
  state.recordGlobal = false;

  if (scoreEl) scoreEl.textContent = "0";
  if (recordCelebration) recordCelebration.classList.remove("show");
  if (bestEl) bestEl.classList.remove("best-glow");

  // Show HUD
  if (hud) hud.classList.remove('hidden');

  onUserGesture();
  logEvent("game_start", { locale });
  state.playing = true;
}

function endGame() {
  state.playing = false;
  if (bestEl) bestEl.textContent = String(state.best);
  if (state.runStartedAt) {
    const durationMs = Date.now() - state.runStartedAt;
    logEvent("game_session_duration", { duration_ms: durationMs, score: state.score, best: state.best });
  }
  logEvent("game_over", { score: state.score, best: state.best });
  state.deaths += 1;
  maybeShowInterstitial();

  if (!state.recordTriggered) {
    playGameOverSound();
  }

  // Show game over screen
  setOverlayMode(state.recordTriggered ? "record" : "gameover", state.score, state.recordTriggered);
}

function handleTap() {
  if (!state.playing) {
    return;
  }
  onUserGesture();
  playFlipSound();
  state.direction *= -1;
  state.flipBoost = 1;
}

const startHandler = (event) => {
  if (event && event.type !== 'touchstart') {
    event.preventDefault();
  }
  onUserGesture();
  startGame();
};

if (startButton) {
  startButton.addEventListener("click", startHandler);
  startButton.addEventListener("touchstart", startHandler, { passive: true });
}

// Canvas tap handler for gameplay - use only pointerdown to avoid double-firing
let lastTapTime = 0;
function handleCanvasTap(e) {
  const now = Date.now();
  // Debounce: ignore taps within 50ms of each other
  if (now - lastTapTime < 50) {
    return;
  }
  lastTapTime = now;

  if (state.playing) {
    if (e.cancelable) {
      e.preventDefault();
    }
    handleTap();
  }
}

canvas.addEventListener("pointerdown", handleCanvasTap);
// Don't add touchstart - pointerdown handles touch events too
if (!("PointerEvent" in window) && desktopQuery.matches) {
  canvas.addEventListener("click", handleCanvasTap);
}

window.addEventListener("resize", resize);
const pauseHandler = (event) => {
  if (event) event.preventDefault();
  if (state.playing) {
    state.playing = false;
    setOverlayMode("pause");
    logEvent("game_pause", { score: state.score });
  }
};

const resumeHandler = (event) => {
  if (event) event.preventDefault();
  state.lastTime = performance.now();
  state.playing = true;
  overlay.classList.remove("show");
  logEvent("game_resume", { score: state.score });
};

const exitHandler = (event) => {
  if (event) event.preventDefault();
  resetGame();
  logEvent("game_exit", { score: state.score, best: state.best });
};

function getActiveViewId() {
  const activeView = document.querySelector(".view.active");
  return activeView ? activeView.id : "";
}

function isEditableTarget(target) {
  if (!target || !(target instanceof Element)) {
    return false;
  }
  if (target.isContentEditable) {
    return true;
  }
  return Boolean(
    target.closest("input, textarea, select, [contenteditable='true']")
  );
}

function handleSpaceInput(event) {
  if (!desktopQuery.matches) {
    return;
  }
  const isSpace =
    event.code === "Space" || event.key === " " || event.key === "Spacebar";
  if (!isSpace) {
    return;
  }
  if (event.repeat || isEditableTarget(event.target)) {
    return;
  }

  event.preventDefault();

  if (state.playing) {
    handleTap();
    return;
  }

  const activeViewId = getActiveViewId();
  if (activeViewId === "view-pause") {
    resumeHandler(event);
    return;
  }
  if (activeViewId === "view-menu" || activeViewId === "view-gameover") {
    startHandler(event);
  }
}

document.addEventListener("keydown", handleSpaceInput);

// Event Listeners for New UI
if (btnNavRank) btnNavRank.onclick = () => switchView('view-leaderboard');
if (btnNavStore) btnNavStore.onclick = () => switchView('view-store');
if (btnCloseRank) btnCloseRank.onclick = () => switchView('view-menu');
if (btnCloseStore) btnCloseStore.onclick = () => switchView('view-menu');

if (btnReplay) btnReplay.onclick = startHandler;
if (btnHome) btnHome.onclick = (e) => { e.preventDefault(); resetGame(); };

if (pauseButton) {
  pauseButton.addEventListener("click", pauseHandler);
  pauseButton.addEventListener("touchstart", pauseHandler, { passive: false });
}
if (resumeButton) {
  resumeButton.addEventListener("click", resumeHandler);
  resumeButton.addEventListener("touchstart", resumeHandler, { passive: false });
}
if (exitButton) {
  exitButton.addEventListener("click", exitHandler);
  exitButton.addEventListener("touchstart", exitHandler, { passive: false });
}

if (removeAdsButton) {
  removeAdsButton.addEventListener("click", purchaseRemoveAds);
}
if (restorePurchasesButton) {
  restorePurchasesButton.addEventListener("click", restorePurchases);
}

if (bestEl) bestEl.textContent = String(state.best);
applyTranslations();
setOverlayMode("menu");
updateLeaderboard();
resize();
spawnRing();
requestAnimationFrame(loop);

logEvent("session_start", { locale });
updatePurchaseUI();
if (isNative()) {
  if (window.CdvPurchase) {
    initIapStore();
  } else {
    document.addEventListener("deviceready", initIapStore, { once: true });
  }
}

if (adsEnabled) {
  initAds();
}

document.addEventListener("visibilitychange", () => {
  if (!document.hidden && adsEnabled) {
    showBanner();
  }
});
document.addEventListener("resume", () => {
  if (adsEnabled) {
    showBanner();
  }
});
