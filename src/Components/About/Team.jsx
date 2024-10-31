import team1 from "../../assets/team1.png"
import team2 from "../../assets/team2.png"
import team3 from "../../assets/team3.png"
import team4 from "../../assets/team4.png"
import team5 from "../../assets/team5.png"
import orbitBg from "../../assets/orbitBg.png"
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {

    const teamData = [
        {
            img: team1,
            role: "COO & CFO",
            name: "Iwona Matwiejew ",
            text: "   Over 20 years of experience in cross-border commodities investments in Europe and Asia. Financial expert in wealth funds, specializing in AML, blockchain, and cryptocurrency regulations."
        },
        {
            img: team2,
            role: "CEO",
            name: "Erminio Brambilla ",
            text: "   Expert entrepreneur in real estate and finance, specializing in non-performing loans (NPL). 30+ years as CEO and CMO in financial leasing, corporate consulting, and real estate restructuring."
        },
        {
            img: team3,
            role: "CTO",
            name: "Gjon Radovani",
            text: "   International architect and art curator, founder of architecture studios in Stuttgart and Tirana. Led major projects in Europe, Africa, and Latin America. Former Deputy Minister for Urban Development in Albania."
        },
        {
            img: team4,
            role: "HR Manager",
            name: "Ivano Tonoli",
            text: "   Entrepreneur with over 20 years in digital solutions for mobile, banking, and credit sectors, and founder of several financial associations."
        },
        {
            img: team5,
            role: "CSO",
            name: "Carlo Corrubolo",
            text: "   20+ years in international companies as a Credit Manager in technology and innovation sectors. Specialist in business and IT processes, financial consulting, and administration."
        },
    ]

    return (
        <div className='flex items-center justify-center flex-col text-white my-5'>

            <div
                className='w-full h-[400px] bg-no-repeat bg-cover bg-center ex items-center justify-center text-white flex flex-col'
                style={{ backgroundImage: `url(${orbitBg})` }}
            >

                <p className='text-center font-conthrax text-4xl md:w-[70%]' data-aos="fade-up" data-aos-delay="200">Bringing <span className='text-[#2DBDC5]' >Real World Compliance </span>  seamlessly on-chain</p>
                <p data-aos="fade-up" data-aos-delay="500" className='mt-4 md:w-[40%] text-[#ADADAD] text-center'>Urano Ecosystem sp z.o.o, Grudziadz (PI), NIP 8762504246 - has been entered into the Register of Virtual Currency Activities maintained by the Director of the Fiscal Administration Chamber in Katowice on 10 may 2023 under the number RDWW-746.</p>
            </div>



            <h1 className='mt-[100px] font-conthrax heading' data-aos="fade-up" >The Team</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8 w-[90%] lg:max-w-[1300px] my-[50px]' data-aos="fade-up" data-aos-delay="400">
                {teamData.map((data, index) => {
                    return (
                        <div className={`lg:w-[100%] py-3 pt-[40px] pb-[20px] px-3 rounded-2xl flex flex-col items-center justify-start gap-2 border-[2px] border-[#27292b] bg-[#161616] bg-opacity-50 ${index === 3 ? "lg:ml-[180px]" : index === 4 ? "lg:ml-[180px]" : ""}`} key={index}>
                            <div className='w-[108px] h-[108px] relative rounded-full bg-white'>
                                <div className='w-[108px] h-[108px] rounded-full overflow-hidden'>
                                    <img src={data.img} alt={`${data.name}'s profile`} className='w-full h-full object-cover' />

                                </div>
                                <div className='absolute top-0 right-0 w-[27px] h-[27px] bg-black rounded-full flex items-center justify-center z-50 border border-[#27292b]'>
                                    <FaLinkedinIn className='text-white' />
                                </div>
                            </div>
                            <p className='mt-2'>{data.role}</p>
                            <p className='text-md font-conthrax'>{data.name}</p>
                            <p className='text-sm textColor text-center w-[83%]'>{data.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Team