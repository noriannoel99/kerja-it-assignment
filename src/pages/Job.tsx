import { useParams } from "react-router-dom";
import JobData from "../assets/job-directory-data.json";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import MyBlueButton from "../components/mybluebutton";

function Job() {
  const param = useParams();
  const ID = Number(param.id);
  const filteredArray = JobData.filter((item) => item.id === Number(param.id));
  const [filteredJob] = filteredArray;
  const Stacks = JobData[ID].stacks;

  console.log(filteredJob);

  return (
    <div>
      <Header />
      <SubHeader />
      <p className="flex items-center justify-center m-3">
        Jobs / {filteredJob.job} -
      </p>
      <section className="flex items-center justify-center bg-gray-50 ">
        {" "}
        <div className=" border p-4  rounded-md w-[650px] space-y-4 bg-white">
          <div className="mb-2">
            {" "}
            <h1
              className="text-3xl font-bold mb-2
            "
            >
              {filteredJob.job}
            </h1>
            <p>{filteredJob.company}</p>
          </div>

          <div className="flex">
            <div className="border p-1 rounded-md bg-gray-200 text-xs m-1">
              {filteredJob.district}
            </div>
            {Stacks.map((stack, index) => (
              <div
                key={index}
                className="border p-1 rounded-md bg-gray-200 text-xs m-1"
              >
                {stack}
              </div>
            ))}
          </div>

          <div className="text-s">
            {" "}
            <p>{filteredJob.post_date}</p>
            <p>{filteredJob.company_state}</p>
            <p>{filteredJob.company_country}</p>
            <p>{filteredJob.work_type}</p>
          </div>
          <MyBlueButton text="Apply Now" />
          <p className="text-xl font-bold ">Job Description</p>
          <p>{filteredJob.details.job_description}</p>
          <p className="text-xl font-bold ">Qualification</p>
          <p>{filteredJob.details.qualification}</p>
          <MyBlueButton text="Apply Now" />
        </div>
      </section>
    </div>
  );
}

export default Job;
