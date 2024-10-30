import { MdKeyboardArrowRight } from "react-icons/md";

const Table = () => {
  const tableData = [
    { description: "Seed Round", totalTokens: "16,000,000", totalSupply: "8.00%", roundPrice: "$0.025", targetRaise: "$400,000", cliff: "3", vesting: "16", tgeUnlock: "7.0%", tokenUnlockTge: "1,120,000", fdy: "$5,000,000" },
    { description: "Private Round", totalTokens: "16,000,000", totalSupply: "8.00%", roundPrice: "$0.0325", targetRaise: "$520,000", cliff: "2", vesting: "15", tgeUnlock: "8.5%", tokenUnlockTge: "1,360,000", fdy: "$6,500,000" },
    { description: "Institutional Round", totalTokens: "5,000,000", totalSupply: "2.50%", roundPrice: "$0.03", targetRaise: "$15,000", cliff: "2", vesting: "10", tgeUnlock: "10.0%", tokenUnlockTge: "5,00,000", fdy: "$6,000,000" },
    { description: "Public Round", totalTokens: "10,000,000", totalSupply: "5.00%", roundPrice: "$0.045", targetRaise: "$450,000", cliff: "1", vesting: "8", tgeUnlock: "12.5%", tokenUnlockTge: "1,250,000", fdy: "$9,000,000" },
    { description: "Team", totalTokens: "-", totalSupply: "15.00%", roundPrice: "-", targetRaise: "-", cliff: "9", vesting: "25", tgeUnlock: "0", tokenUnlockTge: "0%", fdy: "-" },
    { description: "Advisors", totalTokens: "10,000,000", totalSupply: "5.00%", roundPrice: "-", targetRaise: "-", cliff: "6", vesting: "15", tgeUnlock: "0", tokenUnlockTge: "-", fdy: "-" },
    { description: "Staking/treasury", totalTokens: "53,000,000", totalSupply: "26.00%", roundPrice: "-", targetRaise: "-", cliff: "0", vesting: "48", tgeUnlock: "7.0%", tokenUnlockTge: "3,710,000", fdy: "-" },
    { description: "Marketing", totalTokens: "30,000,000", totalSupply: "15.00%", roundPrice: "-", targetRaise: "-", cliff: "5", vesting: "25", tgeUnlock: "0%", tokenUnlockTge: "0", fdy: "-" },
    { description: "AMM LP/CEX", totalTokens: "30,000,000", totalSupply: "15.00%", roundPrice: "-", targetRaise: "-", cliff: "0", vesting: "5", tgeUnlock: "25%", tokenUnlockTge: "7,500,000", fdy: "-" },
    { description: "OverAll", totalTokens: "200,000,000", totalSupply: "100%", roundPrice: "-", targetRaise: "-", cliff: "-", vesting: "-", tgeUnlock: "7.72%", tokenUnlockTge: "-", fdy: "-" },
  ];
  return (
    <div className='w-[80%] lg:max-w-[1200px] mt-4 flex flex-col items-center justify-center' data-aos="fade-up">
      <p className='font-conthrax heading text-center'>Tokenomics</p>
      <div className='w-full overflow-x-auto' style={{ overflowX: 'auto !important' }}>
        <div className="border-[1px] border-[#27292b] rounded-xl overflow-hidden my-5 min-w-[600px]">
          <table className="w-full ">
            <thead>
              <tr className="bg-[#0f0f0f]">
                <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Description</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Total Tokens</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Total Supply</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Round Price</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Target Raise</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Cliff</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Vesting</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">TGE Unlock</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Token Unlock TGE</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">FDY</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tableData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-[#2A4E52]' : 'bg-[#5CABB3]'}>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">{row.description}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">{row.totalTokens}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">{row.totalSupply}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">{row.roundPrice}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">{row.targetRaise}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">{row.cliff}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">{row.vesting}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">{row.tgeUnlock}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">{row.tokenUnlockTge}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">{row.fdy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button className='btnColor w-[220px] py-2 rounded-lg flex flex-row items-center justify-center mb-[100px] font-[500]'>Access Full Tokenomics <MdKeyboardArrowRight /></button>

    </div>
  )
}

export default Table