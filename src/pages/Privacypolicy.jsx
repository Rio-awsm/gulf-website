import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "/assets/black-logo.svg";
import { useTranslation } from "react-i18next";
import {
  ChevronRight,
  Shield,
  Lock,
  Bell,
  Users,
  Cookie,
  UserCog,
  RefreshCw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const Privacypolicy = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("common");

  const sections = [
    {
      icon: Shield,
      title: t('Privacy.policies.one.heading'),
      content: t('Privacy.policies.one.text'),
    },
    {
      icon: Lock,
      title: t('Privacy.policies.two.heading'),
      content: t('Privacy.policies.two.text'),
    },
    {
      icon: Bell,
      title: t('Privacy.policies.three.heading'),
      content: t('Privacy.policies.three.text'),
    },
    {
      icon: Users,
      title: t('Privacy.policies.four.heading'),
      content: t('Privacy.policies.four.text'),
    },
    {
      icon: Cookie,
      title: t('Privacy.policies.five.heading'),
      content: t('Privacy.policies.five.text'),
    },
    {
      icon: UserCog,
      title: t('Privacy.policies.six.heading'),
      content: t('Privacy.policies.six.text'),
    },
    {
      icon: RefreshCw,
      title: t('Privacy.policies.seven.heading'),
      content: t('Privacy.policies.seven.text'),
    },
  ];
  

  return (
    <main>
      <Navbar
        textcolor={"black"}
        font={"bold"}
        justify={"center"}
        scrollbg={"[#024959]"}
        logo={Logo}
      />

      <section className="pt-24 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-16 text-center">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-32 h-32 bg-[#F2762E]/10 rounded-full blur-3xl"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#024959] mb-6">
            {t('Privacy.heading')}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('Privacy.subHeading')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-8 border border-gray-100 group"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <section.icon className="w-8 h-8 text-[#F2762E] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[#024959] mb-3 group-hover:text-[#F2762E] transition-colors duration-300">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <p className="text-gray-600">
            {t('Privacy.question')}
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#024959] text-white rounded-full hover:bg-[#024959]/90 transition-colors duration-300 font-medium shadow-lg shadow-[#024959]/20 hover:shadow-xl hover:shadow-[#024959]/30"
            >
              {t('buttons.ContactUs')}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacypolicy;
