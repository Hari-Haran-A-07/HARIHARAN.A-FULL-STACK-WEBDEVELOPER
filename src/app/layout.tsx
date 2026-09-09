import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hari-haran.dev"),
  title: "Hari Haran A | Full Stack Developer • Software Engineer • Data Analyst",
  description:
    "Hari Haran A — Full Stack Developer and Software Engineer specializing in Java, Spring Boot, React.js, Python, REST APIs, microservices, data analytics, and high-performance digital architectures.",
  keywords: [
    "Hari Haran A",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Java Developer",
    "Spring Boot",
    "Python Developer",
    "Data Analyst",
    "Graphic Designer",
    "Microservices",
    "REST APIs",
    "Enterprise Web Development",
    "SEO & Digital Marketing",
    "Dindigul Tamil Nadu",
    "Techzon Wide",
    "KIEYVERSE",
  ],
  authors: [{ name: "Hari Haran A", url: "https://github.com/Hari-Haran-A-07" }],
  creator: "Hari Haran A",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hari-haran.dev",
    title: "Hari Haran A | Full Stack Developer • Software Engineer",
    description:
      "Enterprise personal portfolio of Hari Haran A. Full Stack Developer, Software Engineer, Data Analyst, and Graphic Designer.",
    siteName: "Hari Haran A Portfolio",
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
    title: "Hari Haran A | Full Stack Developer • Software Engineer",
    description:
      "Building scalable digital experiences across software engineering, full-stack development, data, design and modern web technologies.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hari Haran A",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer and Software Engineer specializing in Java, Spring Boot, React.js, Python, REST APIs, microservices, and enterprise data architectures.",
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
      "Python",
      "RESTful APIs",
      "Microservices",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "Data Analytics",
      "UI/UX Design",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-black text-[#F5F5F5] antialiased selection:bg-[#A100FF] selection:text-white`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#A100FF] focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>

        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
