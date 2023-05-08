import MyButton from "../components/mybutton";
import MyBlackButton from "../components/myblackbutton copy";
import JobCard from "../components/JobCard";
import JobData from "../assets/job-directory-data.json";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

function Home() {
  return (
    <div>
      <Header />
      <SubHeader />

      {/* Hero*/}
      <div className="flex  flex-col justify-between items-center  ">
        <p className="font-bold text-3xl mt-5">Find Tech Jobs In Malaysia 🇲🇾</p>
        <p className=" text-sm my-3">
          Let employers find you. Or apply to companies directly.s
        </p>
        <div className="mt-2">
          <MyBlackButton text="I want companies to find me" />
          <MyButton text="Search Jobs" />
        </div>
      </div>
      {/*card container */}
      <div className="flex justify-center items-center  flex-wrap gap-4 ">
        {/*job cards*/}
        {JobData.map((job, index) => {
          return <JobCard job={job} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Home;
