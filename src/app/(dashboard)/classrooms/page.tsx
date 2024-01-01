import AddClassButton from '@/components/AddClassButton';
import ClassroomItem from '@/components/ClassroomItem';

import { classrooms } from '@/data/mock';

export default function ClassroomsPage() {
  return (
    <section className="pt-32 pb-6 px-6 md:pt-44 md:max-w-2xl lg:max-w-4xl mx-auto">
      <h1 className="font-bold text-2xl mb-4">My Classes</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {classrooms.map((classroom) => (
          <ClassroomItem key={classroom.id} {...classroom} />
        ))}
        <AddClassButton />
      </div>
    </section>
  );
}
