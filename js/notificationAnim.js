function notificationAnim() {
  return {
    pins: [
      {
        style: "top: 18rem; right: 2rem;",
        icon: "icons/traffic.svg",
        pinBg: "bg-yellow-500",
        pingBg: "bg-yellow-500",
        visible: false,
      },
      {
        style: "top: 11rem; left: 3.5rem;",
        icon: "icons/explosion.svg",
        pinBg: "bg-black",
        pingBg: "bg-black",
        visible: false,
      },
      {
        style: "bottom: 5rem; right: 8rem;",
        icon: "icons/fire.svg",
        pinBg: "bg-red-500",
        pingBg: "bg-red-500",
        visible: false,
      },
    ],

    notifications: [
      { message: "Vei stengt etter kollisjon." },
      { message: "Slåsskamp i området." },
      { message: "Brann i rekkehus." },
    ],

    activeNotification: 0,

    init() {
      setTimeout(() => {
        this.activeNotification = 1;
        setTimeout(() => (this.pins[0].visible = true), 500);
      }, 1000);

      setTimeout(() => {
        this.activeNotification = 2;
        setTimeout(() => (this.pins[1].visible = true), 500);
      }, 3000);

      setTimeout(() => {
        this.activeNotification = 3;
        setTimeout(() => (this.pins[2].visible = true), 500);
      }, 5000);
    },
  };
};

function howItWorks() {
  return {
    active: 0,
    slides: [
      {
        number: 1,
        title: 'Last ned',
        text: 'Installer appen gratis fra App Store eller Google Play.',
      },
      {
        number: 2,
        title: 'Utforsk kartet',
        text: 'Se hendelser fra politi, vegvesen og andre brukere i sanntid.',
      },
      {
        number: 3,
        title: 'Få varsler',
        text: 'Motta varsler om viktige hendelser i nærheten av deg.',
      },
      {
        number: 4,
        title: 'Del videre',
        text: 'Rapporter egne observasjoner og hjelp andre i nærområdet.',
      },
    ],
    touchStartX: 0,

    next() {
      if (this.active < this.slides.length - 1) this.active++;
    },
    prev() {
      if (this.active > 0) this.active--;
    },
    startTouch(e) {
      this.touchStartX = e.changedTouches[0].clientX;
    },
    endTouch(e) {
      const diff = e.changedTouches[0].clientX - this.touchStartX;
      if (diff > 50) this.prev();
      if (diff < -50) this.next();
    },

    init() {
      setTimeout(() => {
        this.activeNotification = 1;
      }, 1000);

      setTimeout(() => {
        this.activeNotification = 2;
      }, 3000);

      setTimeout(() => {
        this.activeNotification = 3;
      }, 5000);
    },
  };
}
