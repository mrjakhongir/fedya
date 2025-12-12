type Props = {
  label: string;
  value: string | number;
};

const InfoItem: React.FC<Props> = ({ label, value }) => {
  return (
    <li className="flex items-center justify-between text-sm">
      <span className="text-slate-500">{label}:</span>
      <span className="mx-1 mb-1 h-0.5 flex-1 self-end bg-linear-to-r from-transparent via-gray-400 to-transparent bg-size-[8px_1px] bg-repeat-x"></span>
      <span className="text-slate-800">{value}</span>
    </li>
  );
};

export default InfoItem;
