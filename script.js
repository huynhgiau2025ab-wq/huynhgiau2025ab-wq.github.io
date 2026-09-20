
const routes = {
 "Bình Dương|TP.HCM":{4:300000,7:400000,16:700000,29:1000000},
 "Bình Dương|Vũng Tàu":{4:860000,7:1000000,16:1600000,29:2200000},
 "Bình Dương|Phan Thiết":{4:1300000,7:1500000,16:2400000,29:3200000},
 "Bình Dương|Đà Lạt":{4:2400000,7:2800000,16:4200000,29:5600000},
 "Bình Dương|Nha Trang":{4:2400000,7:2800000,16:4500000,29:6000000},
 "TP.HCM|Vũng Tàu":{4:850000,7:950000,16:1500000,29:2100000},
 "TP.HCM|Phan Thiết":{4:1500000,7:1700000,16:2700000,29:3500000},
 "TP.HCM|Đà Lạt":{4:1800000,7:2100000,16:3300000,29:4400000},
 "TP.HCM|Nha Trang":{4:2400000,7:2800000,16:4500000,29:6000000},
 "TP.HCM|Cần Thơ":{4:1600000,7:1900000,16:3000000,29:4000000}
};
function getPrice(a,b,c){return routes[a+"|"+b]||routes[b+"|"+a] ? (routes[a+"|"+b]||routes[b+"|"+a])[c] : null}
document.addEventListener("DOMContentLoaded",()=>{
 const form=document.querySelector("#quoteForm");
 if(!form)return;
 form.addEventListener("submit",e=>{
   e.preventDefault();
   const a=document.querySelector("#from").value,b=document.querySelector("#to").value,c=document.querySelector("#vehicle").value;
   const r=document.querySelector("#quoteResult"); const p=getPrice(a,b,c);
   r.hidden=false;
   if(p) r.innerHTML=`💰 Giá tham khảo: <strong>${p.toLocaleString("vi-VN")}đ</strong> · Xe ${c} chỗ<br><small>Nhân viên sẽ xác nhận giá theo lịch trình thực tế.</small>`;
   else r.innerHTML=`📞 Tuyến <strong>${a} → ${b}</strong> chưa có trong bảng giá mẫu.<br>Gọi <a href="tel:0342127750" style="color:#df1f26">0342 127 750</a> để nhận báo giá nhanh.`;
 });
 const year=document.querySelector("#year"); if(year) year.textContent=new Date().getFullYear();
});
