import type { ReactNode } from 'react'

import Image from 'next/image'

import { cn } from '@/lib/utils'
import Details from '@/components/Details'


function SiteNavItem({ children, className, ...props }: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a {...props} className={cn(className, 'text-base font-normal hover:border-b hover:border-solid hover:border-b-[#262626]')}>
      {children}
    </a>
  )
}

function SiteNav() {
  return (
    <div className={cn("site-nav safe-viewport", "flex flex-row items-center justify-between py-6")}>
      <Image
        src="/logo.svg"
        alt="Phala Logo"
        className="svg-black-100"
        width={156}
        height={44}
        priority
      />
      <nav className={cn("flex flex-row gap-[3.75rem]")}>
        <SiteNavItem href="#">Developers</SiteNavItem>
        <SiteNavItem href="#">Compute Providers</SiteNavItem>
        <SiteNavItem href="#">Products</SiteNavItem>
        <SiteNavItem href="#">PHA Token</SiteNavItem>
        <SiteNavItem href="#">Participate</SiteNavItem>
      </nav>
      <div className="w-full max-w-[9.375rem]">
        <a href="#" className={cn("btn bg-blackAlpha-800 text-sm text-primary py-3 px-5 w-full flex flex-row justify-between items-center")}>
          <span>APP</span>
          <Image
            src="/icons/right-arrow.svg"
            alt=""
            className="svg-primary"
            width={16}
            height={16}
          />
        </a>
      </div>
    </div>
  )
}

function DotBackground({ dotColor, bgColor }: { dotColor: string, bgColor: string }) {
  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full cursor-none pointer-events-none"
      style={{
        backgroundColor: bgColor,
        backgroundImage: `radial-gradient(${dotColor} 2px, ${bgColor} 2px)`,
        backgroundSize: '56px 56px',
      }}
    />
  )
}

//
// Section Hero
//

function Stats({ children, name }: { children: ReactNode, name: string }) {
  return (
    <div>
      <h4 className={cn("text-lg font-semibold")}>{children}</h4>
      <div className={cn("text-sm text-blackAlpha-700")}>{name}</div>
    </div>
  )
}

