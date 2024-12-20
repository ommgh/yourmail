const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full flex items-center justify-center bg-gradient-to-b from-white to-blue-500">
      {children}
    </div>
  );
};

export default Authlayout;
