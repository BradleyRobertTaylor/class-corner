import Icons from './ui/Icons';

const AddClassButton = () => {
  return (
    <button className="h-70 w-70 flex flex-col gap-4 items-center justify-center rounded-3xl p-4 bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-shadow">
      <div className="bg-button-purple rounded-full aspect-square ">
        <Icons icon="plus" className="h-12 w-12 fill-white" />
      </div>
      <span>New class</span>
    </button>
  );
};

export default AddClassButton;
