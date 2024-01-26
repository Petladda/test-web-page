import Image from "next/image";
import React from "react";

const MainTop= () => {
    return <section className="
    bg-gradient-to-r from-black-blue  via-indigo-950  to-black-blue  w-full 
              
    ">
        <div className="pl-12 lg:pl-14  flex flex-row justify-between mb-5">
          <div className="pt-16 lg:pt-20 ">
            <p className="text-white flex flex-col lg:mb-4 text-4xl text font-extrabold">INNOVATION <span >& SECURITY</span>  </p> 
            <p className="text-success">For</p> 
            <p className="text-success md:text-2xl mb-5 font-extrabold">Future Healthcare</p>
            <div className="flex flex-row my-10">
              <div className="">
                  <p className="text-white font-extrabold pl-2 md:text-base lg:text-xl"><span className="text-3xl lg:text-4xl font-extrabold">24</span> MAR 2023</p> 
                  <p className="text-black text-sm px-2 md:text-base lg:text-xl rounded-full border bg-white">เวลา 13:00-19:00 น.</p> 
                  
              </div>
              <p className="border-r-2 border-success px-3  "></p>
              <div className="pl-3">
                <p className="text-xl text-success mb-1 md:text-2xl lg:text-3xl">At Grand Ballroom 4th Floor</p> 
                <p className="text-sm md:text-base lg:text-lg text-white">Pullman Bankok Grande sukhumvit</p> 
              </div>
              
            </div>
            <div className="text-xs text-white my-8 lg:pt-15">
              <p className="text-xl font-extrabold md:text-xl lg:text-2xl">เหนือกว่า ด้วยโซลูชัน Healthcare แห่งอนาคต</p>
              <p className="text-sm  md:text-base lg:text-lg">ทลายทุกความท้าท้าย เพิ่มศักยภาพการรักษาและการให้บริการด้านสาธารณสุขด้วย AI diagnosis, IoT,
              <br></br>
              Telemedicine, Self-service และ Medical Service Platform พร้อมการปกป้องข้อมูลส่วนบุคคล (PDPA) <br></br>  
              และรับมือกับภัยคุกคามทางไซเบอร์ เพื่อความปลอดภัยขั้นสูงสุด</p>
            </div>
            <div className="flex flex-row items-center  justify-between  ">
              <Image src="/logo1.png"
                  className="mx-2"
                  alt="bg"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  width={100}
                  height={100}
                  />
                  
              <Image src="/logo2.png"
                  alt="bg"
                  className="mx-2"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  width={100}
                  height={100}/>
              <Image src="/logo3.png"
                  alt="bg"
                  className="mx-2"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  width={100}
                  height={100}/>
              <Image src="/logo4.png"
                  alt="bg"
                  className="mx-2"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  width={100}
                  height={100}/>
              <Image src="/logo5.png"
                  alt="bg"
                  className="mx-2"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  width={100}
                  height={100}/> 
              <Image src="/logo6.png"
                  alt="bg"
                  className="mx-2"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  width={100}
                  height={100}/>
              <Image src="/logo7.png"
                  alt="bg"
                  className="mx-2"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  width={100}
                  height={100}/> 
            </div>
          </div>
          
             <Image
                src="/bg2.png"
                alt="bg"
                width={400}
                height={400} 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
         
              
        </div>
          
        <div className="text-white text-center pt-3 bg-gradient-to-r from-black to-mid-blue   w-full ">
            <p className="mb-1 text-xs md:text-base lg:text-lg font-extrabold mt-2 ">สำรองที่นั่งล่วงหน้า <span className="text-gray-500">(จำนวนจำกัด*)</span> </p>
            <p className="text-gray-500">หมายเหตุ : สัมมนา Exclusive สำหรับกลุ่มโรงพยาบาล และสาธารณะสุข</p>
            <button className="bg-success w-52 h-10 text-white rounded-md mt-3 mb-5 border hover:bg-green-300">ลงทะเบียน</button>
        </div>
       
        
        
    </section>
}

export default MainTop;