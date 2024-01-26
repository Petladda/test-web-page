import Image from "next/image";
import React from "react";

const ContentDatil= () => {
    return <section className=" items-center w-full">
        
    <div className="text-black text-start px-10 my-5  ">
        <p className="text-xl text-primary font-extrabold md:text-xl lg:text-2xl mb-4 ">พบกับกุญแจสำคัญของ <span className="text-success">”Healthcare” </span>แห่งอนาคตได้ที่งานสัมมนานี้</p>
        <ul className="marker:text-success list-outside list-disc ml-6 text-base md:text-lg lg:text-xl">
            <li>เพิ่มศักยภาพการรักษา และการให้บริการด้วย IoT, AI diagnosis, Telemedicine, Self-service และ Medical Service Platform </li>
            <li>ก้าวสู่ Smart Healthcare ด้วย Intelligent Infrastructure</li>
            <li>ยกระดับความสามารถในการรับมือกับภัยคุกคามทางไซเบอร์ด้วย AI & Automation</li>
            <li>ยกระดับการดูแลรักษาข้อมูลสำคัญในโรงพยาบาลด้วยเทคโนโลยีการปกป้องข้อมูล</li>
            <li>ลดระยะเวลาการทำงานของบุคลากรทางการแพทย์</li>
            <li>ยกระดับความพึงพอใจของผู้รับบริการด้านสาธารณสุข</li> 
        </ul>
        
    </div>
    <div className="bg-teal-50 ">
        <div className="flex flex-row px-10  ">
            <p className="border-l-8  border-success px-3 mt-5  "></p> 
            <p className="text-base md:text-xl lg:text-2xl mt-5  text-primary font-extrabold ">Main Speaker</p>
        </div>
        <div className="grid grid-cols-3 gap-3 items-center my-2">
            <div className="text-center my-5">
                <div className="px-32">
                    <Image src="/1.png"
                    alt="bg"
                    className=""
                    
                    width={200}
                    height={200}/> 
                </div>
              
                <p className="text-sm md:text-base lg:text-lg  text-primary font-extrabold ">รศ. วิรุฬห์ ศรีบริรักษ์</p>
                <p className="text-sx md:text-sm lg:text-base  text-secondary ">คณะวิศวกรรมศาสตร์ มหาวิทยาลัยบูรพา</p>
                <p className="text-sx md:text-sm lg:text-base mx-12">ผู้ก่อตั้ง Bangsaen Design House Group และ กิน-อยู่-ดี แพลตฟอร์ม</p>
            </div>
            <div className="items-center text-center my-5">
            <div className="px-32">
                    <Image src="/2.png"
                    alt="bg"
                    className=""
                    sizes="(max-width: 640px) 100vw, 33vw"
                    width={200}
                    height={200}/> 
                </div>
                <p className="text-sm md:text-base lg:text-lg  text-primary font-extrabold ">ผศ.ดร. กฤษณะ ชินสาร</p>
                <p className="text-sx md:text-sm lg:text-base  text-secondary ">คณบดีคณะวิทยาการสารสนเทศ มหาวิทยาลัยบูรพา</p>
            </div>
            <div className="items-center text-center my-5">
                <div className="px-32">
                    <Image src="/3.png"
                    alt="bg"
                    className=""
                    sizes="(max-width: 640px) 100vw, 33vw"
                    width={200}
                    height={200}/> 
                </div>
                <p className="text-sm md:text-base lg:text-lg  text-primary font-extrabold ">คุณวิญญู อดิศักดิ์ตระกูล</p>
                <p className="text-sx md:text-sm lg:text-base  text-secondary ">Solution Consultant Manager</p>
                <p className="text-sx md:text-sm lg:text-base mx-12">บริษัท ซังฟอร์ เทคโนโลยี (ประเทศไทย) จำกัด</p>
            </div>
            <div className="items-center text-center my-5"> 
            <div className="px-32">
                    <Image src="/4.png"
                    alt="bg"
                    className=""
                    sizes="(max-width: 640px) 100vw, 33vw"
                    width={200}
                    height={200}/> 
                </div>
                <p className="text-sm md:text-base lg:text-lg  text-primary font-extrabold ">คุณสรรชัย ลีฬหาเกียรติ</p>
                <p className="text-sx md:text-sm lg:text-base  text-secondary ">Senior Technical Management</p>
                <p className="text-sx md:text-sm lg:text-base mx-12">บริษัท เลอโนโว (ประเทศไทย)</p>
            </div>
            <div className="items-center text-center my-5">
            <div className="px-32">
                    <Image src="/5.png"
                    alt="bg"
                    className=""
                    sizes="(max-width: 640px) 100vw, 33vw"
                    width={200}
                    height={200}/> 
                </div>
                <p className="text-sm md:text-base lg:text-lg  text-primary font-extrabold ">คุณวันพิชิต ชินตระกูลชัย</p>
                <p className="text-sx md:text-sm lg:text-base  text-secondary ">Chief Technology Officer</p>
                <p className="text-sx md:text-sm lg:text-base mx-12">บริษัท แร็กน่าร์ คอร์ปอเรชั่น จำกัด และผู้ก่อตั้ง t-reg PDPA Platform</p>
            </div>
            <div className="items-center text-center my-5">
                <div className="px-32">
                    <Image src="/6.png"
                    alt="bg"
                    className=""
                    sizes="(max-width: 640px) 100vw, 33vw"
                    width={200}
                    height={200}/> 
                </div>
                <p className="text-sm md:text-base lg:text-lg  text-primary font-extrabold ">คุณพิเชษฐ์ พิทักษ์วศิน</p>
                <p className="text-sx md:text-sm lg:text-base  text-secondary ">Chief Technology Officer</p>
                <p className="text-sx md:text-sm lg:text-base mx-12">บริษัท คลิกเน็กซ์ จำกัด</p>
            </div>
        </div>
    </div>
    
    
</section>
}

export default ContentDatil;