import ProjectDetailLayout from "../../components/ProjectDetailLayout";

export const metadata = {
    title: "Modular Kitchen Design | EUS Interior - Premium Kitchens Nationwide",
    description:
        "Explore our bespoke modular kitchen designs — sleek, functional, and built with premium materials. From L-shaped to island kitchens, EUS Interior delivers perfection in 45 days.",
};

const processSteps = [
    {
        title: "Space Planning",
        description:
            "We measure your kitchen space precisely and create an optimized layout maximizing storage and workflow efficiency.",
    },
    {
        title: "3D Visualization",
        description:
            "See your dream kitchen come alive with photorealistic 3D renders before a single panel is cut.",
    },
    {
        title: "Custom Fabrication",
        description:
            "Every cabinet, drawer, and shelf is precision-built in our workshop using CNC machinery for flawless finishes.",
    },
    {
        title: "Installation",
        description:
            "Our expert team installs your kitchen with meticulous care, ensuring perfect alignment and seamless integration.",
    },
];

const materials = [
    "Marine-grade BWR plywood",
    "Quartz countertops (Caesarstone / Kalinga)",
    "Soft-close hinges (Hettich / Blum)",
    "Italian acrylic & PU finish laminates",
    "Stainless steel tandem drawers",
    "Granite & nano-white surfaces",
    "Anti-scratch PVC edge banding",
    "Under-cabinet LED strip lighting",
];

const galleryImages = [
    { src: "/gallery-left.jpg", alt: "Modular kitchen with integrated appliances" },
    { src: "/gallery-center.jpg", alt: "Modern dining area adjacent to kitchen" },
    { src: "/gallery-right.jpg", alt: "Open plan kitchen and living space" },
];

export default function ModularKitchenPage() {
    return (
        <ProjectDetailLayout
            title="Modular Kitchen"
            subtitle="Where culinary art meets intelligent design"
            heroImage="/main-tile.jpg"
            overview="Our modular kitchens are a testament to precision engineering and aesthetic mastery. Every detail — from the soft-close drawers to the stone countertops — is selected to elevate your cooking experience. We blend European hardware with Indian craftsmanship to deliver kitchens that are not just beautiful, but built to endure the rigors of daily life. Whether you envision a minimalist handleless design or a warm traditional kitchen, we bring your vision to life within 45 days."
            process={processSteps}
            materials={materials}
            galleryImages={galleryImages}
        />
    );
}
