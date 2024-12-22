import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "เสื้อยืดดีไซน์เทป",
    srcUrl: "/images/pic1.png",
    gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    price: 120,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "กางเกงยีนส์ทรงสกินนี่",
    srcUrl: "/images/pic2.png",
    gallery: ["/images/pic2.png"],
    price: 260,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
  },
  {
    id: 3,
    title: "เสื้อเชิ้ตลายตาราง",
    srcUrl: "/images/pic3.png",
    gallery: ["/images/pic3.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "เสื้อยืดลายแถบที่แขน",
    srcUrl: "/images/pic4.png",
    gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
    price: 160,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
];


export const topSellingData: Product[] = [
  {
    id: 5,
    title: "เสื้อเชิ้ตลายทาง",
    srcUrl: "/images/pic5.png",
    gallery: ["/images/pic5.png", "/images/pic10.png", "/images/pic11.png"],
    price: 232,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: "เสื้อยืดพิมพ์ลายกราฟิก Courage",
    srcUrl: "/images/pic6.png",
    gallery: ["/images/pic6.png", "/images/pic10.png", "/images/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: "กางเกงขาสั้นเบอร์มิวด้าทรงหลวม",
    srcUrl: "/images/pic7.png",
    gallery: ["/images/pic7.png"],
    price: 80,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
  },
  {
    id: 8,
    title: "กางเกงยีนส์ทรงสกินนี่สีซีด",
    srcUrl: "/images/pic8.png",
    gallery: ["/images/pic8.png"],
    price: 210,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];


export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "เสื้อโปโลแต่งขอบต่างสี",
    srcUrl: "/images/pic12.png",
    gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
    price: 242,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "เสื้อยืดพิมพ์ลายกราฟิกไล่สี",
    srcUrl: "/images/pic13.png",
    gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: "เสื้อโปโลลายเส้นแต่งขอบ",
    srcUrl: "/images/pic14.png",
    gallery: ["/images/pic14.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "เสื้อยืดลายแถบสีดำ",
    srcUrl: "/images/pic15.png",
    gallery: ["/images/pic15.png"],
    price: 150,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
];


export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alex K.",
    content: `"การค้นหาเสื้อผ้าที่เข้ากับสไตล์ส่วนตัวเคยเป็นเรื่องยาก จนได้พบกับ Shop.co ตัวเลือกที่หลากหลายทำให้ค้นหาได้ง่ายและตอบโจทย์ทุกโอกาส"`,
    rating: 5,
    date: "14 สิงหาคม 2566",
  },
  {
    id: 2,
    user: "Sarah M.",
    content: `"ฉันประทับใจกับคุณภาพและสไตล์ของเสื้อผ้าจาก Shop.co อย่างมาก ตั้งแต่ชุดลำลองไปจนถึงชุดเดรสสุดหรู ทุกชิ้นที่ฉันซื้อเกินความคาดหมายทั้งหมด"`,
    rating: 5,
    date: "15 สิงหาคม 2566",
  },
  {
    id: 3,
    user: "Ethan R.",
    content: `"เสื้อตัวนี้เป็นสิ่งที่ต้องมีสำหรับผู้ที่ชื่นชอบการออกแบบที่ดี ลวดลายเรียบง่ายแต่น่าประทับใจ และขนาดพอดีตัว เห็นความใส่ใจในทุกองค์ประกอบของการออกแบบ"`,
    rating: 5,
    date: "16 สิงหาคม 2566",
  },
  {
    id: 4,
    user: "Olivia P.",
    content: `"ในฐานะผู้หลงใหลใน UI/UX ฉันให้ความสำคัญกับความเรียบง่ายและการใช้งาน เสื้อยืดตัวนี้ไม่เพียงแต่สะท้อนหลักการเหล่านั้น แต่ยังใส่สบายมากอีกด้วย"`,
    rating: 5,
    date: "17 สิงหาคม 2566",
  },
  {
    id: 5,
    user: "Liam K.",
    content: `"เสื้อตัวนี้รวมเอาความสะดวกสบายและความคิดสร้างสรรค์ไว้ด้วยกัน เนื้อผ้านุ่ม และการออกแบบแสดงถึงทักษะของนักออกแบบ เหมือนใส่ผลงานศิลปะที่สะท้อนความรักในแฟชั่น"`,
    rating: 5,
    date: "18 สิงหาคม 2566",
  },
  {
    id: 6,
    user: "Samantha D.",
    content: `"ฉันชอบเสื้อตัวนี้มาก! ดีไซน์ไม่เหมือนใครและเนื้อผ้านุ่มใส่สบาย ในฐานะนักออกแบบ ฉันชื่นชมรายละเอียดที่ใส่ใจ มันกลายเป็นเสื้อตัวโปรดของฉันแล้ว"`,
    rating: 5,
    date: "19 สิงหาคม 2566",
  },
  {
    id: 7,
    user: "LEO Bodin",
    content: `"อ๋อ ก็ดีนะ แต่ก็ไม่ค่อยดีเท่าไหร่ แต่ก็โอเค ถ้าเราจะให้คะแนน ก็ให้ 3 ดาวไปเลย"`,
    rating: 3,
    date: "19 ธันวาคม 2567",
  },
];


export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
          <ProductListSec
            title="สินค้ามาใหม่"
            data={newArrivalsData}
            viewAllLink="/shop#new-arrivals"
          />


        <div id="on-sale" className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>


        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="🔥ขายดี"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>


        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>

        <div id="new-arrivals">
        </div>

        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
