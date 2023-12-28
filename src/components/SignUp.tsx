import SignUpCard from "./ui/SignUpCard";
import Icons from "./ui/Icons";

const SignUp = () => {
  return (
    <div className="hidden md:block mx-auto max-w-xl">
      <h3 className="font-extrabold mb-5">Get started as...</h3>
      <div className="flex gap-4 h-50">
        <SignUpCard
          text="Teacher"
          iconBackgroundColor="bg-[#33a852]"
          icon={<Icons icon="teacher" className="w-20" />}
        />
        <SignUpCard
          iconBackgroundColor="bg-[#ffd943]"
          text="Parent"
          icon={<Icons icon="parent" className="w-16" />}
        />
        <SignUpCard
          iconBackgroundColor="bg-[#9afbfe]"
          text="Admin"
          icon={<Icons icon="admin" className="w-16" />}
        />
      </div>
    </div>
  );
};

export default SignUp;
