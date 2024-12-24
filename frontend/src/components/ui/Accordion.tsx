import { useState, useRef } from "react";
// import Image from "next/image";

interface AccordionItem {
  title: string;
  subtitle: string;
  href?: string; // Optional since not all items might need links
  imageSrc?: string;
  imageAlt?: string;
}

// Props interface for the Accordion component
interface AccordionProps {
  sectionTitle: string;
  items: AccordionItem[];
}

const ItemContent = ({ item }: { item: AccordionItem }) => (
  <div className="flex items-center">
    <div className="flex-grow">
      <h4 className="text-md font-bold text-link-item-title">{item.title}</h4>
      <p className="text-sm text-link-item-subtitle">{item.subtitle}</p>
    </div>
    {item.imageSrc && (
      <div
        className="flex-shrink-0 ml-4"
        style={{ minHeight: "1px", width: "45px" }}
      >
        <img
          alt={item.imageAlt || item.title}
          loading="lazy"
          width={45}
          height={45}
          className="rounded-md"
          src={item.imageSrc}
          style={{ color: "transparent" }}
        />
      </div>
    )}
  </div>
);

const Accordion = ({ sectionTitle, items }: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      {/* Header/Toggle Button */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="rounded-lg p-4 cursor-pointer flex items-center justify-between w-full bg-primary-foreground text-primary scale-hover"
      >
        <p className="text-xl font-bold"> {sectionTitle}</p>
        <div
          className="transition-transform duration-200"
          style={{
            transform: isExpanded ? "rotate(180deg)" : "none",
          }}
        >
          ▼
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out `}
        style={{
          height: isExpanded ? contentRef.current?.scrollHeight + "px" : "0",
          opacity: isExpanded ? 1 : 0,
          marginTop: isExpanded ? "0.5rem" : "0",
        }}
      >
        <div ref={contentRef} className="mt-2 space-y-2 w-full">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg p-4 transition-colors duration-200 w-full bg-primary hover:bg-primary/60"
              tabIndex={0}
            >
              <ItemContent item={item}></ItemContent>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
