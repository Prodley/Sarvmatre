// import Image from "next/image";

// const Footer = () => {
//   const footer_data = [
//     {
//       heading: "Company",
//       tags: [
//         {
//           heading: "Home",
//           link: "",
//         },
//         {
//           heading: "About Us",
//           link: "/about/sarvmatre",
//         },
//         {
//           heading: "Careers",
//           link: "/career",
//         },
//         {
//           heading: "Blogs",
//           link: "/blog",
//         },
//         {
//           heading: "Newsroom",
//           link: "/investor/news",
//         },
//       ],
//     },
//     {
//       heading: "Prodley Platform",
//       tags: [
//         {
//           heading: "Overview",
//           link: "/",
//         },
//         {
//           heading: "About Prodley",
//           link: "/about/prodley",
//         },
//         {
//           heading: "Join Prodley",
//           link: "/about/prodley",
//         },
//       ],
//     },
//     {
//       heading: "Support",
//       tags: [
//         {
//           heading: "Contact Us",
//           link: "/contact",
//         },
//         {
//           heading: "Investors Relation",
//           link: "/investor",
//         },
//       ],
//     },
//     {
//       heading: "Policies",
//       tags: [
//         {
//           heading: "Terms & Conditions",
//           link: "",
//         },
//         {
//           heading: "Disclaimer",
//           link: "",
//         },
//         {
//           heading: "Privacy Policy",
//           link: "",
//         },
//       ],
//     },
//   ];

//   const footer_social_icons = [
//     {
//       icon: "facebook.png",
//       link: "#",
//     },
//     {
//       icon: "linkedin.png",
//       link: "#",
//     },
//     {
//       icon: "twitter.png",
//       link: "#",
//     },
//     {
//       icon: "youtube.png",
//       link: "#",
//     },
//   ];

//   return (
//     <div className="  bg-primary  w-full left-0 relative">
//       <div className="max-w-7xl my-0 mx-auto px-[1rem] pt-[3.47rem] pb-[1rem] lg:flex gap-5">
//         <Image
//           src={"/footersmalldesign.png"}
//           width={20}
//           height={200}
//           alt="ddsfdv "
//           className="absolute max-w-[200px] right-0 top-[-65px] z-[-1] "
//         />
//         <div className="flex flex-col gap-2 max-w-xs">
//           <Image src={"/logo.png"} width={150} height={150} alt="logo" />

//           <p className="text-sm text-white">
//             Sarvmatre International Private Limited Jain Niwas, Tali Morh, Near
//             Doordarshan Kendra, Old Janipur, Jammu, J&K, India - 180007
//           </p>
//           <a
//             href="mailto:corp@sarvmatre.com"
//             className="text-sm text-white w-fit"
//           >
//             corp@sarvmatre.com
//           </a>
//           <ul className="flex mt-11 gap-4">
//             {footer_social_icons.map((icon, index) => (
//               <li key={index}>
//                 <a href={icon.link} className="text-white">
//                   <Image
//                     src={`/${icon.icon}`}
//                     width={7}
//                     height={7}
//                     alt="ddsfdv "
//                     className="absolute max-w-[200px] right-0 top-[-65px] z-[-1] "
//                   />
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="flex  flex-wrap xsm:grid xsm:grid-cols-2 sm:grid-cols-4 mt-8 gap-16 w-full z-[10]">
//           {footer_data.map((data, index) => {
//             return (
//               <div
//                 className="flex  flex-col justify-start text-start text-white max-w-full"
//                 key={index}
//               >
//                 <h3 className="font-bold text-2xl mb-1">{data.heading}</h3>
//                 <ul className="flex flex-col gap-2">
//                   {data.tags.map((tag, index) => {
//                     return (
//                       <li key={index}>
//                         <a href={`${tag.link}`}>{tag.heading}</a>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <hr />
//       <p className="py-10 mx-2 text-white text-xs text-center select-none">
//         Copyright © 2023 SIPL | All Rights Reserved |{" "}
//         <a href="/" className="hover:underline">
//           Terms and Conditions
//         </a>{" "}
//         |{" "}
//         <a href="/" className="hover:underline">
//           Privacy Policy
//         </a>
//       </p>
//     </div>
//   );
// };

// export default Footer;
