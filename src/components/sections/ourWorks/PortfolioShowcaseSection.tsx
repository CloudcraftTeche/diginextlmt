// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { getAllPortfolioItems } from "@/lib/portfolioData";

// interface GalleryImage {
//   url: string;
//   alt: string;
//   title?: string;
// }

// const PortfolioShowcaseSection: React.FC = () => {
//   const allItems = getAllPortfolioItems();

//   // Group items by category/slug
//   const photographyItems = allItems.find((item) => item.slug === "photography");
//   const retouchItems = allItems.find((item) => item.slug === "retouch");
//   const websiteItems = allItems.find((item) => item.slug === "social-media");

//   // Helper to duplicate gallery images for seamless infinite scroll
//   const duplicateImages = (
//     images: GalleryImage[],
//     times: number = 3
//   ): GalleryImage[] => {
//     return Array(times).fill(images).flat();
//   };

//   return (
//     <section className="py-12 bg-white lg:py-20 overflow-hidden">
//       <div className="w-full">
//         {/* Section Header */}

//         {/* Scrolling Rows Container */}
//         <div className="space-y-4 lg:space-y-6">
//           {/* Photography Row - Left Scroll */}
//           {photographyItems && photographyItems.galleryImages.length > 0 && (
//             <div className="relative w-full overflow-hidden">
//               <div className="flex gap-3 lg:gap-4 animate-scroll-left hover:pause-animation">
//                 {duplicateImages(photographyItems.galleryImages, 6).map(
//                   (image, idx) => (
//                     <Link
//                       key={idx}
//                       href={`/work/${photographyItems.slug}`}
//                       className="flex-shrink-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[320px] lg:h-[320px] rounded-2xl overflow-hidden group cursor-pointer relative block"
//                     >
//                       <Image
//                         src={image.url}
//                         alt={image.alt || "Photography work"}
//                         fill
//                         style={{ objectFit: "cover" }}
//                         className="transition-transform duration-700 scale-110"
//                         sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 450px"
//                       />
//                       {/* Hover Overlay */}
//                       <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                         <h3 className="text-white text-xl lg:text-2xl font-light tracking-wider uppercase">
//                           {photographyItems.title || "Photography"}
//                         </h3>
//                       </div>
//                     </Link>
//                   )
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Retouch Row - Right Scroll */}
//           {retouchItems && retouchItems.galleryImages.length > 0 && (
//             <div className="relative w-full overflow-hidden">
//               <div className="flex gap-3 lg:gap-4 animate-scroll-right hover:pause-animation">
//                 {duplicateImages(retouchItems.galleryImages, 6).map(
//                   (image, idx) => (
//                     <Link
//                       key={idx}
//                       href={`/work/${retouchItems.slug}`}
//                       className="flex-shrink-0 w-[200px] h-[150px] sm:w-[250px] sm:h-[200px] lg:w-[370px] lg:h-[320px] rounded-2xl overflow-hidden group cursor-pointer relative block"
//                     >
//                       <Image
//                         src={image.url}
//                         alt={image.alt || "Retouch work"}
//                         fill
//                         style={{ objectFit: "cover" }}
//                         className="transition-transform duration-700 scale-110"
//                         sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 450px"
//                       />
//                       {/* Hover Overlay */}
//                       <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                         <h3 className="text-white text-xl lg:text-2xl font-light tracking-wider uppercase">
//                           {retouchItems.title || "Retouch"}
//                         </h3>
//                       </div>
//                     </Link>
//                   )
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Website/Social Media Row - Left Scroll (Faster) */}
//           {websiteItems && websiteItems.galleryImages.length > 0 && (
//             <div className="relative w-full overflow-hidden">
//               <div className="flex gap-3 lg:gap-4 animate-scroll-left-fast hover:pause-animation">
//                 {duplicateImages(websiteItems.galleryImages, 6).map(
//                   (image, idx) => (
//                     <Link
//                       key={idx}
//                       href={`/work/${websiteItems.slug}`}
//                       className="flex-shrink-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[320px] lg:h-[320px] rounded-2xl overflow-hidden group cursor-pointer relative block"
//                     >
//                       <Image
//                         src={image.url}
//                         alt={image.alt || "Website work"}
//                         fill
//                         style={{ objectFit: "cover" }}
//                         className="transition-transform duration-700 scale-110"
//                         sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 450px"
//                       />
//                       {/* Hover Overlay */}
//                       <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                         <h3 className="text-white text-xl lg:text-2xl font-light tracking-wider uppercase">
//                           {websiteItems.title || "Social Media"}
//                         </h3>
//                       </div>
//                     </Link>
//                   )
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll-left {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(calc(-100% / 6));
//           }
//         }

//         @keyframes scroll-right {
//           0% {
//             transform: translateX(calc(-100% / 6));
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }

//         .animate-scroll-left {
//           animation: scroll-left 40s linear infinite;
//           width: max-content;
//         }

//         .animate-scroll-right {
//           animation: scroll-right 40s linear infinite;
//           width: max-content;
//         }

//         .animate-scroll-left-fast {
//           animation: scroll-left 30s linear infinite;
//           width: max-content;
//         }

//         .hover\\:pause-animation:hover {
//           animation-play-state: paused;
//         }

//         @media (max-width: 640px) {
//           .animate-scroll-left {
//             animation: scroll-left 35s linear infinite;
//           }

//           .animate-scroll-right {
//             animation: scroll-right 35s linear infinite;
//           }

//           .animate-scroll-left-fast {
//             animation: scroll-left 25s linear infinite;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PortfolioShowcaseSection;
