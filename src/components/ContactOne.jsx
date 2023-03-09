import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactOne = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="bg-blue-primary ">
      <div className="px-6 py-10 flex items-center justify-between">
        <div>
          <p>Email :- nishnatsingh123@gmail.com</p>
          <p>Add :- hasanpur east-champaran bihar 845416</p>
          <p>125458252474</p>
        </div>
        <div>
          <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <div className="flex flex-col gap-6">
              <input
                className="w-96 py-3 rounded-md"
                {...register("firstName")}
                placeholder="First name"
              />
              <select
                className="w-96 py-3 rounded-md"
                {...register("category", { required: true })}
              >
                <option value="">Select...</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
              </select>
              <textarea className="rounded-md" {...register("aboutYou")} placeholder="About you" />
              <p>{data}</p>
              <input className="bg-black text-white p-5 rounded-full" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactOne;
