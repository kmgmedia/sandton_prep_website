import GalleryPageSection, {
  GalleryImage,
} from "@/components/sections/gallery/gallery-page";

const images: GalleryImage[] = [
  {
    src: "https://res.cloudinary.com/ds2h3iwys/image/upload/v1767394612/Sandton%20Preparatory%20School%20Web%20Images/Hero-page-images/ChatGPT_Image_Jan_2_2026_11_56_32_PM_eeipz9.png",
    width: 311.4,
    height: 312,
    alt: "Gallery image 1",
    style:
      "absolute top-[0px] left-[0px] w-[311.4px] h-[312px] flex justify-center items-center",
  },
  {
    src: "https://res.cloudinary.com/ds2h3iwys/image/upload/v1769469341/Sandton%20Preparatory%20School%20Web%20Images/Blog/ChatGPT_Image_Jan_27_2026_12_13_26_AM_ehhr5j.png",
    width: 311.4,
    height: 466.4,
    alt: "Gallery image 2",
    style:
      "absolute top-[318.74px] left-[0px] w-[311.4px] h-[466.4px] flex justify-center items-center",
  },
  {
    src: "https://res.cloudinary.com/ds2h3iwys/image/upload/v1769469750/Sandton%20Preparatory%20School%20Web%20Images/Blog/Image_fx_20_dialcu.jpg",
    width: 442.9,
    height: 389.2,
    alt: "Gallery image 3",
    style:
      "absolute top-[395.91px] left-[318.07px] w-[442.9px] h-[389.2px] flex justify-center items-center",
  },
  {
    src: "https://res.cloudinary.com/ds2h3iwys/image/upload/v1769469919/Sandton%20Preparatory%20School%20Web%20Images/Blog/Image_fx_21_cuugm1.jpg",
    width: 310.7,
    height: 389.2,
    alt: "Gallery image 4",
    style:
      "absolute top-[0px] left-[318.07px] w-[310.7px] h-[389.2px] flex justify-center items-center",
  },
  {
    src: "https://res.cloudinary.com/ds2h3iwys/image/upload/v1769470120/Sandton%20Preparatory%20School%20Web%20Images/Blog/Image_fx_22_hzu9md.jpg",
    width: 438.2,
    height: 389.2,
    alt: "Gallery image 5",
    style:
      "absolute top-[0px] left-[635.47px] w-[438.2px] h-[389.2px] flex justify-center items-center",
  },
  {
    src: "https://res.cloudinary.com/ds2h3iwys/image/upload/v1769469341/Sandton%20Preparatory%20School%20Web%20Images/Blog/ChatGPT_Image_Jan_27_2026_12_13_26_AM_ehhr5j.png",
    width: 306.6,
    height: 389.2,
    alt: "Gallery image 6",
    style:
      "absolute top-[395.91px] left-[767.66px] w-[306.6px] h-[389.2px] flex justify-center items-center",
  },
  
];

export default function GalleryPage() {
  return <GalleryPageSection images={images} />;
}
