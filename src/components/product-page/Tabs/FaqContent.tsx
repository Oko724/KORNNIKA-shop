import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqsData: FaqItem[] = [
  {
    question: "วัสดุของเสื้อยืดคืออะไร?",
    answer:
      "ให้รายละเอียดเกี่ยวกับประเภทของผ้า (เช่น ผ้าฝ้าย โพลีเอสเตอร์ ผสม) น้ำหนัก และคุณสมบัติเฉพาะใด ๆ",
  },
  {
    question: "คำแนะนำในการดูแลรักษาเสื้อยืดคืออะไร?",
    answer:
      "แนะนำวิธีการซัก การตากแห้ง และการรีดผ้าเพื่อรักษาคุณภาพและความทนทาน",
  },
  {
    question: "การออกแบบหรือพิมพ์บนเสื้อยืดทำจากอะไร?",
    answer:
      "อธิบายวัสดุที่ใช้ในการออกแบบ (เช่น ไวนิล การพิมพ์สกรีน การปัก) และความทนทานของมัน",
  },
  {
    question: "เสื้อยืดเป็นแบบยูนิเซ็กส์หรือออกแบบสำหรับเพศเฉพาะ?",
    answer:
      "ระบุว่าเสื้อเหมาะสำหรับทั้งผู้ชายและผู้หญิงหรือมุ่งเป้าไปที่เพศใดเพศหนึ่ง",
  },
  {
    question: "ตัวเลือกการจัดส่งและค่าใช้จ่ายมีอะไรบ้าง?",
    answer:
      "ให้ข้อมูลเกี่ยวกับวิธีการจัดส่ง เวลาจัดส่งโดยประมาณ และค่าธรรมเนียมที่เกี่ยวข้อง",
  },
  {
    question: "นโยบายการคืนสินค้าสำหรับเสื้อยืดคืออะไร?",
    answer:
      "อธิบายระยะเวลาการคืนสินค้า เงื่อนไข และขั้นตอนการคืนเงินหรือแลกเปลี่ยน",
  },
];

const FaqContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
        Frequently asked questions
      </h3>
      <Accordion type="single" collapsible>
        {faqsData.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqContent;
