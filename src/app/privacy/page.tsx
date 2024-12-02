import { Metadata } from "next";
import Privacy from "./privacy";

export const metadata: Metadata = {
  title: "RAVC | Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className={"ml-auto mr-auto w-[800px] flex flex-col p-5 gap-5"}>
      <h2 className="text-2xl font-bold text-center">Privacy Policy</h2>
      <Privacy />
    </div>
  );
}
