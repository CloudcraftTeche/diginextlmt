// app/location/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import MediaDisplay from "@/components/ui/MediaDisplay";

interface LocationData {
  city: string;
  title: string;
  content: string[];
  mediaUrl: string;
  mediaType: "image" | "video";
}

const locationsData: Record<string, LocationData> = {
  "abu-dhabi": {
    city: "Abu Dhabi",
    title:
      "Managed IT Services, Support & Consultancy | IT Solution Company in Abu Dhabi",
    mediaUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=800&fit=crop",
    mediaType: "image",
    content: [
      "When businesses in Abu Dhabi need digital systems that are fast, reliable, and ready for the future, they look for IT partners they can trust who know both technology and the local market. We are proud to be one of the top IT solution companies in Abu Dhabi. We offer personalized technology solutions that help businesses grow quickly while maintaining their operations completely stable.",
      "Companies need IT systems that are secure, strong, and flexible to keep up with this rapid growth. We provide completely managed IT services in Abu Dhabi that will make your IT ecosystem better and reduce unnecessary downtime.",
      "Our team makes sure that the latest tools, cloud technologies, and security frameworks work perfectly with your current setup. No matter if you need IT support in Abu Dhabi, system upgrades, cloud migration, or long-term technology consulting, we have the expertise and strategy that you need to stay ahead of the competition.",
      "We do not just fix IT problems, we also create long-term, adaptable solutions that change the way your business works. As a trusted IT consultancy in Abu Dhabi, we help you identify technical problems, make your workflows more efficient, maintain your digital space secure, and get your business future ready. Our strategy maintains the right balance between meeting global standards and being adaptable to local needs.",
      "We also offer advanced support for both remote and on-site to make sure your business runs smoothly. Our skilled professionals pay close attention to every detail, from setting up networks to setting security measures. We make sure your IT infrastructure works perfectly by monitoring it and being available for assistance 24/7.",
      "DigiNext's customized solutions can help you be more productive, dependable, and get a stronger digital presence, no matter if you are a startup, a small business, or a large company. Companies all over the UAE trust us, and we continue to be the best IT solution company in Abu Dhabi for businesses that need excellent technology and reliable local support.",
    ],
  },
  sharjah: {
    city: "Sharjah",
    title:
      "IT Solution Company in Sharjah | Complete IT Support & Managed Services",
    mediaUrl:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=800&fit=crop",
    mediaType: "image",
    content: [
      "The business ecosystem in Sharjah is growing quickly, so it demands technology that is secure, fast, and able to handle growth. DigiNext is proud to be the dedicated IT solution company in Sharjah that serves the whole region. We offer businesses in all sectors with modern IT systems and dependable support.",
      "Businesses in Sharjah depend on uninterrupted IT systems performance and networks that are always reliable. Our specific managed IT services in Sharjah make it easy for businesses to upgrade their IT infrastructure, make them run faster, and improve cybersecurity. Our solutions are designed to keep your business running smoothly and reduce downtime.",
      "Our responsive IT support in Sharjah are always ready to help you with any IT issues you may have, no matter if they are small or large. We use the best practices from around the world in our local workflows to make sure you get great service that matches your business goals.",
      "We are an established IT consultancy in Sharjah that helps businesses implement solutions that can grow with them and align with their long-term goals. Our consulting team makes sure your systems stay up to date by helping you adopt the cloud, handle data safely, and infrastructure optimization.",
      "We offer a wide range of services, including network solutions, cloud hosting, hardware support, security management and performance monitoring. We think that every business should have access to reliable technology. That is why we do not offer general solutions, instead, we modify our solutions to meet your specific needs.",
      "DigiNext is your trusted technology partner, and you can depend on a team that is dedicated to delivering excellent support and service at all times. With the help of advanced IT solutions that produce measurable results, we keep helping businesses in the area to develop better decisions.",
    ],
  },
  ajman: {
    city: "Ajman",
    title:
      "IT Solution Company in Ajman | Technology, Support & IT Consultancy",
    mediaUrl:
      "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4",
    mediaType: "video",
    content: [
      "DigiNext offers businesses in Ajman a full range of IT, digital and branding solutions. These solutions help businesses grow faster by using modern technology, having a strong online presence and great brand visibility. Ajman's business environment is changing quickly, so businesses need solutions that are adaptable, innovative, and customized to the local needs. We are a trustworthy IT support provider in Ajman that helps businesses improve infrastructure, increase operational performance, and stay ahead of the competition.",
      "Our services include managed IT services, cloud hosting, DevOps automation, website design, UI/UX, SEO, social media management, Google Ads, and complete digital marketing support. We develop solutions that fit your industry and audience, no matter if you want to get more customers, make your website work better or automate your business.",
      "Businesses in Ajman appreciate that we can provide our complete services in one place. Our hosting and DevOps services give businesses safe, scalable spaces that run smoothly 24/7. Our web designers and developers develop websites that are quick, easy to use, attractive and help you achieve your business goals. Our marketing experts use SEO, SMM, and performance ads to get more audience to see your business and help generate leads.",
      "We also help Ajman clients with signages, professional printing, and event management to make sure your brand makes a strong impression offline as well. We manage everything from designing and making outdoor signs to brochures, roll-ups, and corporate events.",
      "We not only modify every solution to your business needs, but also to your location, competitors, and how your customers respond. Our team of experts help businesses grow and builds their confidence by giving them continuous support, clear communication and regular success.",
    ],
  },
  "al-ain": {
    city: "Al Ain",
    title:
      "IT Solution Company in Al Ain | Professional IT Support & Managed Services",
    mediaUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=800&fit=crop",
    mediaType: "image",
    content: [
      "We work closely with businesses in Al Ain to help them make their IT systems better, make their brands more memorable and get more online visibility. We are a reputable IT consultancy in Al Ain that provides solutions that improve the customer experience, make things run more smoothly, and make operations easier. The city has a unique business environment, and our team knows exactly how to make digital and technical solutions that work for it.",
      "We deliver a number of services including managed IT services, IT support, cloud hosting, DevOps, UI/UX design, web development, SEO, SMM and Google Ads management. We use a strategic approach to each of our services to make sure that your business looks good online and provides its best work. For businesses in Al Ain that want long term digital stability, our hosting and DevOps solutions guarantee dependability, scalability, and high security.",
      "We help businesses attract local customers by making websites that are easy to use, running marketing campaigns based on data, and sending brand messages that speak to the Al Ain audience. Our SEO and SMM teams focus on generating organic growth, while our paid ads team works to get specific audiences into conversion.",
      "We provide professional printing, signage, and event management for businesses that need a strong presence offline. This way, your brand will always be remembered wherever your audience sees it. We take care of every detail with care, from coming up with the idea to carrying it out.",
      "DigiNext is known in Al Ain for reliability, transparency, and consistent results. We do not just give you standard solutions, instead we make a plan that fits your business goals and the needs of the market. We help businesses grow smoothly, steadily, and successfully with our local understanding and long-term partnership mindset.",
    ],
  },
  "ras-al-khaimah": {
    city: "Ras Al Khaimah",
    title:
      "IT Solution Company in Ras Al Khaimah | IT Support & Consulting Services",
    mediaUrl:
      "https://videos.pexels.com/video-files/7964553/7964553-uhd_2560_1440_25fps.mp4",
    mediaType: "video",
    content: [
      "We support businesses in Ras Al Khaimah stay competitive and visible by providing them modern IT solutions, strategic digital services, and powerful offline branding tools. As an experienced IT solution company in Ras Al Khaimah, we focus on creating systems, experiences, and strategies that will help your business grow over time. We have everything you need to build trust, run your business better, and reach more customers, no matter if you just started your business or are an expanding enterprise.",
      "We offer a full range of services which includes IT support, managed IT services, cloud hosting, DevOps, website design, UI/UX, SEO, Google Ads, social media management and more. Our developers and designers create clean, user-friendly websites that convert well, and we help businesses build a solid digital structure with fast, secure, and scalable hosting solutions.",
      "We offer printing, signage, and event management services to help your brand stand out. This makes sure that your brand is consistent across all of its physical and digital interaction points. Our team makes sure that your message is clear and easy to remember, if you need outdoor branding, marketing materials or a complete event setup.",
      "DigiNext is trusted by businesses in Ras Al Khaimah because we know how the economy of the city is growing and change our plans to match with how customers are changing. We put a lot of focus on clear communication, long-term dependability, and growth that can be measured. Our team of experts uses a combination of creativity, technical accuracy, and market knowledge on every project, which gives your brand the confidence to compete.",
      "We are here to help you every step of the way if you are looking for a team that can improve your IT systems, change your online presence, and strengthen your branding throughout Ras Al Khaimah.",
    ],
  },
};
export default function LocationPage() {
  const params = useParams();
  const slug = params.slug as string;

  const data = locationsData[slug] || locationsData["abu-dhabi"];

  return (
    <main className="font-sans bg-white text-foreground">


      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Main Content Grid */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Side - Media */}
            <div className="w-full lg:w-auto lg:flex-shrink-0">
              <div className="sticky top-8">
                <div className="w-full lg:w-130 aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                  <MediaDisplay src={data.mediaUrl} alt={data.title} />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
                {data.title}
              </h1>

              <div className="space-y-6">
                {data.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base lg:text-lg text-gray-700 leading-relaxed text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
