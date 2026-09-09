// Script to generate a 100% valid PDF 1.4 for Hari Haran A's Resume
const fs = require('fs');
const path = require('path');

function generateResumePDF() {
  const lines = [
    "HARI HARAN A",
    "Full Stack Developer | Software Engineer | Data Analyst | Graphic Designer",
    "Email: suryahari971@gmail.com | LinkedIn: linkedin.com/in/ahari-haran07 | GitHub: github.com/Hari-Haran-A-07",
    "Location: Dindigul, Tamil Nadu, India",
    "------------------------------------------------------------------------------------------------------------------------",
    "PROFESSIONAL SUMMARY",
    "Full Stack Developer and Software Engineer with proven enterprise experience architecting",
    "high-throughput microservices, low-latency React interfaces, distributed databases, and responsive",
    "digital products. Specialized in Java, Spring Boot, Python, React.js, and API Gateway architectures.",
    "",
    "PROFESSIONAL EXPERIENCE",
    "1. TECHZON WIDE PVT. LTD. - Bangalore, India (Jun 2026 - Present)",
    "   Role: Full Stack Developer & Team Lead",
    "   * Architected enterprise microservices in Java and Spring Boot with React.js frontends.",
    "   * Engineered high-throughput REST APIs and async pipelines, reducing latency by 32%.",
    "   * Configured API Gateway, authentication filters, and monitoring, ensuring 99.9% uptime.",
    "   * Led bi-weekly Agile sprints, technical specifications, and API schemas.",
    "",
    "2. KIEYVERSE - Remote (Feb 2026 - Jul 2026)",
    "   Role: Full Stack Web Developer Intern",
    "   * Built reusable mobile-first React.js components using JavaScript ES6+, HTML5, CSS3.",
    "   * Reduced page-load latency by 28% and improved engagement metrics by 22%.",
    "   * Documented frontend architecture standards and component design guidelines.",
    "",
    "3. DOT COM INFOWAY - Madurai, India (2025)",
    "   Role: Web Development Intern - React / Full Stack",
    "   * Developed modular React user interfaces connected to backend REST APIs.",
    "   * Improved asynchronous data rendering speed by 25% across complex data tables.",
    "   * Resolved 40+ software defects and authored automated unit tests.",
    "",
    "4. MITA IT AUTOMATIONS PVT. LTD. - Dindigul, India (2024)",
    "   Role: UI/UX & Web Development Intern",
    "   * Designed user journeys, interactive wireframes, and responsive prototypes.",
    "   * Accelerated prototype-to-production implementation speed by 30%.",
    "",
    "EDUCATION",
    "* SSM INSTITUTE OF ENGINEERING AND TECHNOLOGY - Dindigul, India (2022 - 2026)",
    "  B.Tech in Computer Science and Business Systems | CGPA: 8.6 / 10",
    "* ST. MARY'S HIGHER SECONDARY SCHOOL - Dindigul, India (Graduated 2022)",
    "  Higher Secondary Certificate (HSC) - Science & Mathematics",
    "",
    "KEY TECHNICAL PROJECTS",
    "* KIEYVERSE: Corporate Digital Marketing Platform (React.js, ES6+, SEO)",
    "* LUXURY.RAW: High-Concurrency Luxury E-Commerce Engine (Spring Boot, Java, React, SQL)",
    "* TECH LMS: Learning Management System with Automated KYC Pipelines (Spring Boot, Python, React, Mongo)",
    "* REAL-TIME V2V: Vehicle-to-Vehicle Socket Telematics Network (Python, Sockets, IoT)",
    "* SOCIAL CONTENT SCHEDULER: Content Strategy & Publishing Platform (React, Spring Boot, PostgreSQL)",
    "* AGRI-COMMERCE: Produce Exchange with Predictive Weather Analytics (React, Spring Boot, MySQL)",
    "",
    "CERTIFICATIONS",
    "* Python Using Data Structures - CodeTantra",
    "* Applied Generative AI - Infosys Springboard",
    "* RPA Foundation Course - Naan Mudhalvan",
    "* Zoho Young Creator Program - Zoho Corporation",
    "* React Web Development Internship Certification - Dot Com Infoway Ltd."
  ];

  // Construct PDF stream
  let streamContent = "BT\n/F1 10 Tf\n50 780 Td\n13.5 TL\n";
  lines.forEach((line, index) => {
    // Escape parentheses and backslashes
    const escaped = line.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    if (index === 0) {
      streamContent += `/F2 14 Tf (${escaped}) Tj\n/F1 9 Tf T*\n`;
    } else if (line.startsWith("PROFESSIONAL SUMMARY") || line.startsWith("PROFESSIONAL EXPERIENCE") || line.startsWith("EDUCATION") || line.startsWith("KEY TECHNICAL PROJECTS") || line.startsWith("CERTIFICATIONS")) {
      streamContent += `/F2 10.5 Tf (${escaped}) Tj\n/F1 9 Tf T*\n`;
    } else {
      streamContent += `(${escaped}) Tj T*\n`;
    }
  });
  streamContent += "ET";

  const streamLen = Buffer.byteLength(streamContent, 'utf8');

  const objects = [
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n`,
    `4 0 obj\n<< /Length ${streamLen} >>\nstream\n${streamContent}\nendstream\nendobj\n`,
    `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`,
    `6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`
  ];

  let pdfHeader = "%PDF-1.4\n";
  let body = "";
  const xref = ["0000000000 65535 f \n"];
  
  let currentOffset = Buffer.byteLength(pdfHeader, 'utf8');

  objects.forEach(obj => {
    xref.push(String(currentOffset).padStart(10, '0') + " 00000 n \n");
    body += obj;
    currentOffset += Buffer.byteLength(obj, 'utf8');
  });

  const xrefOffset = currentOffset;
  let trailer = `xref\n0 ${objects.length + 1}\n` + xref.join('') + `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const finalPDF = Buffer.concat([
    Buffer.from(pdfHeader, 'utf8'),
    Buffer.from(body, 'utf8'),
    Buffer.from(trailer, 'utf8')
  ]);

  fs.mkdirSync(path.join(__dirname, 'public', 'assets'), { recursive: true });
  fs.writeFileSync(path.join(__dirname, 'public', 'assets', 'Hari_Haran_A_Resume.pdf'), finalPDF);
  fs.writeFileSync(path.join(__dirname, 'public', 'Hari_Haran_A_Resume.pdf'), finalPDF);
  console.log("Generated Hari_Haran_A_Resume.pdf successfully.");
}

generateResumePDF();
