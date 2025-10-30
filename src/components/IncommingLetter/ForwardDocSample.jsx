"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ForwardDocument } from "./ForwardDocument";

// Sample data
const forwardOptions = [
  {
    id: 1,
    name: "ስለሺ አጥናፌ ገ/ማሪያም",
    photoUrl: "https://github.com/shadcn.png",
    structure: "ኮርፖሬት ሰርቪስ ዘርፍ",
    orgName: "Technology Division",
    position: "ም/ዋና ዳይሬክተር",
  },
  {
    id: 2,
    name: "Rina Alvarez",
    photoUrl: "https://github.com/shadcn.png",
    structure: "RnA Cn Laboratories",
    orgName: "Research & Development",
    position: "ም/ዋና ዳይሬክተር",
  },
  {
    id: 3,
    name: "Ashton Irwin",
    photoUrl: "https://github.com/shadcn.png",
    structure: "Standard Protocol Ltd.",
    orgName: "Operations Unit",
    position: "ም/ዋና ዳይሬክተር",
  },
  {
    id: 4,
    name: "Samantha Reyes",
    photoUrl: "https://github.com/shadcn.png",
    structure: "Executive Summary Group",
    orgName: "Management Department",
    position: "ም/ዋና ዳይሬክተር",
  },
  {
    id: 5,
    name: "Felix Douglas",
    photoUrl: "https://github.com/shadcn.png",
    structure: "Documentation Bureau",
    orgName: "Corporate Archives",
    position: "ም/ዋና ዳይሬክተር",
  },
];

const senderInfo = {
  id: 1,
  name: "Kidist Woldegiorgis Woldekidan",
};

export default function ForwardDocSample() {
  const [showForward, setShowForward] = useState(false);

  const handleForward = async (data) => {
    console.log("Forwarding document with data:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Document forwarded successfully!");
    setShowForward(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Forward Document System</h1>

        <Button
          onClick={() => setShowForward(true)}
          className="bg-[#0A74B9] hover:bg-[#053B60]"
        >
          Open Forward Dialog
        </Button>

        {showForward && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center custom-p-20 z-50">
            <ForwardDocument
              title="Forward Case"
              senderInfo={senderInfo}
              forwardOptions={forwardOptions}
              onForward={handleForward}
              onClose={() => setShowForward(false)}
              cancelText="Cancel"
              forwardText="Forward"
            />
          </div>
        )}
      </div>
    </main>
  );
}
