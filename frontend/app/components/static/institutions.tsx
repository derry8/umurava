import Image from 'next/image'
import ared from '../../../public/Ared 1.png'
import ciba from '../../../public/CIBA 1.png'
import viamo from '../../../public/EducationCollaborative 1.png'
import laterite from '../../../public/HiiL_Logo 1.png'
import kepler from '../../../public/KeplerLogo 1.png'
import soko from '../../../public/SokoFund 1.png'
import tori from '../../../public/Tori 1.png'
import igihe from '../../../public/IGIHE_LOGO 1.png'
import gdg from '../../../public/Gdg_Kigali 1.png'
import education from '../../../public/EducationCollaborative 1.png'
import hiil from '../../../public/HiiL_Logo 1.png'
import 'typeface-work-sans';

const images = [
  tori, gdg, education, kepler, hiil, ciba,
  ared, igihe, viamo, kepler, laterite, soko
]

function Institutions() {
  return (
    <div className="bg-[#FFFFFF] py-[80px] ">
      <h1 className="font-sans text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold leading-[36px] md:leading-[48px] tracking-[-0.5px] text-[#03192E] w-full opacity-100 text-center mb-8">
        Join a few Educational Institutions using <br /> Skills Challenges by Umurava
      </h1>

      {/* First container with 6 images */}
      <div className="flex w-full flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 mb-8">
        {images.slice(0, 6).map((image, index) => (
          <div key={index} className="flex justify-center items-center w-full sm:w-[150px] md:w-[180px] lg:w-[200px]">
            <Image src={image} alt={`Institution logo ${index + 1}`} className="object-contain" width={200} height={200} />
          </div>
        ))}
      </div>

      {/* Second container with the remaining 6 images */}
      <div className="flex w-full flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {images.slice(6, 12).map((image, index) => (
          <div key={index} className="flex justify-center items-center w-full sm:w-[150px] md:w-[180px] lg:w-[200px]">
            <Image src={image} alt={`Institution logo ${index + 7}`} className="object-contain" width={200} height={200} />
          </div>
        ))}
      </div>

      {/* Third container for the additional image */}
      <div className="flex w-full flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 mt-16">
        <div className="flex justify-center items-center w-full sm:w-[150px] md:w-[180px] lg:w-[200px]">
          <Image src={education} alt="Additional Logo" className="object-contain" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}

export default Institutions;
