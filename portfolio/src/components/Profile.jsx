import { useState } from "react";
import "../index.css"
import profilePicture from "../assets/myImg.jpg"

const Profile = () => {
    const [displyBio, setDisplyBio] = useState(false);

    const toggle = () =>{
        !displyBio? setDisplyBio(true) : setDisplyBio(false)
    }

  return (
    <div>
      <img src={profilePicture} className={"profile"} alt="profile" />
      <h1>مرحبا</h1>
      <p>
      بعد الانتهاء من الرحلة التعليمية الممتعة، أتطلع إلى بدء حياتي المهنية في مجال تطوير الويب وأن أكون مكسبًا للمؤسسة التي سأعمل بها.
      </p>
      {
      displyBio? 
    <div>
        <p> كما أتطلع إلى اكتساب المزيد من المعرفة والخبرة في مجال عملي لكي أدفع بنفسي إلى أبعد نقطة ممكنة في هذا المجال وأستغل ذلك في بناء مشاريعي المستقبلية</p>
        <p>فضلاً عن توظيف مهاراتي ومعرفتي المتنوعة لأكون فناناً حقيقياً. مساهم في تنمية اقتصاد بلدي.</p>
        <button onClick={toggle} className="btn">أخفي</button>
      </div> 
      :
      <div>
        <button onClick={toggle} className="btn">اقرأ أكثر</button>
      </div>
      }
    </div>
  );
};

export default Profile;
