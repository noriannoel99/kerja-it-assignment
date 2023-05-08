import { useNavigate } from "react-router-dom";

function JobCard(props: any) {
  const date = new Date(props.job.post_date);
  const isNew = date.getFullYear() === 2023;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        console.log(props.job.id);
        navigate(`/job/${props.job.id}`);
      }}
      className="border p-4 rounded-md w-[350px] space-y-4 cursor-pointer"
    >
      <div className="my-3">
        <h4 className="text-xl font-medium inline-block">{props.job.job}</h4>
        {isNew ? (
          <span className="bg-green-300 inline-block p-1 mx-2 text-sm text-gray-700">
            NEW
          </span>
        ) : null}
        <p>{props.job.company}</p>
      </div>
      <div>
        <p>{props.job.post_date}</p>
        <p>{props.job.district}</p>
        <p className="capitalize">{props.job.work_type}</p>
      </div>
      <div className="space-x-2 my-2">
        {props.job.stacks.map((stack: string, index: number) => {
          return (
            <p key={index} className="bg-gray-200 inline-block p-1 rounded">
              {stack}
            </p>
          );
        })}
      </div>
      <div className="my-2"> {props.job.post_date}</div>
    </div>
  );
}

export default JobCard;
