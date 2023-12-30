import AddClassButton from '@/components/AddClassButton';

export default function ClassroomsPage() {
  return (
    <section className="pt-32 pb-6 px-6 md:pt-44 md:max-w-2xl lg:max-w-4xl mx-auto">
      <h1 className="font-bold text-2xl mb-4">My Classes</h1>
      <div className="flex flex-wrap gap-3">
        <AddClassButton />
      </div>
    </section>
  );
}
