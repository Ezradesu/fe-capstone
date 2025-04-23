import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Ezra Raditya",
      role: "Project Leader",
      avatar: "https://avatar.iran.liara.run/public/48",
    },
    {
      name: "Haikal Maulidy",
      role: "Backend Engineer",
      avatar: "https://avatar.iran.liara.run/public/48",
    },
    {
      name: "Gregorius Kevin",
      role: "Backend Engineer",
      avatar: "https://avatar.iran.liara.run/public/48",
    },
    {
      name: "David Kim",
      role: "UX Designer",
      avatar: "https://avatar.iran.liara.run/public/48",
    },
    {
      name: "Olivia Martinez",
      role: "Marketing Director",
      avatar: "https://avatar.iran.liara.run/public/48",
    },
    {
      name: "Marcus Johnson",
      role: "Customer Success",
      avatar: "https://avatar.iran.liara.run/public/48",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-background">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              The brilliant minds behind our AI summarization technology.
            </p>
          </div>
          <Separator className="my-8" />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 w-full max-w-6xl">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4 flex flex-col items-center space-y-3">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="font-medium text-base">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
