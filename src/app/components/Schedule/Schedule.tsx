import React from 'react';

type ScheduleEvent = {
  time: string;
  title: string;
  description?: string;
};

type Stage = {
  name: string;
  events: ScheduleEvent[];
};

const stages: Stage[] = [
  {
    name: "Main Stage",
    events: [
      { time: "10:00", title: "Panel 1: Don't trust: prove, verify" },
      { time: "11:30", title: "Panel 2:  Does privacy have a usecase? (privacy applications)" },
      { time: "14:10", title: "Panel 3: TradFi & Defi with privacy" },
      { time: "15:35", title: "Panel 4: regulation in privacy-enhancing technologies" },
      { time: "17:00", title: "Panel 5: Verifiability: scaling blockchain to new heights (zk scalability)" },
    ],
  },
  {
    name: "Side Stage 1",
    events: [
      { time: "09:30", title: "Peterson Yuhala: Secure Computation with TEE" },
      { time: "10:05", title: "Guillaume Michel: Intro to IPFS: Web Verifiability through Content Addressing" },
      { time: "10:30", title: "Amir Taaki: DarkFi: Anonymous P2P Agorist Markets" },
      { time: "11:00", title: "Ziyi Guan: Breaking Verifiable Delay Functions in the Random Oracle Model" },
      { time: "11:35", title: "Mate Soos: hevm, a flexible symbolic execution framework to verify EVM bytecode" },
      { time: "14:05", title: "Christian Knabenhans: Making lattice-based PETs easy to use" },
      { time: "14:35", title: "Simon Malatrait: Designing your first ZK-VM with Circle STARKs: a Brainfuck AIR for STWO" },
      { time: "15:10", title: "Handan Alper: zkSharding, scaling Ethereum with sharded rollups" },
      { time: "15:35", title: "Sylve Chevet: The future of Internet is signed and verified" },
      { time: "16:30", title: "Akaki Mamageishvili: BoLD: Fast and Cheap Dispute Resolution" },
      { time: "17:30", title: "Phillip Jovanovic: ARKE: Scalable and Byzantine Fault Tolerant Privacy-Preserving Contact Discovery" },
    ],
  },
  {
    name: "Side Stage 2",
    events: [
      { time: "09:40", title: "Feltroid Prime: Optimised Noir and Groth16 verification on Starknet with Garaga" },
      { time: "11:00", title: "François-Xavier Wicht: How Privacy Impacts Storage In Cryptocurrency" },
      { time: "11:15", title: "Pim Keer: Mechanics of the Bitcredit Protocol" },
      { time: "12:00", title: "Maciej Kalka: Web Proofs Demystified - a deep dive into zkTLS" },
      { time: "14:05", title: "Claude Barde & Sergey Kisel: Midnight - Empowering data protection apps" },
      { time: "14:35", title: "Sisyfos: Starknet Ecosystem" },
      { time: "15:05", title: "Gurgen Arakelov: Privacy-Preserving AI Models Hub with Decentralized Execution EnvO" },
      { time: "15:30", title: "François-Xavier Wicht: Toxic Decoys: A Path to Private Blockchain Scalability" },
      { time: "16:00", title: "Kassandra.eth: Stealthereum: open-source tools for onchain stealth NOW" },
      { time: "16:35", title: "Alexander Linton: How Decentralised Messaging Protects Privacy" },
      { time: "17:10", title: "Nicolas Sierro: Self Sovereign Identity for Age assurance with ZK Proofs: from data privacy compliance to successful usage through suited business model" },
    ],
  },
];

const Schedule: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-12 title-shine bg-clip-text text-transparent transition-all duration-300 hover:scale-105 text-white">
        Conference Schedule
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stages.map((stage, idx) => (
          <div
            key={idx}
            className={`card shadow-lg ${
              stage.name === "Main Stage" ? "bg-primary text-white p-6" : "bg-secondary p-4"
            }`}
          >
            <div className="card-body">
              <h3 className="card-title text-center mb-6 text-2xl">
                {stage.name}
              </h3>
              <div className="flex flex-col space-y-6">
                {stage.events.map((event, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-20 text-center">
                      <span
                        className={`badge ${stage.name === "Main Stage" ? "badge-info" : "badge-primary"}`}
                      >
                        {event.time}
                      </span>
                    </div>
                    <div className="ml-6 flex-1 border-l-4 border-gray-300 pl-6">
                      <p className={`font-semibold ${stage.name === "Main Stage" ? "text-xl" : "text-lg"}`}>
                        {event.title}
                      </p>
                      {event.description && (
                        <p className="text-sm text-gray-500">{event.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
