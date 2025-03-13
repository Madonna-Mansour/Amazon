import React from 'react'
import logo from '../images/logoFoter.png'


const Footer = () => {
  return (
    <div className='bg-[#222e3d] p-12 fixed absolute bottom-0 '>
        <div className="grid grid-cols-1 md:grid-cols-4 p-10 container mx-auto  "> 
             <div className="text-white font-bold">
                  <h3>دعنا نساعدك</h3>
                  <p>المساعدة</p>
                  <p>سياسات وأسعار الشحن</p>
                  <p>طلبات الإرجاع والاستبدال</p>
                  <p>عمليات الاستدعاء وتنبيهات سلامة المنتج</p>
                  <p>تحميل تطبيق أمازون</p>
             </div>

             <div className="text-white font-bold">
                  <h3> كن شريكاً معنا</h3>
                  <p>حماية وبناء علامتك التجارية</p>
                  <p>أعلن عن منتجاتك</p>
                  <p>البيع على أمازون</p>
                  <p>الشحن مع أمازون</p>
                  <p>التوريد إلى أمازون</p>
             </div>

             <div className="text-white font-bold">
                  <h3>تسوق معنا</h3>
                  <p>حسابك</p>
                  <p>مشترياتك</p>
                  <p>عناوينك</p>
                  <p>قوائمك</p>
             </div>

             <div className="text-white font-bold">
                  <h3>اعرف المزيد عنا</h3>
                  <p>معلومات عن أمازون</p>
                  <p>وظائف</p>
                  <p>أمازون ساينس</p>
             </div>
        </div>
    </div>
  )
}

export default Footer