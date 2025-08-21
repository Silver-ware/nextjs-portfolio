import { ExpertiseInterface } from "@/data/expertise";
import { Progress } from "./ui/progress";
import { Award } from "lucide-react";
import { techStackData } from "@/data/techstackbtn";

export default function ExpertiseTable({sortedData} : {sortedData: ExpertiseInterface[]}) {
  return (
    <div className="flex-1 self-stretch w-full custom-scrollbar overflow-y-auto bg-transparent">
      <table className="w-full">
        <thead>
          <tr className="font-extralight text-[14px] sticky top-0 z-20 bg-[#171717] text-neutral-300">
            <th className="px-1 py-2">Technology</th>
            <th className="px-1 py-2">Understanding</th>
            <th className="px-1 py-2">Projects</th>
            <th className="px-1 py-2">Activities</th>
          </tr>
        </thead>
        <tbody className="font-light text-sm text-foreground">
          {sortedData.map((data) => (
            <tr key={data.name}>
              <td className="pl-3 pr-1 py-2">
                <div className={`flex items-center gap-1`}>
                  <Award className={`${techStackData.map(data => data.name).includes(data.name) ? "text-green-700" : "text-gray-500"} w-4 h-4`}/>
                  <span>{data.name}</span>
                </div>
                
              </td>
              <td className="px-1 py-2">
                <Progress value={data.understanding}/>
              </td>
              <td className="px-1 py-2 text-center">{data.projects}</td>
              <td className="px-1 py-2 text-center">{data.activities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
