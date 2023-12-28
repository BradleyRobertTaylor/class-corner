import Icons from "./ui/Icons";

const AddClassButton = () => {
  return (
    <div className="h-40 w-40 flex flex-col gap-5 items-center justify-center rounded-3xl p-4 bg-white">
      <div>
        <div className="bg-button-purple rounded-full aspect-square">
          <Icons icon="plus" className="h-12 w-12 fill-white" />
        </div>
      </div>
      <span>New class</span>
    </div>
  );
};

export default AddClassButton;
