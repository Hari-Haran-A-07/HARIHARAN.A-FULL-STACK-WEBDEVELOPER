import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hari-haran.dev"),
  title: "HARI HARAN A | Full Stack Developer • Software Engineer • Data Analyst",
  description:
    "Hari Haran A — Full Stack Developer, Software Engineer, Data Analyst, and Graphic Designer specializing in Java, Spring Boot, React.js, TypeScript, Python, Microservices, and scalable modern web platforms.",
  keywords: [
    "Hari Haran A",
    "Full Stack Developer",
    "Software Engineer",
    "Data Analyst",
    "Graphic Designer",
    "Java Developer",
    "Spring Boot",
    "React.js Developer",
    "TypeScript",
    "Python Developer",
    "Microservices",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "KIEYVERSE",
    "Techzon Wide",
    "Dot Com Infoway",
    "Enterprise Software Architecture",
  ],
  authors: [{ name: "Hari Haran A", url: "https://github.com/Hari-Haran-A-07" }],
  creator: "Hari Haran A",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hari-haran.dev",
    title: "HARI HARAN A | Full Stack Developer • Software Engineer",
    description:
      "Full Stack Developer & Software Engineer architecting enterprise web platforms, high-throughput microservices, and modern UI systems.",
    siteName: "Hari Haran A — Developer Portfolio",
    images: [
      {
        url: "/assets/certificates/dci-certificate.png",
        width: 1200,
        height: 630,
        alt: "Hari Haran A — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HARI HARAN A | Full Stack Developer • Software Engineer",
    description:
      "Engineer + Builder + Analyst + Designer. Building resilient digital systems at enterprise scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hari Haran A",
    jobTitle: "Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer, Software Engineer, Data Analyst, and Graphic Designer specializing in Java, Spring Boot, React.js, TypeScript, Python, microservices, and enterprise web architecture.",
    email: "suryahari971@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dindigul",
      addressRegion: "Tamil Nadu",
      addressCountry: "India",
    },
    sameAs: [
      "https://www.linkedin.com/in/ahari-haran07",
      "https://github.com/Hari-Haran-A-07",
      "https://github.com/Hari-Haran-A-07/HARIHARAN.A-FULL-STACK-WEBDEVELOPER",
      "https://github.com/Hari-Haran-A-07/kiey-verse.in",
      "https://github.com/Hari-Haran-A-07/Lux.raw",
      "https://github.com/Hari-Haran-A-07/Tech.lms",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "SSM Institute of Engineering and Technology",
    },
    knowsAbout: [
      "Full Stack Development",
      "Software Engineering",
      "Java",
      "Spring Boot",
      "React.js",
      "TypeScript",
      "Python",
      "RESTful APIs",
      "Microservices Architecture",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "Data Analytics",
      "UI/UX Design",
    ],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hari Haran A — Developer Portfolio",
    url: "https://hari-haran.dev",
    author: {
      "@type": "Person",
      name: "Hari Haran A",
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-[#0A0A0A] text-[#F7F7F5] antialiased selection:bg-[#A100FF] selection:text-white`}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-[#A100FF] focus:text-white focus:font-mono focus:text-xs focus:rounded focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>

        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
