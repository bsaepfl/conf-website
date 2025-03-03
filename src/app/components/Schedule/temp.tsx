import React, { useState } from 'react';

type Stage = {
  name: string;
  events: {
    time: string;
    title: string;
    description?: string | React.ReactNode;
  }[];
};

const stages: Stage[] = [
  {
    name: "Main Stage",
    events: [
      { time: "10:00", title: "Panel 1: Don't trust: prove, verify" },
      { time: "11:30", title: "Panel 2:  Does privacy have a usecase? (privacy applications)" },
      { time: "14:00", title: "Panel 3: TradFi & Defi with privacy" },
      { time: "15:30", title: "Panel 4: regulation in privacy-enhancing technologies" },
      { time: "16:20", title: "Zuitzerland" },
      { time: "17:00", title: "Panel 5: Verifiability: scaling blockchain to new heights (zk scalability)" }, 
    ],
  },
  {
    name: "Side Stage 1",
    events: [
      { time: "09:30", title: "Peterson Yuhala: Secure Computation with TEE", description: "For many years, the focus of data security has been on protecting data at rest or in transit. However, over the last few decades, sensitive data is increasingly being processed on remote computing infrastructures, which may be untrusted or potentially malicious, and are often beyond the control of data owners. This shift has exposed data to vulnerabilities during computation, prompting the development of new techniques to secure data in use." },
      { time: "10:05", title: "Guillaume Michel: Intro to IPFS", description: "As the internet evolves, ensuring the integrity and verifiability of web content becomes increasingly essential. This talk delves into the transformative capabilities of the InterPlanetary File System (IPFS) in enhancing web verifiability. Emphasizing IPFS's decentralized nature, we explore how its resilience and censorship resistance contribute to a more trustworthy internet. At the core of IPFS lies content addressing, which revolutionizes data management through deduplication, self-certification, immutability, and the use of Merkle DAGs. We will briefly the peer-to-peer nature of IPFS, alongside an overview of decentralized content routing, setting the stage for a deeper understanding of IPFS's architecture. Furthermore, we will examine IPFS HTTP gateways, which bridge the gap between traditional web access and decentralized storage. These gateways play a crucial role in bringing IPFS to the broader web ecosystem, enabling trustless and verifiable content delivery. Join us to discover how IPFS not only revolutionizes data storage and distribution but also fortifies the web’s integrity, making it more secure, reliable, and verifiable." },
      { time: "10:30", title: "Amir Taaki: DarkFi: Anonymous P2P Agorist Markets" },
      { time: "11:00", title: "Ziyi Guan: Breaking Verifiable Delay Functions in the Random Oracle Model", description: "This work resolves the open problem of whether verifiable delay functions (VDFs) can be constructed in the random oracle model." },
      { time: "11:35", title: "Mate Soos: hevm, a flexible symbolic execution framework to verify EVM bytecode", description: "In this talk, I'll present hevm, a symbolic execution engine for the EVM that can prove safety properties for EVM bytecode or verify semantic equivalence between two bytecode objects. It exposes a user-friendly API in Solidity that allows you to define symbolic tests using almost exactly the same syntax as usual unit tests. The underlying symbolic execution framework, written in Haskell, is a powerful, extensible system that allows the tool to easily fit many different needs, such as concrete, semi-concrete, symbolic, or even multi-transaction symbolic execution."},
      { time: "12:00", title: "Feltroid Prime: Optimised Noir and Groth16 verification on Starknet with Garaga", description: "A practical presentation of the techniques used to enable cheap verification of Zk Proofs on Starknet with Garaga." },
      { time: "14:10", title: "Christian Knabenhans: Making lattice-based PETs easy to use", description: "Cryptographic primitives built from  assumptions are versatile and powerful building blocks for privacy-preserving applications. However, lattice-based cryptography (in particular zero-knowledge proofs) are scarcely implemented, in part because of the complexity of reasoning about and parametrizing them. In this talk, I introduce lattirust, a comprehensive and high-assurance lattice cryptography library, written in Rust, which adresses these challenges. " },
      { time: "14:35", title: "Simon Malatrait: Designing your first ZK-VM with Circle STARKs: a Brainfuck AIR for STWO", description: "Why would someone want to prove programs?" },
      { time: "15:10", title: "Handan Alper: zkSharding, scaling Ethereum with sharded rollups", description: "This talk introduces zkSharding, an innovative Ethereum rollup that combines sharding with ZKPs. By enabling parallel transaction processing across independent execution shards, zkSharding achieves high throughput while preserving security, decentralization. Its architecture is built on key innovations like ShardDAG for transaction ordering, asynchronous cross-shard communication, and efficient zkProof aggregation through a distributed prover network." },
      { time: "15:35", title: "Sylve Chevet: The future of Internet is signed and verified", description: "Everything will be signed, everything will be verified" },
      { time: "16:30", title: "Akaki Mamageishvili: BoLD: Fast and Cheap Dispute Resolution", description: "BoLD is a new dispute resolution protocol that is designed to replace the originally deployed Arbitrum dispute resolution protocol. Unlike that protocol, BoLD is resistant to delay attacks. It achieves this resistance without a significant increase in onchain computation costs and with reduced staking costs." },
      { time: "17:30", title: "Phillip Jovanovic: ARKE: Scalable and Byzantine Fault Tolerant Privacy-Preserving Contact Discovery", description: "Contact discovery is a crucial component of social applications, facilitating interactions between registered contacts. In this talk we present Arke, a novel contact discovery scheme that addresses the limitations of existing solutions in terms of privacy, scalability, and reliance on trusted third parties. Arke ensures the unlinkability of user interactions, mitigates enumeration attacks, and operates without single points of failure or trust. Notably, Arke is the first contact discovery system whose performance is independent of the total number of users and the first that can operate in a Byzantine setting. It achieves its privacy goals through an unlinkable handshake mechanism built on top of an identity-based non-interactive key exchange. By leveraging a custom distributed architecture, Arke forgoes the expense of consensus to achieve scalability while maintaining consistency in a Byzantine fault tolerant environment. Our performance evaluations demonstrate that Arke provides enough throughput to support the needs of the most popular messaging applications while maintaining sub-second latencies in a large geo-distributed setting" },  
    ],
  },
  {
    name: "Side Stage 2",
    events: [
      
      { time: "10:00", title: "Jeff Burdges: Zero-knowledge continuations useful ring VRFs", description: "Ring VRFs aka anonymised verifiable random functions provide a cleaver framework. We discuss the tricky parts of deploying prover optimisations for ring ." },
      { time: "11:05", title: "François-Xavier Wicht: How Privacy Impacts Storage In Cryptocurrency", description: "Blockchain technologies have emerged more than a decade ago as a decentralized alternative to fiat currencies. They substantially differ from their counterparts since they allow any party to join the network and validate transactions. Transactions are thus usually conducted transparently and completely visible to anyone in order to validate them. Financial activities of honest users can thus easily be tracked and analyzed, undermining the privacy of individuals and businesses. Several new cryptocurrencies, such as ZCash and Monero, were developed to address these privacy concerns by providing enhanced privacy for users. However, incorporating privacy in a blockchain system incurs significant computational and storage overhead due to its validity requirements. In this talk, we focus on the later and reason systematically on the structure and the cause of this additional storage requirements." },
      { time: "11:15", title: "Pim Keer: Mechanics of the Bitcredit Protocol", description: "BoLD is a new dispute resolution protocol that is designed to replace the originally deployed Arbitrum dispute resolution protocol. Unlike that protocol, BoLD is resistant to delay attacks. It achieves this resistance without a significant increase in onchain computation costs and with reduced staking costs." },
      { time: "12:00", title: "Maciej Kalka: Web Proofs Demystified - a deep dive into zkTLS", description: "TLS enables secure data downloads through encrypted connections, but its symmetric encryption prevents third-party verification and verifiable sharing. Web Proofs or so called zkTLS solve this! How? What's behind the buzzwords which shake crypto space. In my talk I will comprehensively review the space and highlight both academic and production efforts. Then, we will focus on inner workings of TLSNotary – the pivotal MPC-TLS protocol. Finally, we will try to answer the question – where is 'zk' in 'zkTLS'." },
      { time: "12:05", title: "Sisyfos: Starknet Ecosystem" },
      { time: "14:05", title: "Claude Barde & Sergey Kisel: Midnight - Empowering data protection apps", description: "Join Claude Barde from Midnight and Sergey Kisel from Brick Towers for an engaging session on zero-knowledge proofs in real-world applications. Claude will explain how Midnight leverages ZK technology to enhance privacy, security, and compliance in blockchain. Sergey will then demonstrate these concepts with an interactive Sea Battle challenge, showcasing how ZKPs enable private, verifiable computations without revealing unnecessary information." },
      { time: "15:05", title: "Gurgen Arakelov: Privacy-Preserving AI Models Hub with Decentralized Execution EnvO", description: "Fully Homomorphic Encryption (FHE) has revolutionized privacy-preserving computations, allowing secure data processing without decryption. We present an innovative solution for sharing, deploying, and monetizing FHE-based machine learning models and datasets with focus on a decentralized execution environment. By leveraging advanced cryptographic techniques, it ensures end-to-end data confidentiality while enabling seamless collaboration between data providers and model developers. This decentralized approach bridges the gap between privacy concerns and the growing demand for AI solutions, providing a secure, scalable, and trustless ecosystem for the commercialization and utilization of encrypted machine learning assets." },
      { time: "15:30", title: "François-Xavier Wicht: Toxic Decoys: A Path to Private Blockchain Scalability", description: "Motivated by the lack of privacy on traditional ledgers, anonymous cryptocurrencies attracted much attention over the past decade. Yet, preserving both integrity and privacy in an open environment is challenging and usually incurs computational and storage limitations. In this work, we focus on the latter and address the high data overhead directly related to privacy." },
      { time: "16:05", title: "Kassandra.eth: Stealthereum: open-source tools for onchain stealth NOW", description: "Journey through building practical onchain privacy tools that people will actually use! Taking baby-steps to a much more anonymized ethereum blockspace by tackling the difficult problem of UX. Introducing the 'Cypherpunk Wallet' project." },
      { time: "16:35", title: "Alexander Linton: How Decentralised Messaging Protects Privacy", description:"There are growing concerns around the centralisation of data on messaging platforms and the risks of privacy erosion, particularly when apps retain personal information that can be exploited by malicious actors." },
      { time: "17:10", title: "Nicolas Sierro: Self Sovereign Identity for Age assurance with ZK Proofs: from data privacy compliance to successful usage through suited business model", description: 
        <>  
          - On-the-edge age estimation for data privacy compliance
          <br />
          - Self Sovereign Identity with credentials in wallet & Zero-Knowledge Proof
          <br />
          - Consumer usage success with no or minimal fees
          <br />
          - Who will pay? The right business model with platform, issuer, and verifier, with examples of running systems and PoCs
          </>
        },
      { time: "17:30", title: "Maxim Orlovsky: Ultraviolet: A new generation of privacy-first ultra-scalable smart contracts made with client-side validation (RGB) and zk-VM (SONIC). ", description: "Client-side validation is a new distributed computing paradigm, which allows significant scalability and privacy. Over the last 6 years we have been building a platform which leverages client-side validation to provide a Turing-complete privacy-first distributed computing and smart contracts. This resulted in  the development of a set of new distributed computing approaches, which bring privacy and scalability much beyond what is possible with blockchains: peers verify not the entire global state history, but just a small part of it which has direct relation to the state they want to operate; and this history is compressed with zk-STARKs on the client side. In the talk we will present the details of how this is achieved, starting with a new consensus mechanism (Prime), capability-based memory model for distributed zk-computing (SONIC), zk-VM (zk-AluVM), smart contract platform (RGB) and the network, which utilizes all of these compontents (Ultraviolet)." },
    ],
  },
];

