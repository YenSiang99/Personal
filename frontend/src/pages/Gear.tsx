// pages/Gear.jsx

import Accordion from "../components/ui/Accordion.tsx";

function Gear() {
  const laptop_links = [
    {
      title: "Macbook Air",
      subtitle:
        "M3 Chip , 16GB Ram , 512GB SSD. Best bang for buck for what I do.",
      href: "https://www.apple.com/my/shop/buy-mac/macbook-air/13-inch-m3",
      // imageSrc: "/keyboards/lofree.png",
      // imageAlt: "Lofree Flow Keyboard",
    },
    {
      title: "Ugreen Revodok Dongle",
      subtitle:
        "Ugreen 6 in 1 dongle: Best one dongle solution for fast USB A/C port transfer speeds, display ports and power delivery.",
      href: "https://s.lazada.com.my/s.nHEj3",
      // imageSrc: "/keyboards/lofree.png",
      // imageAlt: "Lofree Flow Keyboard",
    },
  ];
  const kvm_links = [
    {
      title: "Keyboard",
      subtitle:
        "Rainy 75: Non-RGB Lite edition for that sweet sweet battery life",
      // imageSrc: "/keyboards/lofree.png",
      // imageAlt: "Lofree Flow Keyboard",
    },
    {
      title: "Mouse",
      subtitle: "Logitech MX Master 3: Not the S version.",
      href: "https://s.lazada.com.my/s.nHuyP",
      // imageSrc: "/keyboards/lofree.png",
      // imageAlt: "Lofree Flow Keyboard",
    },
    {
      title: "Monitor",
      subtitle:
        "ViewSonic VA2432: 24 inch, 75Hz. Simple productivity monitor that fits my needs.",
      href: "https://my.shp.ee/NHij6dH",
      // imageSrc: "/keyboards/lofree.png",
      // imageAlt: "Lofree Flow Keyboard",
    },
  ];
  const desk_accessories_links = [
    {
      title: "Desk Speakers",
      subtitle:
        "Creative Pebble V3: Equipped with bluetooth its a entry level desk speaker that wont break the bank.",
      href: "https://my.shp.ee/dvTus4u",
      // imageSrc: "/keyboards/lofree.png",
      // imageAlt: "Lofree Flow Keyboard",
    },
    {
      title: "Laptop stand",
      subtitle:
        "Random Carbon steel laptop stand: Chose a more premium material that feels more sturdy and rigid.",
      href: "https://my.shp.ee/SpPzdRV",
      // imageSrc: "/keyboards/lofree.png",
      // imageAlt: "Lofree Flow Keyboard",
    },
    {
      title: "Laptop holder",
      subtitle:
        "Ugreen 3 in 1 Laptop holder: A place to store my laptops whenever I'm not needing them to keep the desk tidyß.",
      href: "https://s.lazada.com.my/s.nHvyW",
      // imageSrc: "/keyboards/lofree.png",
      // imageAlt: "Lofree Flow Keyboard",
    },
    {
      title: "Monitor arm",
      subtitle:
        "North Bayou monitor arm: Cheap investment for monitor height adjustability and save tons of desk space.",
      href: "https://s.lazada.com.my/s.nHE9o",
      // imageSrc: "/keyboards/lofree.png",
      // imageAlt: "Lofree Flow Keyboard",
    },
    {
      title: "Keyboard Wrist Rest",
      subtitle:
        "Keychron Wallnut Rest: Has been a literal life saver to save me from having wrist fatigure from typing all day.",
      href: "https://my.shp.ee/jnbtuEX",
      // imageSrc: "/keyboards/lofree.png",
      // imageAlt: "Lofree Flow Keyboard",
    },
    {
      title: "MousePad",
      subtitle:
        "Aukey: Nothing special, just a regular mousepad to keep the desk clean from stains.",
      href: "https://my.shp.ee/x1moR7e",
      // imageSrc: "/keyboards/lofree.png",
      // imageAlt: "Lofree Flow Keyboard",
    },
  ];
  const chair_links = [
    {
      title: "Sihoo V1",
      subtitle: "Allows me to sit upright and straight to prevent backpain.",
      href: "https://my.shp.ee/7hpPYk8",
      // imageSrc: "/keyboards/lofree.png",
      // imageAlt: "Lofree Flow Keyboard",
    },
  ];

  return (
    <>
      <div className="text-center text-md">This is the stuff I use.</div>
      <div className="text-center text-md">
        Feel free to click on the links to know more about the products I use
        daily.
      </div>
      <div className="text-center text-md">Last updated: December 2024</div>
      <h1 className="text-center mb-2 mt-4">Work & Play</h1>
      <div className="flex flex-col items-center space-y-2">
        <Accordion sectionTitle="Laptop" items={laptop_links}></Accordion>
        <Accordion
          sectionTitle="Keyboard, Mouse, Monitor"
          items={kvm_links}
        ></Accordion>
        <Accordion
          sectionTitle="Desk Accessories"
          items={desk_accessories_links}
        ></Accordion>
        <Accordion sectionTitle="Chairs" items={chair_links}></Accordion>
      </div>
    </>
  );
}

export default Gear;
