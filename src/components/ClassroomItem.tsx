import { Classroom } from '@/types';
import Icons from './ui/Icons';
import Link from 'next/link';

const ClassroomItem = ({
  id,
  name,
  gradeLevel,
  numberOfStudents,
}: Classroom) => {
  return (
    <Link
      href={`/classrooms/${id}/students`}
      className="aspect-square flex flex-col items-center justify-center rounded-3xl p-4 bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-shadow"
    >
      <div className="bg-[#3E7A3F] rounded-full aspect-square p-1 mb-4">
        <Icons icon="apple" className="h-10 w-10 fill-white" />
      </div>
      <span className="font-semibold">{name}</span>
      <div className="text-neutral-500">{numberOfStudents || 0} students</div>
    </Link>
  );
};

export default ClassroomItem;
