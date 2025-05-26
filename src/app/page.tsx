import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/create"} className="mt-3 w-fit mx-auto block">
        <button className="bg-opacity-light hover:bg-opacity-second-light cursor-pointer px-5 py-2 mb-6 rounded-lg flex items-center gap-2 justify-center">
          Create Event
        </button>
      </Link>
    </div>
  );
}
