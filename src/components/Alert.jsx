/** @format */

const Alert = ({ type, text }) => {
  return (
    <div className="fixed top-25 right-5 flex justify-center items-center z-50">
      <div
        className={`p-2 ${
          type === "danger" ? "bg-red-800" : "bg-color-1"
        } items-center text-indigo-100 leading-none  flex lg:inline-flex rounded-md p-5`}
        role="alert"
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-green-700"
          } uppercase px-4 py-2 text-xs font-semibold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
