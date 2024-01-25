"use client"
import React from "react";

const MainTop= () => {
    return <section className="
        bg-gradient-to-r from-black-blue to-light-blue w-full 
              
    ">
        <div className="pl-12 pt-16">
          <p className="text-white flex flex-col text-4xl text font-extrabold">INNOVATION <span >& SECURITY</span>  </p> 
          <p className="text-success">For</p> 
          <p className="text-success md:text-2xl mb-5 font-extrabold">Future Healthcare</p>
          <div className="flex flex-row">
            <div className="">
                <p className="text-white font-extrabold pl-2"><span className="text-3xl font-extrabold">24</span> MAR 2023</p> 
                <p className="text-black text-sm px-2  rounded-full border bg-white">เวลา 13:00-19:00 น.</p> 
                
            </div>
            <p className="border-r-2 border-success px-3 "></p>
            <div className="pl-3">
              <p className="text-xl text-success mb-1">At Grand Ballroom 4th Floor</p> 
              <p className="text-sm text-white">Pullman Bankok Grande sukhumvit</p> 
            </div>
            
          </div>
          <div className="text-xs text-white md:text-sm my-8">
            <p className="text-xl font-extrabold">เหนือกว่า ด้วยโซลูชัน Healthcare แห่งอนาคต</p>
            <p>ทลายทุกความท้าท้าย เพิ่มศักยภาพการรักษาและการให้บริการด้านสาธารณสุขด้วย AI diagnosis, IoT,
            <p>
            Telemedicine, Self-service และ Medical Service Platform พร้อมการปกป้องข้อมูลส่วนบุคคล (PDPA) 
            </p>
            และรับมือกับภัยคุกคามทางไซเบอร์ เพื่อความปลอดภัยขั้นสูงสุด</p>
          </div>
          
        </div>
        <div className="text-white text-center bg-gradient-to-r from-black to-light-blue  w-full ">
            <p>สำรองที่นั่งล่วงหน้า <span>(จำนวนจำกัด*)</span> </p>
            <p>หมายเหตุ : สัมมนา Exclusive สำหรับกลุ่มโรงพยาบาล และสาธารณะสุข</p>
            <button className="bg-success w-52 h-9 text-white rounded-md  border">ลงทะเบียน</button>
        </div>
       
        
    </section>
}

export default MainTop;