const Schedule: React.FC = () => {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const toggleDescription = (title: string) => {
    setExpandedEvent(expandedEvent === title ? null : title);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="
        text-4xl 
        font-bold 
        text-center 
        mb-12 
        title-shine 
        bg-clip-text 
        text-transparent
        transition-all
        duration-300
        hover:scale-105
        text-white
      ">
        Conference Schedule
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stages.map((stage, idx) => (
          <div key={idx} className={`card shadow-lg ${stage.name === "Main Stage" ? "bg-primary text-white p-6" : "bg-secondary p-4"}`}>
            <div className="card-body">
              <h3 className="card-title text-center mb-6 text-2xl">{stage.name}</h3>
              <div className="flex flex-col space-y-6">
                {stage.events.map((event, i) => (
                  <div key={i} className="flex flex-col items-start border-b border-gray-300 pb-4">
                    <div className="w-20 text-center flex flex-row w-full space-x-4">
                      <span className={`badge ${stage.name === "Main Stage" ? "badge-info" : "badge-primary"}`}>{event.time}</span>
                      {event.description &&(
                      <button 
                          className="badge text-sm bg-blue-500 text-white px-3  rounded "
                          onClick={() => toggleDescription(event.title)}
                        >
                          {expandedEvent === event.title ? "Hide" : "More Info"}
                        </button>)}
                    </div>
                    <div className="ml-6 flex-1">
                      <p className={`font-semibold ${stage.name === "Main Stage" ? "text-xl" : "text-lg"}`}>{event.title}</p>
                    </div>
                    
                    {expandedEvent === event.title && event.description && (
                      <p className="text-sm text-gray-500 mt-2 ml-6">{event.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center p-3 mt-6 h-30">
        <h1 className="text-3xl sm:text-3xl font-bold text-black p-5">And much more during our Hackathon the following days!</h1>
        <a href="/hackathon" className="btn 
              btn-primary 
              sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl
              text-white
              transition-all 
              duration-300 
              ease-in-out
              hover:scale-105
              hover:shadow-lg
              hover:brightness-110
              active:scale-95
              active:shadow-md
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-primary
              ">Check out the Hackathon</a>
      </div>
    </div>
  );
};

export default Schedule;
