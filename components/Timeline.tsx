import { Card } from "@/components/Card";

type TimelineItem = {
  title: string;
  description: string;
};

type TimelineProps = {
  items: readonly TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative grid gap-6 before:absolute before:left-3 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-line md:before:block">
      {items.map((item) => (
        <div key={item.title} className="relative md:pl-10">
          <span className="absolute left-0 top-6 hidden h-6 w-6 rounded-full border border-accent/50 bg-page md:block" />
          <Card>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
          </Card>
        </div>
      ))}
    </div>
  );
}