function SectionHero() {
  return (
    <section className={cn("relative max-h-screen w-full")}>
      <div className={cn("background", "absolute top-0 left-0 w-full min-h-full z-[-1] select-none pointer-events-none")}>
        <Image src="/home/bg-first-screen.jpg" alt="" fill className="aspect-[3840/1980] object-cover" />
      </div>
      <div className={cn("flex flex-col h-screen justify-between items-center")}>
        <div className={cn("w-full")}>
          <SiteNav />
        </div>

        <div className={cn("uppercase text-center flex flex-col gap-16 justify-center")}>
          <header>
            <h2 className={cn("text-4xl font-normal text-[#222] leading-10 mb-2.5")}>Computation as it's meant to be</h2>
            <h3 className={cn("text-2xl font-black")}>
              On-Chain verification.
              Off-Chain <span className={cn("text-[#8544F6]")}>Capability.</span>
            </h3>
          </header>
          <div className={cn("flex flex-row gap-5 mx-auto")}>
            <a className={cn("btn btn-xl text-base bg-[#CDFA50] text-black")} href="">Let's Build!</a>
            <a className={cn("btn btn-xl text-base bg-white text-black")} href=""> Join Community</a>
          </div>
        </div>

        <div className={cn("safe-viewport", "mb-6")}>
          <div className={cn("flex flex-row justify-between")}>
            <div className="flex flex-row gap-5 items-center">
              <Image
                src="/icons/gear.svg"
                alt=""
                className="svg-black mr-2.5 motion-safe:animate-spin"
                width={37}
                height={37}
              />
              <Stats name="Online Workers">23.3k</Stats>
              <Stats name="Compute">161k vCPU</Stats>
              <Stats name="Cross-Chain TX">123,242</Stats>
              <Stats name="TX">2,341,223</Stats>
            </div>

            <div className="flex flex-col gap-2 items-end">
              <div className="flex flex-row gap-5">
                <Image
                  src="/home/logo1.png"
                  alt=""
                  width={65}
                  height={65}
                />
                <Image
                  src="/home/logo2.png"
                  alt=""
                  width={65}
                  height={65}
                />
                <Image
                  src="/home/logo3.png"
                  alt=""
                  width={65}
                  height={65}
                />
                <Image
                  src="/home/logo4.png"
                  alt=""
                  width={65}
                  height={65}
                />
                <Image
                  src="/home/logo5.png"
                  alt=""
                  width={65}
                  height={65}
                />
              </div>
              <a href="#" className={cn("flex flex-row gap-2")}>
                <span className={cn("text-sm")}>View All Supported Networks</span>
                <Image
                  src="/icons/right-arrow.svg"
                  alt=""
                  className="svg-secondary"
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// END: Section Hero

//
// Section Features
//

function FeatureHighlight({ idx, iconUrl, summary, children }: { idx: number, iconUrl: string, summary: string, children: ReactNode }) {
  return (
    <Details className={cn("feature-highlight-item")} idx={idx}>
      <summary>
        <Image
          src={iconUrl}
          alt=""
          width={32}
          height={32}
          className="icon"
        />
        {summary}
      </summary>
      <div className="body">
        {children}
      </div>
    </Details>
  )
}

function SectionFeatures() {
  return (
    <section className={cn("relative h-screen")}>
      <DotBackground dotColor="#E2E8F0" bgColor="#F7FAFC" />
      <div className={cn("safe-viewport", "flex flex-col h-full justify-end pb-16")}>
        <div className={cn("grid grid-cols-2 w-full")}>
          <div>
            <header className="uppercase pt-14 pb-28">
              <h2 className={cn("font-black text-5xl leading-normal")}>Smart Contracts.</h2>
              <h3 className={cn("text-6xl leading-normal")}>Now Smarter.</h3>
              <p className={cn("text-base text-blackAlpha-700 leading-relaxed mt-6")}>Phat Contract is the offchain program running on Phala Network.</p>
            </header>
            <div className={cn("flex flex-row gap-10")}>
              <div className={cn("flex flex-col")}>
                <div
                  className={cn("w-1.5 rounded-lg bg-blackAlpha-100 flex-1")}
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <FeatureHighlight idx={0} iconUrl="/icons/features-compare.svg" summary="Connect your smart contract anywhere">
                  <p>
                    Universal Compatibility Across EVM and Substrate Blockchains. Easily connect Phat Contracts to any blockchain without the need for a bridge, expanding your smart contract capabilities.
                  </p>
                </FeatureHighlight>
                <FeatureHighlight idx={1} iconUrl="/icons/features-all-out.svg" summary="Gain access to the internet">
                  <p>
                    Universal Compatibility Across EVM and Substrate Blockchains. Easily connect Phat Contracts to any blockchain without the need for a bridge, expanding your smart contract capabilities.
                  </p>
                </FeatureHighlight>
                <FeatureHighlight idx={2} iconUrl="/icons/features-auto-graph.svg" summary="Run arbitrarily Complex Logic">
                  <p>
                    Universal Compatibility Across EVM and Substrate Blockchains. Easily connect Phat Contracts to any blockchain without the need for a bridge, expanding your smart contract capabilities.
                  </p>
                </FeatureHighlight>
                <FeatureHighlight idx={3} iconUrl="/icons/features-rocket.svg" summary="Computation is always verifiable">
                  <p>
                    Universal Compatibility Across EVM and Substrate Blockchains. Easily connect Phat Contracts to any blockchain without the need for a bridge, expanding your smart contract capabilities.
                  </p>
                </FeatureHighlight>
              </div>
            </div>
          </div>
          <div className={cn("block rounded-5xl bg-gray-200 aspect-[834/782] relative overflow-hidden")}>
            <Image
              src="/home/features.jpg"
              fill
              sizes="100%"
              alt=""
              className="object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// END: Section Features

//
// Section Product Lines
//

function BlueprintCard({ title, children, illustration, live }: { title: string, children: ReactNode, illustration?: string, live?: boolean }) {
  return (
    <div className="w-full aspect-[526/270] bg-[#333] rounded-xl overflow-hidden bg-[rgba(0,0 0,0.8)] p-8 relative">
      <div className="flex flex-col justify-between h-full z-10 relative max-w-[60%]">
        <div className="flex flex-col gap-6">
          <h4 className={cn("text-2xl text-white font-black uppercase")}>{title}</h4>
          <div className={cn("text-base text-whiteAlpha-700 leading-normal")}>{children}</div>
        </div>
        {live ? (
          <div className={cn("flex flex-row items-center gap-3.5")}>
            <Image
              src="/icons/gear.svg"
              alt=""
              width={32}
              height={32}
              className={cn("svg-primary")}
            />
            <span className={cn("text-primary text-base font-extrabold")}>LIVE !</span>
          </div>
        ) : null}
      </div>
      {illustration ? (
        <Image
          src={illustration}
          alt=""
          width={250}
          height={250}
          className={cn("absolute top-[25%] right-[-1%] z-0 opacity-50")}
        />
      ) : null}
    </div>
  )
}

function BlueprintDetails({ idx, summary, live, children }: { idx: number, summary: string, live?: boolean, children: ReactNode }) {
  return (
    <Details className={cn("blueprint-details")} idx={idx}>
      <summary>{summary}</summary>
      <div className="body">
        {children}
      </div>
    </Details>
  )
}

function BentoCell({ children, className, ...props }: React.HTMLProps<HTMLDivElement>) {
  return (
    <div {...props} className={cn("rounded-xl bg-blackAlpha-800 p-6 w-56 h-56", className)}>
      {children}
    </div>
  )
}

function SectionProductLines() {
  return (
    <section>
      <div className="relative h-screen">
        <DotBackground dotColor="#E2E8F0" bgColor="#F7FAFC" />
        <div className={cn("absolute top-[33%] right-0 h-[57%] w-[67.45vw] bg-primary rounded-l-[48px] -z-[9]")} />
        <div className="safe-viewport flex flex-row items-center h-full gap-16">
          <header className={cn("flex flex-col gap-6 z-10 max-w-[50vw]")}>
            <div className={cn("text-[2.625rem]")}>FROM</div>
            <div>
              <h3 className={cn("text-[5.625rem] font-black text-white bg-black rounded-3xl inline-flex px-14")}>NO CODE</h3>
            </div>
            <div className={cn("flex flex-row gap-6 items-center -ml-24")}>
              <Image
                src="/icons/long-right-arrow.svg"
                className="svg-secondary"
                alt=""
                width={234}
                height={101}
              />
              <h3 className="text-[5.625rem] font-black text-white bg-black rounded-3xl inline-flex px-14">FULL CODE</h3>
            </div>
            <h4 className="text-[2.625rem] uppercase ml-[160px]">We got you <span className="font-black">covered</span>.</h4>
          </header>
          <div className="relative w-[300px] h-[420px]">
            <Image
              src="/home/experience-front.jpg"
              alt=""
              width={292}
              height={419}
              className="rounded-3xl overflow-hidden absolute left-[260px] top-[-100px] z-20"
            />
            <Image
              src="/home/experience-back.jpg"
              alt=""
              width={292}
              height={419}
              className="rounded-3xl overflow-hidden absolute left-0 top-[100px] z-10"
            />
          </div>
        </div>
      </div>
      {/* END: no code splash */}
      <div className="relative">
        <DotBackground dotColor="#6b3eca" bgColor="#7f4af0" />
        <div className="safe-viewport">
          <header className="pt-[27.78vh]">
            <h2 className="text-[3.5rem] font-black uppercase rounded-3xl px-14 bg-white inline-block">Accelerate</h2>
            <p className="font-medium text-[2rem] text-white mt-8 ml-28">Scale your idea with prebuilt blueprints in minutes</p>
          </header>
          <div className="mt-36 w-full flex flex-row justify-end">
            <div className="max-w-[64.58vw]">
              <div className={cn("rounded-3xl overflow-hidden flex flex-row bg-white")}>
                <div>
                  <Image
                    src="/home/bricks-screenshot.jpg"
                    width={879}
                    height={620}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between px-8 py-10 max-w-[18.75vw]">
                  <div>
                    <h4 className="text-3xl font-black mb-5">Pick</h4>
                    <div className="text-sm text-blackAlpha-700 leading-relaxed">
                      <p>Blueprints: </p>
                      <p>A evergrowing community driven marketplace of one-click deployable Phat Contracts to scale your DApp</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    <li>
                      <a href="#" className="btn bg-primary font-bold block border border-blackAlpha-100 border-solid">Pick</a>
                    </li>
                    <li>
                      <a href="#" className="btn block border border-blackAlpha-100 border-solid">Config</a>
                    </li>
                    <li>
                      <a href="#" className="btn block border border-blackAlpha-100 border-solid">Deploy</a>
                    </li>
                    <li>
                      <a href="#" className="btn block border border-blackAlpha-100 border-solid">Integrate</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <a href="" className="flex-row flex items-center text-white rounded-xl bg-[#6C37C9] py-5 px-10 max-w-[879px]">
                  <span className="text-lg font-bold uppercase">Get your own lens api oracle now</span>
                  <Image
                    src="/icons/right-arrow.svg"
                    alt=""
                    className="svg-white ml-5 inline-block"
                    width={24}
                    height={24}
                    />
                </a>
              </div>
            </div>
          </div>
          <div className={cn("bg-white rounded-3xl max-w-[75rem] p-16 mt-[170px]")}>
            <header className={cn("mb-16")}>
              <h3 className={cn("text-4xl text-blackAlpha-900 font-black uppercase")}>Explore all of our blueprints</h3>
              <p className={cn("text-xl text-blackAlpha-700")}>Vote on the blueprint you'd like to see next!</p>
            </header>
            <div className={cn("grid grid-cols-2 gap-5")}>
              <BlueprintCard
                title="Lens API Oracle"
                illustration="/home/blueprint-lens-api-oracle.png"
                live
              >
                Check if some file is actually stored on Arweave in your smart contract.
              </BlueprintCard>
              <BlueprintCard
                title="Lens Referral System"
              >
                Check if some file is actually stored on Arweave in your smart contract.
              </BlueprintCard>
              <BlueprintCard
                title="X-Chain Contract Read"
              >
                One-click deployable blueprint allows you to read the contract states from aonther EVM or Substrate blockchain.
              </BlueprintCard>
              <BlueprintCard
                title="Arweave Storage Proof"
              >
                Check if some file is actually stored on Arweave in your smart contract.
              </BlueprintCard>
              <BlueprintCard
                title="Lens Cross-post"
              >
                Post to multiple Web3 social networks.
              </BlueprintCard>
              <BlueprintCard
                title="Push Notification"
              >
                Check if some file is actually stored on Arweave is your smart contract.
              </BlueprintCard>
            </div>
            <a href="" className={cn("btn btn-lg bg-primary mt-10 text-lg font-bold uppercase flex flex-row items-center py-5 px-10")}>
              Learn about blueprints
              <Image
                src="/icons/right-arrow.svg"
                alt=""
                className="svg-black ml-5 inline-block"
                width={24}
                height={24}
                />
            </a>
          </div>
          <div className={cn("py-32 grid grid-cols-12 w-full")}>
            <div className="flex flex-col gap-10 col-span-7 col-start-6">
              <h3 className="uppercase text-white text-[56px] font-black">Inspire<br /> the next blueprint</h3>
              <div>
                <a href="" className="btn btn-xl bg-primary text-black uppercase">
                  Propose now
                  <Image
                    src="/icons/right-arrow.svg"
                    alt=""
                    className="svg-black ml-5"
                    width={16}
                    height={16}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END: blueprint list */}
      <div className="relative">
        <DotBackground dotColor="#afd153" bgColor="#d0f964" />
        <div className="safe-viewport">
          <div className={cn("pt-[245px] py-[156px] grid grid-cols-12")}>
            <header className={cn("col-span-6 col-start-3 flex flex-col items-center")}>
              <h2 className="text-[3.5rem] font-black uppercase rounded-3xl px-16 py-10 bg-white inline-block">Innovate</h2>
              <p className="font-medium text-[2rem] text-black mt-10">Scale your idea with prebuilt blueprints in minutes</p>
            </header>
          </div>
          <div className={cn("grid grid-cols-12")}>
            <div className={cn("col-span-10 rounded-3xl bg-white overflow-hidden px-20 py-14")}>
              <h4 className={cn("text-4xl font-black text-blackAlpha-900 uppercase max-w-[60%] text-center mx-auto")}>Access the unique functionalities in Phat Contract</h4>
              <div className={cn("py-14")}>
                <ul className="flex flex-row gap-2.5">
                  <li>
                    <button className="btn btn-lg bg-primary border border-solid border-primary text-black uppercase text-xs">Open a HTTP Request</button>
                  </li>
                  <li>
                    <button className="btn btn-lg bg-white border border-solid border-[#CBD5E0] text-blackAlpha-500 uppercase text-xs">Cross-Chain Integration</button>
                  </li>
                  <li>
                    <button className="btn btn-lg bg-white border border-solid border-[#CBD5E0] text-blackAlpha-500 uppercase text-xs">Off-Chain Rollup</button>
                  </li>
                  <li>
                    <button className="btn btn-lg bg-white border border-solid border-[#CBD5E0] text-blackAlpha-500 uppercase text-xs">Automation</button>
                  </li>
                  <li>
                    <button className="btn btn-lg bg-white border border-solid border-[#CBD5E0] text-blackAlpha-500 uppercase text-xs">Secret Management</button>
                  </li>
                  <li>
                    <button className="btn btn-lg bg-white border border-solid border-[#CBD5E0] text-blackAlpha-500 uppercase text-xs">High Performance Computation</button>
                  </li>
                </ul>
              </div>
              <div className={cn("grid grid-cols-12 gap-10")}>
                <div className={cn("col-span-8")}>
                  <div className="code-viewer">
                    <header className="flex flex-row justify-between items-center">
                      <div className={cn("flex flex-row gap-2.5")}>
                        <div className={cn("rounded-full bg-[#D9D9D9] w-4 h-4")} />
                        <div className={cn("rounded-full bg-[#D9D9D9] w-4 h-4")} />
                        <div className={cn("rounded-full bg-[#D9D9D9] w-4 h-4")} />
                      </div>
                      <button>
                        <Image
                          src="/icons/copy.svg"
                          width={24}
                          height={24}
                          alt=""
                          className="svg-gray-400"
                        />
                      </button>
                    </header>
                    <main className="py-8 px-0.5">
                      <pre className={cn("font-mono text-xs whitespace-pre-wrap")}>
{`function requestData() public returns (bytes32 requestId)
{ 
    Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector); 
    request.add("get", "https://my-api.com/endpoint"); 
    request.add("path", "status"); 
    return sendChainlinkRequestTo(oracle, request, fee);
}
function fulfill(bytes32 _requestId, uint256 _response) public 
recordChainlinkFulfillment(_requestId)
{
    response = _response;
}`}</pre>
                    </main>
                  </div>
                </div>
                <div className={cn("col-span-4 flex flex-col gap-5 h-full justify-center text-blackAlpha-700")}>
                  <p>With access to HTTP request, you unlock a whole new world of dAPP possibilities.</p> 
                  <p>HTTPs requests are sent from the secure environment so that nobody can manipulate the content or forge the request.</p>
                  <p>It enables direct operation to read & write to other blockchains as well as Web2 APIs.</p>
                </div>
              </div>
            </div>
            <div className={cn("col-span-10 flex flex-row justify-center mt-16 mb-36")}>
              <a href="" className="btn btn-lg bg-secondary text-white uppercase w-[21.67vw]">Docs</a>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-10 flex flex-row gap-6">
              <ul className={cn("max-w-md flex flex-col gap-5")}>
                <li>
                  <BlueprintDetails idx={1} summary="DEX Aggregator">
                    <p>Explain what are these usecases. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum</p>
                  </BlueprintDetails>
                </li>
                <li>
                  <BlueprintDetails idx={2} summary="Self-funded Oracles">
                    <p>Explain what are these usecases. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum</p>
                  </BlueprintDetails>
                </li>
                <li>
                  <BlueprintDetails idx={3} summary="Trading Bot">
                    <p>Explain what are these usecases. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum</p>
                  </BlueprintDetails>
                </li>
                <li>
                  <BlueprintDetails idx={4} summary="DAO-Controlled Web2 Services">
                    <p>Explain what are these usecases. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum</p>
                  </BlueprintDetails>
                </li>
                <div className={cn("flex-1 rounded-lg px-7 py-6 bg-secondary flex flex-row items-center justify-center gap-14")}>
                  <div>
                    <Image
                      src="/icons/excalmatory-mark.svg"
                      alt=""
                      width={50}
                      height={128}
                      className="svg-white"
                    />
                  </div>
                  <div className={cn("text-white font-black flex flex-col gap-6 leading-none")}>
                    <div className={cn("text-[3.5rem]")}>$50K</div>
                    <div className={cn("uppercase text-xl")}>for innovators</div>
                  </div>
                </div>
              </ul>
              <div className="flex-1">
                <div className={cn("rounded-3xl overflow-hidden bg-white")}>
                  <div className={cn("aspect-[946/487] bg-[#cecece]")}>
                  </div>
                  <div className={cn("px-12 py-8")}>
                    <header className={"flex flex-row gap-8 items-center"}>
                      <h3 className={cn("text-2xl font-black uppercase")}>DEX Aggregator</h3>
                      <ul className={cn("flex flex-row gap-4")}>
                        <li className={cn("text-secondary text-xs uppercase px-6 py-2.5 bg-gray-100 rounded-[6px]")}>Open A HTTP Request</li>
                        <li className={cn("text-secondary text-xs uppercase px-6 py-2.5 bg-gray-100 rounded-[6px]")}>Open A HTTP Request</li>
                      </ul>
                    </header>
                    <main className={cn("mt-6 mb-12 flex flex-col gap-2 text-base text-blackAlpha-700")}>
                      <p>Explain the architecture.</p>
                      <p>Aggregate DEXs and bridges from all kinds of blockchains together, enabling one-click cross-chain transfer. Ajfdksjk jfdkslaj jfkdlsaj k lfkdjsakl jdklsja fkd lkj fkdlsaj klj.</p>
                    </main>
                    <footer>
                      <a href="#" className={cn("btn bg-secondary text-white uppercase inline-flex flex-row justify-between px-5 py-3 w-[16rem]")}>
                        <span className={"text-lg font-bold"}>Try Now</span>
                        <Image
                          src="/icons/right-arrow.svg"
                          alt=""
                          width={16}
                          height={16}
                          className={cn("svg-white")}
                        />
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-10 col-start-4 mt-16 pl-12">
              <a href="" className="btn btn-xl bg-secondary text-white font-bold uppercase">Explore awesome-phat-contract</a>
            </div>
          </div>
          <div className="section-chat-with-us py-40">
            <header className={cn("text-5xl font-black uppercase leading-normal")}>
              <h3>Develop and explore<br /> your ideas with us</h3>
            </header>
            <div className="body">
              <ul>
                <li><Image src="/home/avatar-h4x.jpg" alt="Hang" fill /></li>
                <li><Image src="/home/avatar-shelven.jpg" alt="Shelven" fill /></li>
                <li><Image src="/home/avatar-dan.jpg" alt="Dan" fill /></li>
                <li><Image src="/home/avatar-zoe.jpg" alt="Zoe" fill /></li>
              </ul>
              <span className={cn("text-4xl font-normal leading-normal uppercase text-black")}>Chat Now!</span>
            </div>
          </div>
        </div>
      </div>
      {/* END: Code Examples */}
      <div className="relative pt-[210px] pb-[156px]">
        <DotBackground dotColor="#2b2b2b" bgColor="#333" />
        <div className="safe-viewport flex flex-col gap-32 items-center justify-center">
          <header className={cn("w-full flex flex-col items-end")}>
            <h2 className="text-[3.5rem] font-black uppercase rounded-3xl px-16 py-4 bg-white inline-block">Pionner</h2>
            <p className="font-medium text-[2rem] text-white mt-10">Work with us on cutting edge research</p>
          </header>
          <main className="flex flex-row gap-10">
            <div className={cn("grid grid-cols-6 grid-rows-8 gap-3 max-w-[44rem]", "text-white text-xl font-extrabold uppercase leading-normal")}>
              <BentoCell className="bento-trustless-mev">
                <h4>Trustless MEV</h4>
              </BentoCell>
              <BentoCell className="bento-sequencer-for-layer2">
                <h4>Sequencer For Layer2</h4>
              </BentoCell>
              <BentoCell className="bento-decentralized-scientific-computation">
                <h4>Decentralized Scientific Computation</h4>
              </BentoCell>
              <BentoCell className="bento-account-abstraction">
                <h4>Account Abstraction</h4>
              </BentoCell>
              <BentoCell className="bento-web3-ai">
                <h4>Web3 AI</h4>
              </BentoCell>
              <BentoCell className="bento-decentralized-api">
                <h4>Decentralized API</h4>
              </BentoCell>
              <a href="#" className={cn("bento-join-research-community", "rounded-xl bg-secondary p-6 w-56 h-56 flex flex-col gap-3.5")}>
                <span>Join research community</span>
                <div className={cn("rounded-full w-28 h-28 bg-gray-200")} />
              </a>
              <BentoCell className="bento-distributed-computation">
                <h4>Distributed Computation</h4>
              </BentoCell>
            </div>
            <div className="max-w-xl relative max-h-full">
              <h3 className="text-4xl text-white absolute left-4 -top-16">Areas of interest</h3>
              <div className={cn("bg-blackAlpha-500 rounded-5xl py-8 px-10 text-white")}>
                <div className={cn("flex flex-col justify-between")}>
                  <h4 className={cn("text-2xl font-black")}>Trustless MEV</h4>
                  <div className={cn("flex flex-col gap-2.5 leading-normal text-base pt-8 pb-10")}>
                    <p>
                      According to the Messari Report, 80% of the Ethereum blocks are built by MEV.
                    </p>
                    <p>
                      However, currently the MEV stack still depends on trusted service providers like Flashbot. A research direction is to use Secure Enclave (e.g. Intel SGX) to minimize the trust.
                    </p>
                    <p>
                      Phala Network is an offchain compute network powered by Secure Enclaves. It's possible to build the MEV core stack in Phala Network's technology to minimize the trust assuptions.
                    </p>
                  </div>
                </div>
                <div className={cn("border-t border-solid border-whiteAlpha-700 mt-4")}>
                  <h3 className={cn("text-2xl font-bold leading-normal py-8")}>We help you build your future.<br />Share your vision:</h3>
                  <form className="flex flex-col gap-2.5">
                    <div className="flex flex-row gap-2.5">
                      <input placeholder="Contact name" className="py-2.5 px-5 bg-transparent rounded-lg border border-solid border-whiteAlpha-500 flex-1" />
                      <input placeholder="nick@domain.ltd" className="py-2.5 px-5 bg-transparent rounded-lg border border-solid border-whiteAlpha-500 flex-1" />
                    </div>
                    <div>
                      <textarea className="py-2.5 px-5 bg-transparent rounded-lg border border-solid border-whiteAlpha-500 w-full" rows={6} />
                    </div>
                    <div className="flex flex-row justify-end">
                      <button type="submit" className="btn text-black bg-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

// END: Section Product Lines

//
// Section How It Works
//

function SectionHowItWorks() {
  return (
    <section className={cn("safe-viewport py-32")}>
      <h2 className="section-heading mb-16">
        How It Works
      </h2>
      <div>
        <div className={cn("w-full max-w-[85rem] mx-auto rounded-3xl aspect-[1360/760] bg-gray-200")} />
      </div>
      <div className={cn("pt-40 pb-16 w-full max-w-[85rem] mx-auto flex flex-row justify-between")}>
        <blockquote className="quote">
          <p>BY THE PEOPPLE.</p>
          <p>FOR THE PEOPLE.</p>
        </blockquote>
        <div className={cn("px-12 py-14 bg-gray-50 rounded-3xl max-w-[44.75rem]")}>
          <p className={cn("text-3xl font-normal leading-normal uppercase")}>A Decentralised compute cloud like no other.</p>
          <p className={cn("text-2xl font-black mb-4")}>Secured by</p>
          <div className={cn("flex flex-row gap-9")}>
            <Stats name="Computers">12,320</Stats>
            <Stats name="$PHA">12,320</Stats>
          </div>
        </div>
      </div>
      <div>
        <div className={cn("w-full max-w-[85rem] mx-auto rounded-3xl aspect-[1360/760] bg-gray-200")} />
      </div>
      <div className={cn("text-center pt-32")}>
        <a href="" className={cn("btn btn-lg bg-primary text-black uppercase")}>
          Provide Compute
        </a>
      </div>
    </section>
  )
}

// END: Section How It Works

//
// Section Highlights
//

function PostCard({ title, intro }: { title: string, intro: string }) {
  return (
    <article className="flex flex-col gap-6">
      <div className={cn("bg-gray-200 rounded-4xl w-full aspect-[8/5]")}>
      </div>
      <header className={cn("text-xl font-bold")}>{title}</header>
      <div>
        <p className={cn("text-sm")}>{intro}</p>
      </div>
    </article>
  )
}

function SectionHighlights() {
  return (
    <section className={cn("safe-viewport", "py-32")}>
      <h2 className="section-heading">Today's Highlights</h2>
      <div className={cn("grid grid-cols-3 gap-8")}>
        <PostCard
          title="Heading 1 - This is a heading that can stretch over two lines"
          intro="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
        />
        <PostCard
          title="Heading 1 - This is a heading that can stretch over two lines"
          intro="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
        />
        <PostCard
          title="Heading 1 - This is a heading that can stretch over two lines"
          intro="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
        />
      </div>
      <div className={cn("text-center pt-32")}>
        <a href="" className={cn("btn btn-lg bg-primary text-black uppercase")}>
          Discover More
        </a>
      </div>
    </section>
  )
}

// END: Section Highlights

//
// Section Subscription
//

function SectionSubscription() {
  return (
    <section className="section-subscription">
      <form className={cn("safe-viewport text-white py-16")}>
        <legend className={cn("mb-16 uppercase text-4xl font-black max-w-3xl")}>Get the latest Phala Content Straight To Your Inbox.</legend>
        <div className={cn("max-w-3xl flex flex-row gap-6")}>
          <input className={cn("flex-1 rounded border border-solid border-whiteAlpha-500 bg-transparent py-2.5 px-5")} />
          <button type="submit" className={cn("btn btn-lg bg-primary text-black uppercase")}>Subscribe Now</button>
        </div>
        <div className={cn("mt-6")}>
          <label>
            <input
              className={cn("mr-3")}
              type="checkbox"
            />
            Yes, I agree to receive email communications from Phala
          </label>
        </div>
      </form>
    </section>
  )
}

// END: Section Subscription

//
// Section Footer
//

function LinkListHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className={cn("uppercase font-black text-2xl mb-5")}>
      {children}
    </h4>
  )
}

function LinkList({ children }: { children: ReactNode }) {
  return (
    <ul className={cn("mb-10 flex flex-col gap-2.5")}>{children}</ul>
  )
}

function LinkListItem({ children, className, ...props }: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <li>
      <a {...props} className={cn(className, 'text-base text-white')}>
        {children}
      </a>
    </li>
  )
}

function SectionFooter() {
  return (
    <footer className={cn("bg-[#1c1c1c] text-white pt-16 pb-24 flex flex-col gap-20")}>
      <div className={cn("safe-viewport")}>
        {/* Row No.1 */}
        <div className={cn("grid grid-cols-4")}>
          <div>
            <div>
              <LinkListHeading>Developers</LinkListHeading>
              <LinkList>
                <LinkListItem href="">Docs</LinkListItem>
                <LinkListItem href="">GitHub</LinkListItem>
                <LinkListItem href="">Builders Program</LinkListItem>
                <LinkListItem href="">Using Blueprints</LinkListItem>
                <LinkListItem href="">Using Raw Phat Contract</LinkListItem>
                <LinkListItem href="">Tutorials</LinkListItem>
                <LinkListItem href="">Worker Operators</LinkListItem>
                <LinkListItem href="">Bug Bounty Program</LinkListItem>
              </LinkList>
            </div>
            <div>
              <LinkListHeading>Use Cases</LinkListHeading>
              <LinkList>
                <LinkListItem href="">Automation</LinkListItem>
                <LinkListItem href="">Oracles</LinkListItem>
                <LinkListItem href="">Data Encryption</LinkListItem>
              </LinkList>
            </div>
          </div>
          <div>
            <div>
              <LinkListHeading>Blueprints</LinkListHeading>
              <LinkList>
                <LinkListItem href="">Lens API Oracle</LinkListItem>
              </LinkList>
            </div>
            <div>
              <LinkListHeading>Resources</LinkListHeading>
              <LinkList>
                <LinkListItem href="">Whitepaper</LinkListItem>
                <LinkListItem href="">Case Studies</LinkListItem>
                <LinkListItem href="">Blog</LinkListItem>
                <LinkListItem href="">Staking</LinkListItem>
                <LinkListItem href="">FAQs</LinkListItem>
                <LinkListItem href="">Tokenomics</LinkListItem>
                <LinkListItem href="">What is Phala Network?</LinkListItem>
                <LinkListItem href="">What is Phat Contract?</LinkListItem>
                <LinkListItem href="">What are Blueprints?</LinkListItem>
              </LinkList>
            </div>
          </div>
          <div>
            <div>
              <LinkListHeading>Hashforest</LinkListHeading>
              <LinkList>
                <LinkListItem href="">Team</LinkListItem>
                <LinkListItem href="">Careers</LinkListItem>
                <LinkListItem href="">Brand Assets</LinkListItem>
              </LinkList>
            </div>
            <div>
              <LinkListHeading>Community</LinkListHeading>
              <LinkList>
                <LinkListItem href="">Events</LinkListItem>
                <LinkListItem href="">Become an Ambassador</LinkListItem>
              </LinkList>
            </div>
          </div>
          <div>
            <div>
              <LinkListHeading>Social</LinkListHeading>
              <LinkList>
                <LinkListItem href="">Twitter</LinkListItem>
                <LinkListItem href="">Discord</LinkListItem>
                <LinkListItem href="">Telegram</LinkListItem>
                <LinkListItem href="">YouTube</LinkListItem>
                <LinkListItem href="">Lenster</LinkListItem>
                <LinkListItem href="">Lenstube</LinkListItem>
              </LinkList>
            </div>
          </div>
        </div>
        {/* Row No.2 */}
        <div className={cn("flex flex-row items-center justify-between")}>
          <Image
            src="/logo.svg"
            alt="Phala Logo"
            className="svg-white"
            width={156}
            height={44}
            priority
          />
          <div className={cn("uppercase flex flex-row gap-36 text-base font-semibold")}>
            <a href="">EN</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
            <a href="">Responsible Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// END: Section Footer

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionFeatures />
      <SectionProductLines />
      <SectionHowItWorks />
      <SectionHighlights />
      <SectionSubscription />
      <SectionFooter />
    </>
  )
}
