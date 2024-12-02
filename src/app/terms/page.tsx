import type { Metadata } from "next";
import TOS from "./tos";

export const metadata: Metadata = {
  title: "RAVC | Terms Of Service",
};

export default function Terms() {
  return (
    <div className={"ml-auto mr-auto w-[800px] flex flex-col p-5 gap-5"}>
      <p className={"text-2xl font-bold text-center"}>Terms Of Service</p>
      <TOS />
    </div>
  );
}
