"use client";

import { useInView } from "@/custom_hooks/useInView";
import {
  BeakerIcon,
  HeartIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

export default function Content() {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: BeakerIcon,
      title: "AI-Powered Diagnostics",
      description:
        "Instant analysis of medical reports using advanced machine learning algorithms",
      bg: "bg-purple-100",
    },
    {
      icon: HeartIcon,
      title: "Real-Time Monitoring",
      description: "24/7 health tracking with smart wearable integration",
      bg: "bg-blue-100",
    },
    {
      icon: ComputerDesktopIcon,
      title: "Virtual Consultations",
      description: "HD video calls with specialist doctors worldwide",
      bg: "bg-pink-100",
    },
    {
      icon: ShieldCheckIcon,
      title: "Military-Grade Security",
      description: "End-to-end encryption for all your medical data",
      bg: "bg-green-100",
    },
  ];

  const stats = [
    { number: "98%", label: "Diagnostic Accuracy" },
    { number: "24/7", label: "Medical Support" },
    { number: "50+", label: "Specialties Covered" },
    { number: "5M+", label: "Patients Served" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* First Screen */}
      <div
        className="min-h-screen flex items-center relative z-10 pb-20"
        ref={ref1}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                inView1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Next Generation Healthcare in Your Hands
              </h2>
              <p className="text-xl text-gray-600">
                Experience seamless integration of advanced medical technology
                and personalized care, designed to empower both patients and
                practitioners.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-12">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-lg"
                  >
                    <div className="text-3xl font-bold text-purple-600">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={ref2}
              className={`space-y-8 transition-all duration-1000 delay-200 ${
                inView2
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <div className="relative h-96 bg-white rounded-3xl shadow-2xl p-8">
                <div className="absolute inset-0 rounded-3xl border-2 border-white/10"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="inline-block p-6 bg-blue-100 rounded-2xl">
                      <ComputerDesktopIcon className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Virtual Care Platform
                    </h3>
                    <p className="text-gray-600">
                      Experience our immersive telemedicine interface
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Screen */}
      <div
        className="min-h-screen flex flex-col items-center relative z-10"
        ref={ref3}
      >
        <div
          className={`max-w-7xl mx-auto px-6 lg:px-12 w-full space-y-8 transition-all duration-1000 delay-200 ${
            inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent pb-40">
            Explore All Features
          </h2>
          <div className={"grid grid-cols-1 lg:grid-cols-2 gap-12"}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-8 ${feature.bg} rounded-2xl shadow-lg transition-transform duration-300 delay-200 hover:scale-[1.02]`}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <feature.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center pt-80">
          <h3 className="text-2xl font-bold">@2025 MedMax</h3>
        </div>
      </div>
    </section>
  );
}
