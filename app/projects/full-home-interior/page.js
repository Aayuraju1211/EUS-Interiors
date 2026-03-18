import ProjectDetailLayout from "../../components/ProjectDetailLayout";

export const metadata = {
    title: "Full Home Interior Design | EUS Interior - Complete Home Makeover Nationwide",
    description:
        "Transform every corner of your home with EUS Interior's full home interior design services. End-to-end solutions from living room to bedrooms, delivered with premium craftsmanship.",
};

const processSteps = [
    {
        title: "Design Consultation",
        description:
            "We visit your home, understand your lifestyle, and craft a personalized design blueprint tailored to your family's needs.",
    },
    {
        title: "Mood Boards & 3D Renders",
        description:
            "Explore curated mood boards and room-by-room 3D walkthroughs before we begin, ensuring every detail is exactly as you envision.",
    },
    {
        title: "Material Selection",
        description:
            "Hand-pick from our showroom of premium laminates, fabrics, stones, and hardware — all sourced from trusted brands.",
    },
    {
        title: "Execution & Handover",
        description:
            "Our in-house team handles everything from civil work to final styling, delivering your complete home in 45-60 days.",
    },
];

const materials = [
    "ISI-certified marine plywood (710 grade)",
    "Hettich & Blum soft-close hardware",
    "Premium acrylic & lacquered glass finishes",
    "Italian marble & vitrified tile flooring",
    "PU-painted MDF for seamless surfaces",
    "Upholstered wall panels (leatherette & fabric)",
    "Designer wallpapers (imported collections)",
    "Cove lighting with warm-white LED profiles",
];

const galleryImages = [
    { src: "/fhi-1.png", alt: "Modern TV unit and living area" },
    { src: "/fhi-2.png", alt: "Contemporary open-plan living room" },
    { src: "/fhi-3.jpg", alt: "Elegant master bedroom design" },
];

export default function FullHomeInteriorPage() {
    return (
        <ProjectDetailLayout
            title="Full Home Interior"
            subtitle="Every room. Every detail. Beautifully designed."
            heroImage="/full-home-interior.jpg"
            overview="A full home interior is more than furniture — it's the art of creating a cohesive living experience. At EUS Interior, we design every room as a chapter in your home's story: from the welcoming warmth of your living room, to the serene privacy of your bedrooms, to the functional elegance of your kitchen and bathrooms. Our end-to-end service covers everything — false ceilings, custom furniture, lighting, flooring, and styling — so you can move into a home that feels truly yours."
            process={processSteps}
            materials={materials}
            galleryImages={galleryImages}
        />
    );
}
