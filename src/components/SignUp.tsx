import Card from "./ui/Card";

export default function SignUp() {
  return (
    <div className="hidden md:block mx-auto max-w-xl">
      <h3 className="font-extrabold mb-5">Get started as...</h3>
      <div className="flex gap-4 h-50">
        <Card text="Teacher" />
        <Card text="Parent" />
        <Card text="Admin" />
      </div>
    </div>
  );
}
