import type { ITest } from "@/entities/test/model/types";
import TestListItem from "./item";

type Props = {
  data: ITest[];
};

const TestsList: React.FC<Props> = ({ data }) => {
  return (
    <ul className="mb-20">
      {data.map((test) => (
        <TestListItem key={test._id} test={test} />
      ))}
    </ul>
  );
};

export default TestsList;
