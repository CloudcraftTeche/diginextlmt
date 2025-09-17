import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
}

interface ClientLogosSectionProps {
  clients?: Client[];
}

const ClientLogosSection: React.FC<ClientLogosSectionProps> = ({
  clients = [
    { name: "Hitachi", logo: "/images/clients/hitachi.svg" },
    { name: "Tata Power", logo: "/images/clients/tata-power.svg" },
    { name: "Ramada", logo: "/images/clients/ramada.svg" },
    { name: "IMT Business School", logo: "/images/clients/imt.svg" },
    { name: "Space", logo: "/images/clients/space.svg" },
    { name: "Contour", logo: "/images/clients/contour.svg" }
  ]
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
