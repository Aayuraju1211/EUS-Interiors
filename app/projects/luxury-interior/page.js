import ProjectDetailLayout from "../../components/ProjectDetailLayout";

export const metadata = {
    title: "Luxury Interior Design | EUS Interior - Opulent Homes Nationwide",
    description:
        "Experience world-class luxury interior design by EUS Interior. Bespoke furnishings, imported materials, and meticulous craftsmanship for the most discerning homeowners across India.",
};

const processSteps = [
    {
        title: "Bespoke Consultation",
        description:
            "A dedicated design lead meets you to understand your aesthetic sensibilities, lifestyle preferences, and aspirations for opulent living.",
    },
    {
        title: "Concept & Material Curation",
        description:
            "We curate exclusive materials — Italian marble, imported veneer, designer fabrics — and develop a concept that reflects timeless luxury.",
    },
    {
        title: "Artisan Craftsmanship",
        description:
            "Every piece is handcrafted by skilled artisans with attention to detail that mass production cannot replicate.",
    },
    {
        title: "White-Glove Installation",
        description:
            "Our premium installation team delivers a flawless finish with zero defects, followed by thorough quality inspection and walkthrough.",
    },
];

const materials = [
    "Italian Statuario & Calacatta marble",
    "Natural wood veneer (Walnut, Teak, Oak)",
    "Imported crystal chandeliers & statement lighting",
    "Premium leather & velvet upholstery",
    "Brass & gold-finish hardware accents",
    "Toughened glass with PVD-coated frames",
    "Acoustic panels for soundproofing",
    "Smart home integration (lighting & curtains)",
];

const galleryImages = [
    { src: "/lhi-1.jpg", alt: "Luxury bedroom with ambient lighting" },
    { src: "/lhi-2.jpg", alt: "Premium living room with designer furniture" },
    { src: "/lhi-3.jpg", alt: "Sophisticated dining space" },
];

export default function LuxuryInteriorPage() {
    return (
        <ProjectDetailLayout
            title="Luxury Interior"
            subtitle="Uncompromising elegance for the discerning homeowner"
            heroImage="/luxury-home-interior.jpg"
            overview="Luxury is in the details — the feel of hand-stitched leather, the warmth of natural wood veneer, the sparkle of an imported crystal chandelier. Our luxury interior design service is for homeowners who demand nothing but the finest. We source materials from the world's leading suppliers and pair them with artisan-level craftsmanship to create spaces that exude sophistication. From designer furniture to smart home integration, every element is curated to deliver an experience of effortless opulence."
            process={processSteps}
            materials={materials}
            galleryImages={galleryImages}
        />
    );
}
