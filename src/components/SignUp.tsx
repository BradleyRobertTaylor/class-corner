import Card from "./ui/Card";
import Icons from "./ui/Icons";

export default function SignUp() {
  return (
    <div className="hidden md:block mx-auto max-w-xl">
      <h3 className="font-extrabold mb-5">Get started as...</h3>
      <div className="flex gap-4 h-50">
        <Card
          text="Teacher"
          iconBackgroundColor="bg-[#33a852]"
          icon={<Icons icon="teacher" className="w-20" />}
        />
        <Card
          iconBackgroundColor="bg-[#ffd943]"
          text="Parent"
          icon={<Icons icon="parent" className="w-16" />}
        />
        <Card
          iconBackgroundColor="bg-[#9afbfe]"
          text="Admin"
          icon={<Icons icon="admin" className="w-16" />}
        />
      </div>
    </div>
  );
}
