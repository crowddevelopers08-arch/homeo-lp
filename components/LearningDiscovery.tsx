import Image from "next/image";

function FeatureImage({ side, alt }: { side: "left" | "right"; alt: string }) {
  return (
    <Image
      src="/learning-discovery-strip.png"
      alt={alt}
      width={2560}
      height={1024}
      sizes="(max-width: 640px) 420px, (max-width: 1024px) 650px, 800px"
      quality={95}
      className={`absolute top-0 h-full w-[200%] max-w-none object-cover ${side === "left" ? "left-0" : "-left-full"}`}
    />
  );
}

export default function LearningDiscovery() {
  return (
    <section id="about" className="overflow-hidden bg-white px-4 py-8 font-sans text-black/70 sm:px-6 sm:py-10 lg:min-h-[800px] lg:py-[40px]">
      <div className="mx-auto mb-8 max-w-[900px] text-center sm:mb-12">
        <p className="text-[12px] font-bold tracking-[1px] text-[#1f5fff] sm:text-[14px]">
          ABOUT THE CLINIC
        </p>
        <h2 className="mt-3 text-[24px] leading-[1.3] font-extrabold text-[#000d44] sm:mt-4 sm:text-[30px]">
          Why Choose B Homeo for Your Child’s Care?
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1490px] items-center gap-10 sm:gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
        <div className="relative mx-auto h-[355px] w-full max-w-[700px] sm:h-[500px] lg:h-[566px]">
          <div className="absolute left-0 top-0 h-[315px] w-[58%] overflow-hidden sm:h-[440px] lg:h-[505px] lg:w-[395px]">
            <FeatureImage
              side="left"
              alt="Children enjoying an outdoor climbing frame"
            />
          </div>
          <div className="learning-image-float absolute left-[42%] top-[35px] h-[315px] w-[58%] overflow-hidden rounded-[5px] sm:top-[50px] sm:h-[440px] lg:left-[288px] lg:top-[60px] lg:h-[505px] lg:w-[393px]">
            <FeatureImage
              side="right"
              alt="Smiling student writing beside an open book"
            />
          </div>
        </div>

        <div className="mx-auto max-w-[630px] pb-1 sm:pb-3 lg:pl-1">
          <div className="space-y-4 text-[14px] leading-[1.8] sm:space-y-5 sm:text-[16px] sm:leading-[1.85]">
            <p className="max-sm:mb-1">
              B Homeo Wellness follows a patient-centred and personalised
              approach, where treatment decisions are based on the individual’s
              symptoms, health history and overall needs.
            </p>
            <p className="max-sm:mb-1">
              For children with attention, hyperactivity or behavioural
              concerns, the consultation focuses on understanding the child’s
              overall pattern before recommending an individualised homeopathic
              care plan.
            </p>
            <p className="max-sm:mb-1">
              Parents can access B Homeo care through its branch network as well
              as online consultations from home. The clinic also offers
              doctor-led consultations and personalised treatment plans designed
              around each patient.
            </p>
          </div>
          <div className="flex justify-left max-sm:justify-center pt-4 sm:pt-8 lg:pt-10 max-sm:pb-3">
            <a
              href="#contact"
              className="group relative inline-flex rounded-[10px] bg-[#1f5fff] px-8 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-black/10 transition-opacity hover:opacity-90"
            >
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                aria-hidden="true"
              >
                <rect
                  x="7"
                  y="7"
                  rx="7"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="10 7"
                  className="button-running-dash"
                  style={{
                    width: "calc(100% - 14px)",
                    height: "calc(100% - 14px)",
                  }}
                />
              </svg>
              <span className="relative z-10">Start with a Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
