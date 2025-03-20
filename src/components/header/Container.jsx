const Container = ({ children, className }) => {
  return (
    <div
      className={`${className} lg:max-w-screen-2xl mx-auto px-4 xl:px-0 py-4`}
    >
      {children}
    </div>
  );
};

export default Container;
