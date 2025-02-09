import Main from "../components/static/Edumain"
import Card from "../components/global/Card"
import Institutions from "../components/static/institutions"
import Integration from "../components/static/integration"
import Transform from "../components/static/transform"
import { BriefcaseIcon } from '@heroicons/react/24/outline';

function page() {
  return (
    <div>
      <Main />
      <div className="bg-[#F9FAFB] border pt-[76px] px-[20px] md:px-[50px] lg:px-[103px] pb-[76px]">
  <h1 className="font-sans text-[24px] md:text-[32px] lg:text-[40px] font-bold leading-[36px] md:leading-[48px] tracking-[-0.5px] text-[#03192E] w-full opacity-100 text-center mb-4">
    Key Offerings & Benefits: 
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
    {/* Row 1 */}
    <Card
      icon={<BriefcaseIcon className="h-[24px] w-[24px] text-[#2596be]" />}
      title="Employability and Career Development Opportunities"
      content="Students gain hands-on experience working on real-world challenges and help them build professional networks that increase their chances and readiness of landing job opportunities and this lead to career advancement and long-term success."
    />
    <Card
      icon={<BriefcaseIcon className="h-[24px] w-[24px] text-[#2596be]" />}
      title="Practical Application of Classroom Knowledge"
      content="The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses."
    />
    <Card
      icon={<BriefcaseIcon className="h-[24px] w-[24px] text-[#2596be]" />}
      title="Students & Trainees Engagement"
      content="Embed and incorporate Skills Challenges into your courses to give students and trainees hands-on projects and practices that enhance their learning experience and skills mastery. Competitive and project-based challenges keep students motivated and actively engaged in their learning journey."
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
    {/* Row 2 */}
    <div className="md:col-span-2">
      <Card
        icon={<BriefcaseIcon className="h-[24px] w-[24px] text-[#2596be]" />}
        title="Access to the Industry Experts & Mentors"
        content="Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field."
      />
    </div>
    <div className="md:col-span-1">
      <Card
        icon={<BriefcaseIcon className="h-[24px] w-[24px] text-[#2596be]" />}
        title="Skills Assessments"
        content="Embed our projects-based tests and skills assessments directly into your curriculum."
      />
    </div>
  </div>
</div>
      <Institutions/>
      <Integration/>
      <Transform/>
    </div>
  )
}

export default page
