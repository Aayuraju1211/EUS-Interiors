import "./globals.css";

export const metadata = {
  title: "EUS Interiors | Premium Interior Design Services Nationwide",
  description:
    "Transform your home with EUS Interiors — 25+ years of premium interior design expertise across India. Modular kitchens, wardrobes, full home interiors. Free consultation, transparent pricing, 45-day delivery.",
  keywords:
    "interior design india, modular kitchen design, home interior design, eus interiors, premium interior design, wardrobes, false ceiling, tv unit design",
  openGraph: {
    title: "EUS Interiors | Premium Interior Design Services Nationwide",
    description:
      "Designing Dreams, Executing Excellence. 25+ years of premium interior design across India.",
    url: "https://www.eusrealty.in",
    siteName: "EUS Interiors",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

