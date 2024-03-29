import Image from "next/image";
import React from "react";

const SpecialDetail= () => {
    return <section className=" items-center flex flex-col mt-9 w-full px-15 ">
        
            <div className="bg-green-100 rounded-xl px-10 w-11/12 h-full">
                <div className="flex flex-row  mt-5">
                    <p className="border-l-8  border-success px-3 "></p> 
                    <p className="text-base md:text-xl lg:text-2xl text-primary font-extrabold ">Schedule</p>
                </div>
                <div className="border-b-2 mt-3 border-extar-white "></div>
                <div className="mt-3 ">
                    <p className="text-white text-sm md:text-base lg:text-lg mb-5  pt-2 w-56 h-11 text-center  rounded-full border bg-success">ช่วงที่ 1  13:00 - 15:30 น.</p>
                    <ul className="marker:text-success list-outside list-disc ml-6">
                        <li>PDPA ในโรงพยาบาล ความท้าทายใหม่หลังการบังคับใช้ พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล</li>
                        <li>Improving Cyber resilience with AI & Automation</li>
                        <li>Lenovo Intelligent Infrastructure to enable Smart Healthcare</li>
                    </ul>
                    
                </div>
                <div className="border-b-2 mt-3 border-extar-white "></div>
                <div className="mt-3">
                    <p className="text-white text-sm md:text-base text-center mb-5 pt-2 lg:text-lg px-2 w-56 h-11  rounded-full border bg-success">ช่วงที่ 2  15:35 - 17:05 น.</p>
                    <ul className="marker:text-success list-outside list-disc ml-6">
                        <li className="">Enhance customer experience for Healthcare with digital technologies</li>
                        <li>Holistic IoT & AI for Healthcare, Telemedicine and Medical Service Platform</li>
                        <li>Empowering Health Tech solution with AI diagnosis</li>
                    </ul>
                    
                </div>
                <div className="border-b-2 mt-3 border-extar-white "></div>
                <div className="flex flex-row mt-4 mb-4">
                    <p className="text-white text-sm md:text-base text-center  pt-2 lg:text-lg px-2 w-56 h-11  rounded-full border mr-5 bg-success">17:05 - 19:00 น.</p>
                    <p className="text-sm md:text-base py-2">ร่วมรับประทานอาหาร (International Dinner Buffet)</p>
                </div>

                
                
            </div>
            <div className="bg-gradient-to-r from-primary  via-blue-900 to-secondary flex flex-row  w-11/12  justify-between rounded-xl px-10 mt-9">
                    <div className="text-white flex flex-row text-center px-12 md:px-14 lg:px-28">
                        <svg width="82" height="82" className="mt-12" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.2" cx="40.8281" cy="40.8818" r="40.8281" fill="#0B0B0B"/>
                        <path d="M40.8266 50.2141C44.2678 47.4333 46.8664 44.7568 48.6224 42.1846C50.3771 39.6124 51.2544 37.1966 51.2544 34.9372C51.2544 32.9907 50.8985 31.3306 50.1866 29.9569C49.4733 28.5846 48.5953 27.4723 47.5525 26.62C46.5097 25.7691 45.3801 25.1524 44.1635 24.7701C42.9469 24.3877 41.8346 24.1965 40.8266 24.1965C39.8185 24.1965 38.7062 24.3877 37.4896 24.7701C36.2731 25.1524 35.1434 25.7691 34.1006 26.62C33.0578 27.4723 32.1805 28.5846 31.4686 29.9569C30.7553 31.3306 30.3987 32.9907 30.3987 34.9372C30.3987 37.1966 31.276 39.6124 33.0307 42.1846C34.7867 44.7568 37.3854 47.4333 40.8266 50.2141ZM40.8266 55.4801C35.9255 51.8651 32.2667 48.3544 29.8502 44.948C27.4351 41.5416 26.2275 38.2046 26.2275 34.9372C26.2275 32.4693 26.6711 30.3052 27.5581 28.4449C28.4438 26.5859 29.5818 25.0308 30.9722 23.7794C32.3626 22.5281 33.9268 21.5896 35.6648 20.9639C37.4027 20.3382 39.1233 20.0254 40.8266 20.0254C42.5298 20.0254 44.2504 20.3382 45.9883 20.9639C47.7263 21.5896 49.2905 22.5281 50.6809 23.7794C52.0713 25.0308 53.21 26.5859 54.0971 28.4449C54.9827 30.3052 55.4256 32.4693 55.4256 34.9372C55.4256 38.2046 54.2173 41.5416 51.8008 44.948C49.3857 48.3544 45.7277 51.8651 40.8266 55.4801ZM40.8266 38.7956C41.9736 38.7956 42.9559 38.3868 43.7735 37.5692C44.5896 36.7531 44.9977 35.7715 44.9977 34.6244C44.9977 33.4773 44.5896 32.495 43.7735 31.6775C42.9559 30.8613 41.9736 30.4533 40.8266 30.4533C39.6795 30.4533 38.6979 30.8613 37.8817 31.6775C37.0642 32.495 36.6554 33.4773 36.6554 34.6244C36.6554 35.7715 37.0642 36.7531 37.8817 37.5692C38.6979 38.3868 39.6795 38.7956 40.8266 38.7956ZM28.3131 61.7369C27.1613 61.7369 26.2275 60.8031 26.2275 59.6513C26.2275 58.4995 27.1613 57.5657 28.3131 57.5657H53.34C54.4918 57.5657 55.4256 58.4995 55.4256 59.6513C55.4256 60.8031 54.4918 61.7369 53.34 61.7369H28.3131Z" fill="white"/>
                        </svg>
                        <div className="ml-6 mt-12">
                            <p className="text-xl font-extrabold md:text-xl lg:text-2xl">ณ ห้องแกรนด์บอลรูม ชั้น 4</p>
                            <p>โรงแรมพูลแมน กรุงเทพแกรนด์ สุขุมวิท</p>
                            <p className="text-white text-sm md:text-base lg:text-lg mb-5  pt-2 w-56 h-11 text-center  rounded-full border bg-secondary">17:05 - 19:00 น.</p> 
                        </div>
                        
                    </div>
                    <div className="py-5">
                        <Image src="/hotel.png"
                        alt="bg"
                        className=""
                        
                        sizes="(max-width: 768px) 100vw, 33vw"
                        width={200}
                        height={200}/> 
                </div>
            </div>
            <div className="bg-white border-b justify-between w-11/12 h-full mb-5 rounded-xl px-10 mt-9">
                    <div>
                        <p className="text-xl font-extrabold md:text-xl lg:text-2xl text-primary mb-6">สำหรับผู้เข้าร่วมงานลุ้นรับรางวัล</p>                 
                    </div>
                    <div className="grid grid-cols-3 gap-3 items-center px-9 mb-6">
                        <div>
                            <Image src="/re1.png"
                            alt="bg"
                            className=""
                            sizes="(max-width: 640px) 100vw, 33vw"
                            width={150}
                          
                            height={150}/>
                            <p className="font-extrabold text-sm md:text-base lg:text-lg">Ipad Gen 10 64GB</p>
                            <p>1 รางวัล</p>
                        </div>
                        <div>
                            <Image src="/re2.png"
                            alt="bg"
                            className=""
                            sizes="(max-width: 640px) 100vw, 33vw"
                            width={150}
                            
                            height={150}/>
                            <p className="font-extrabold text-sm md:text-base lg:text-lg">Apple watch SE</p>
                            <p>1 รางวัล</p>
                        </div>
                        <div>
                            <Image src="/re3.png"
                            alt="bg"
                            className="mb-5"
                            sizes="(max-width: 640px) 100vw, 33vw"
                            width={300}
                            
                            height={600}/>
                            <p className="font-extrabold mt-25 text-sm md:text-base lg:text-lg">Bulk SMS 5,000 sms</p>
                            <p>10 รางวัล</p>
                        </div>
                    </div>
            </div>
       
        <div className="text-white text-center pt-3 bg-white   w-full ">
            <p className="mb-1 text-xs md:text-base lg:text-lg font-extrabold mt-2 text-primary">สำรองที่นั่งล่วงหน้า <span className="text-gray-500">(จำนวนจำกัด*)</span> </p>
            <p className="text-gray-500">หมายเหตุ : สัมมนา Exclusive สำหรับกลุ่มโรงพยาบาล และสาธารณะสุข</p>
            <button className="bg-success w-52 h-10 text-white rounded-md mt-3 mb-5 border hover:bg-green-300">ลงทะเบียน</button>
        </div>
        
    </section>
}

export default SpecialDetail;