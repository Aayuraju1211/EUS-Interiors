import ProjectDetailLayout from "../../components/ProjectDetailLayout";

export const metadata = {
    title: "Home Renovation Services | EUS Interior - Renovate Your Home Nationwide",
    description:
        "Give your home a stunning new look with EUS Interior's renovation services. From structural changes to cosmetic upgrades, we breathe new life into every space.",
};

const processSteps = [
    {
        title: "Site Assessment",
        description:
            "Our team conducts a thorough evaluation of your existing space, identifying structural needs, plumbing, and electrical requirements.",
    },
    {
        title: "Redesign & Planning",
        description:
            "We create a detailed renovation plan with before-and-after visualizations, timelines, and transparent cost breakdowns.",
    },
    {
        title: "Demolition & Civil Work",
        description:
            "Controlled demolition, wall alterations, waterproofing, and all civil modifications handled by our in-house contractors.",
    },
    {
        title: "Finishing & Handover",
        description:
            "Fresh paint, new flooring, modern fixtures, and custom furniture — everything comes together for a complete transformation.",
    },
];

const materials = [
    "Waterproofing compound (Dr. Fixit / Fosroc)",
    "POP & gypsum board for false ceilings",
    "Asian Paints Royale / Berger premium emulsions",
    "Anti-skid vitrified tiles (Johnson / Kajaria)",
    "UPVC & aluminium window frames",
    "Concealed copper wiring (Havells / Polycab)",
    "CPVC plumbing (Astral / Supreme)",
    "Fire-resistant electrical panels",
];

const galleryImages = [
    { src: "/renovation-gallery-left.jpg", alt: "Renovated living room with modern aesthetics" },
    { src: "/renovation-gallery-center.jpg", alt: "Renovated reception area with gold arch detail" },
    { src: "/renovation-gallery-right.jpg", alt: "Refreshed living area with updated TV unit design" },
];

export default function RenovationPage() {
    return (
        <ProjectDetailLayout
            title="Renovation"
            subtitle="Breathe new life into your existing spaces"
            heroImage="/renovation-main-tile.jpg"
            overview="Renovation is the art of reimagining what already exists. Whether your home needs a fresh coat of paint or a complete structural overhaul, EUS Interior handles it all — from demolition and waterproofing to flooring, false ceilings, and custom furniture. We understand the unique challenges of renovation work: dealing with existing structures, managing dust and noise, and minimizing disruption to your daily life. Our experienced contractors work efficiently to deliver a transformed space that feels brand new."
            process={processSteps}
            materials={materials}
            galleryImages={galleryImages}
        />
    );
}
