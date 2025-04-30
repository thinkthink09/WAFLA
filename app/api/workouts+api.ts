export function GET(request: Request) {
  const data = [
    {
      title: "Akamai Coffee Shop",
      location: "Kihei, HI",
      date: "Today, 13:21",
      amount: (Math.random() * 10).toFixed(2),
      icon: "#FB8E41",
    },
    {
      title: "Shops at Wailea",
      location: "Wailea, HI",
      date: "Yesterday, 20:07",
      amount: (Math.random() * 25).toFixed(2),
      icon: "#0091FF",
    },
    {
      title: "Ono Hawaiian BBQ",
      location: "Paia, HI",
      date: "Thursday",
      amount: (Math.random() * 100).toFixed(2),
      icon: "#34D058",
    },
    {
      title: "Fond",
      location: "Lahaina, HI",
      date: "Wensday",
      amount: (Math.random() * 10).toFixed(2),
      icon: "#34D058",
    },
    {
      title: "Ula’Ula Cafe",
      location: "Waihee-Waiehu, HI",
      date: "Tuesday",
      amount: (Math.random() * 15).toFixed(2),
      icon: "#FB8E41",
    },
    {
      title: "Tante's Fishmarket",
      location: "Wailuku, HI",
      date: "Monday",
      amount: (Math.random() * 10).toFixed(2),
      icon: "#0091FF",
    },
  ];
  return Response.json(data);
}
