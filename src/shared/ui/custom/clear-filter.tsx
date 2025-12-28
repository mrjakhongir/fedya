import { Button } from "../button";

type Props = {
  onClear: () => void;
};

const ClearFilter: React.FC<Props> = ({ onClear }) => {
  return (
    <div className="mt-2 border-t pt-2">
      <Button
        className="w-full"
        variant="secondary"
        size="sm"
        onClick={onClear}
      >
        Clear
      </Button>
    </div>
  );
};

export default ClearFilter;
