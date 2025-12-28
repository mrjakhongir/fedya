type Props = {
  children: React.ReactNode;
};

const BottomActionsWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="fixed right-0 bottom-0 left-0 border-t bg-white py-4">
      {children}
    </div>
  );
};

export default BottomActionsWrapper;
