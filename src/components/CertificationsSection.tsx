import React from 'react';
import './CertificationsSection.css';
import certificate1 from '../assets/Certificates/Cerificate-1.jpeg';
import certificate2 from '../assets/Certificates/Cerificate-2.jpeg';
import certificate3 from '../assets/Certificates/Cerificate-3.jpeg';
import certificate4 from '../assets/Certificates/Cerificate-4.jpeg';
import certificate5 from '../assets/Certificates/Cerificate-5.jpeg';
import certificate6 from '../assets/Certificates/Cerificate-6.jpeg';
import certificate7 from '../assets/Certificates/Cerificate-7.jpeg';
import certificate8 from '../assets/Certificates/Cerificate-8.jpeg';

const firstRow = [certificate1, certificate2, certificate3, certificate4];
const secondRow = [certificate5, certificate6, certificate7, certificate8];

interface CertificateRowProps {
  certificates: string[];
  direction: 'right' | 'left';
}

const CertificateRow: React.FC<CertificateRowProps> = ({ certificates, direction }) => {
  const repeatedCertificates = [...certificates, ...certificates];

  return (
    <div className="certificate-row-viewport" aria-label="Certificate gallery">
      <div className={`certificate-row certificate-row--${direction}`}>
        {repeatedCertificates.map((certificate, index) => (
          <div className="certificate-frame" key={`${certificate}-${index}`}>
            <img
              src={certificate}
              alt={`Certificate ${((index % certificates.length) + 1)}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const CertificationsSection: React.FC = () => (
  <section
    id="certifications"
    className="certifications-section relative w-full overflow-hidden bg-black text-[#E8DFD8]"
  >
    <div className="certifications-heading mx-auto w-full max-w-7xl px-6 sm:px-12 lg:px-20">
      <div className="flex items-center space-x-4">
        <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#D4AF37]">
          05 / CERTIFICATIONS
        </span>
        <div className="h-px w-20 bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
      </div>
      <h2 className="mt-7 text-5xl uppercase leading-[0.85] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
          CERTIFICATIONS.
        </span>
      </h2>
    </div>

    <div className="certifications-gallery mt-16 space-y-6">
      <CertificateRow certificates={firstRow} direction="left" />
      <CertificateRow certificates={secondRow} direction="right" />
    </div>
  </section>
);

export default CertificationsSection;
