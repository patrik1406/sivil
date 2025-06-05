window.notificationAnim = function () {
  return {
    pins: [
      {
        style: "top: 15rem; right: 2.5rem;",
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
        style: "bottom: 10rem; right: 8rem;",
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
