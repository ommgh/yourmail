import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "secure with advanced encryption",
      description: "giving you full control over who sees what and when.",
      image: "/envelope.png",
      alt: "Security shield with lock icon",
    },
    {
      title: "important message",
      description:
        "Get notified instantly, ensuring you're always in the loop and ready.",
      image: "/envelope.png",
      alt: "Envelope notification icon",
    },
    {
      title: "smart notifications and search tools",
      description: "helping you stay organized and solve problems quickly.",
      image: "/envelope.png",
      alt: "Magnifying glass search icon",
    },
  ];

  return (
    <section className="py-12 sm:py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-row items-start justify-between text-start gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl">
            Features you
            <br />
            will love.
          </h2>
        </div>
        <div className="grid gap-6 pt-8 sm:pt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center gap-4 rounded-3xl bg-gradient-to-b from-blue-400/20 to-blue-100/20 p-4 sm:p-6"
            >
              <div className="flex h-[200px] w-full items-center justify-center rounded-2xl bg-gradient-to-b from-blue-500 to-blue-600">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={100}
                  height={100}
                  className="h-20 w-20"
                />
              </div>
              <div className="grid gap-1">
                <p className="text-base">
                  We ensure every message stays{" "}
                  <span className="font-semibold text-gray-900">
                    {feature.title}
                  </span>
                  , <span className="text-gray-500">{feature.description}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
