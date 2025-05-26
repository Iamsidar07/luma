
export default function DateTimeInput({
  label,
  date,
  time,
  setDate,
  setTime,
}: {
  label: string;
  date: string;
  time: string;
  setDate: (val: string) => void;
  setTime: (val: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-400">{label}</label>
      <div className="flex gap-2">
        {/* Date Input */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-gray-700 text-white px-3 py-2 rounded"
        />

        {/* Time Input */}
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="bg-gray-700 text-white px-3 py-2 rounded"
        />
      </div>
    </div>
  );
}
