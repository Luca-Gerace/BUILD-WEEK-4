import { Field, Label, Select } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Footer() {
  const items1 = [
    { id: "about", label: "About", to: "/" },
    { id: "communityGuidelines", label: "Community Guidelines", to: "/" },
    { id: "privacy&Terms", label: "Privacy & Terms", to: "/" },
    { id: "salesSolutions", label: "Sales Solutions", to: "/" },
    { id: "safetyCenter", label: "Safety Center", to: "/" },
  ];
  const items2 = [
    { id: "accesibility", label: "Accesibility", to: "/" },
    { id: "careers", label: "Careers", to: "/" },
    { id: "adChoices", label: "Ad Choices", to: "/" },
    { id: "mobile", label: "Mobile", to: "/" },
  ];
  const items3 = [
    { id: "talentSolutions", label: "Talent Solutions", to: "/" },
    { id: "marketingSolutions", label: "Marketing Solutions", to: "/" },
    { id: "advertising", label: "Advertising", to: "/" },
    { id: "smallBusiness", label: "Small Business", to: "/" },
  ];

  const items4 = [
    {
      id: "questions",
      icon: QuestionMarkCircleIcon,
      label: "Questions?",
      subLabel: "Visit our Help Center.",
      to: "/",
    },
    {
      id: "Manage",
      icon: Cog6ToothIcon,
      label: "Manage your account and privacy",
      subLabel: "Go to your Settings.",
      to: "/",
    },
    {
      id: "recommendationTransparency",
      icon: ShieldCheckIcon,
      label: "Recommendation transparency",
      subLabel: "Learn more about Recommended Content.",
      to: "/",
    },
  ];

  return (
    <footer className="p-5 pt-40">
      <div className="w-full lg:w-[1024px] m-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-2">
          {items1.map((item) => (
            <Link to={item.to} key={item.id}>
              <span className="text-[#666666] text-[12px] hover:underline">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {items2.map((item) => (
            <Link to={item.to} key={item.id}>
              <span className="text-[#666666] text-[12px] hover:underline">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {items3.map((item) => (
            <Link to={item.to} key={item.id}>
              <span className="text-[#666666] text-[12px] hover:underline">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col">
          {items4.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                to={item.to}
                key={item.id}
                className="flex items-center p-2 gap-3"
              >
                <span className="w-[40px]">
                  <Icon />
                </span>
                <div className="flex flex-col">
                  <span className="text-gray-800 font-semibold hover:underline hover:text-blue-700">
                    {item.label}
                  </span>
                  <span className="text-sm text-gray-500">{item.subLabel}</span>
                </div>
              </Link>
            );
          })}
        </div>

        <Field className="flex flex-col gap-2">
          <Label>Scegli Lingua:</Label>
          <Select name="Lingua" className="w-[200px] h-[40px] ">
            <option value="italiano">Italiano</option>
            <option value="inglese">Inglese</option>
            <option value="tedesco">Tedesco</option>
            <option value="arabo">Arabo</option>
          </Select>
        </Field>
      </div>
      
      <div className="mt-[30px] w-full lg:w-[1024px] m-auto">
        LinkedIn Corporation © 2024
      </div>
    </footer>
  );
}
