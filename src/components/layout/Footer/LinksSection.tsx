import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "บริษัท",
    children: [
      {
        id: 11,
        label: "เกี่ยวกับเรา",
        url: "#",
      },
      {
        id: 12,
        label: "คุณสมบัติ",
        url: "#",
      },
      {
        id: 13,
        label: "วิธีการทำงาน",
        url: "#",
      },
      {
        id: 14,
        label: "ร่วมงานกับเรา",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "ช่วยเหลือ",
    children: [
      {
        id: 21,
        label: "บริการลูกค้า",
        url: "#",
      },
      {
        id: 22,
        label: "รายละเอียดการจัดส่ง",
        url: "#",
      },
      {
        id: 23,
        label: "ข้อกำหนดและเงื่อนไข",
        url: "#",
      },
      {
        id: 24,
        label: "นโยบายความเป็นส่วนตัว",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    title: "คำถามที่พบบ่อย",
    children: [
      {
        id: 31,
        label: "บัญชี",
        url: "#",
      },
      {
        id: 32,
        label: "จัดการการจัดส่ง",
        url: "#",
      },
      {
        id: 33,
        label: "คำสั่งซื้อ",
        url: "#",
      },
      {
        id: 34,
        label: "การชำระเงิน",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "แหล่งข้อมูล",
    children: [
      {
        id: 41,
        label: "หนังสืออิเล็กทรอนิกส์ฟรี",
        url: "#",
      },
      {
        id: 42,
        label: "บทเรียนการพัฒนา",
        url: "#",
      },
      {
        id: 43,
        label: "บล็อกวิธีการ",
        url: "#",
      },
      {
        id: 44,
        label: "เพลย์ลิสต์ YouTube",
        url: "#",
      },
    ],
  },
];



const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex flex-col mt-5" key={item.id}>
          <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className={cn([
                link.id !== 41 && link.id !== 43 && "capitalize",
                "text-black/60 text-sm md:text-base mb-4 w-fit",
              ])}
            >
              {link.label}
            </Link>
          ))}
        </section>
      ))}
    </>
  );
};

export default LinksSection;
