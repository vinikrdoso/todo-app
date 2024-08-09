interface BadgeProps {
  quantity: number;
  completed?: number;
  prefix?: boolean;
}

export function Badge({ quantity, completed, prefix }: BadgeProps) {
  return (
    <div className="bg-gray-400 py-0.5 px-2 rounded-full min-w-[25px]">
      {prefix && quantity > 0 && (
        <span className="text-gray-200">{completed} de </span>
      )}
      <span className="text-gray-200">{quantity}</span>
    </div>
  );
}
