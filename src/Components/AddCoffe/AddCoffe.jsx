

const AddCoffe = () => {
    return (
        <div className=" mx-8 my-10 p-10 bg-[#F4F3F0]">
            <div className=" justify-center mb-8">
                <h2 className="rancho text-4xl text-center text-[rgb(55,65,81)] mb-6 ">Add New Coffe </h2>
                <p className="raleway text-l text-center text-[#1B1A1AB3] "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veritatis architecto minima quo praesentium officiis est pariatur totam, aspernatur eaque iusto, ipsam nemo sequi alias porro magnam iure sunt, non saepe quidem explicabo? At quam illum labore odit asperiores illo id enim, voluptatem similique amet adipisci doloremque quis ut unde vel mollitia, consequatur non. Officia alias obcaecati odio eum, consectetur numquam cum laudantium hic, nemo debitis tenetur quo velit dolorum!</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-2 w-full border-2 gap-10 justify-between">
                <div className="w-full ">
                    <div className=" w-full  mb-2 ">
                        <p className="text-[#1B1A1ACC] text-lg mb-1">Name</p>
                    <input type="text" placeholder="Type here" className="input  w-full    bg-[#FFFFFF] " />
                    </div>
                    <div className=" w-full mb-2">
                        <p className="text-[#1B1A1ACC] text-lg mb-1">Name</p>
                    <input type="text" placeholder="Type here" className="input  w-full    bg-[#FFFFFF] " />
                    </div>
                    <div className=" w-full mb-2">
                        <p className="text-[#1B1A1ACC] text-lg mb-1">Name</p>
                    <input type="text" placeholder="Type here" className="input  w-full   
                     bg-[#FFFFFF] " />
                    </div>
                </div>
                <div className="w-full">
                    <div className=" w-full mb-2">
                        <p className="text-[#1B1A1ACC] text-lg mb-1">Name</p>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full    bg-[#FFFFFF] " />
                    </div>
                    <div className=" w-full mb-2">
                        <p className="text-[#1B1A1ACC] text-lg mb-1">Name</p>
                    <input type="text" placeholder="Type here" className="input    w-full    bg-[#FFFFFF] " />
                    </div>
                    <div className=" w-full mb-2">
                        <p className="text-[#1B1A1ACC] text-lg mb-1">Name</p>
                    <input type="text" placeholder="Type here" className="input w-full    bg-[#FFFFFF] " />
                    </div>
                </div>
            </div>
            <div>
            <div className=" w-full  mb-2 ">
                        <p className="text-[#1B1A1ACC] text-lg mb-1">Name</p>
                    <input type="text" placeholder="Type here" className="input  w-full    bg-[#FFFFFF] " />
                    <input className="w-full bg-[#D2B48C] rancho text-2xl p-2 text-[#331A15] border-black hover:bg-[#7C4700] rounded-lg mt-4" type="submit" value="Add Coffe" />
                    </div> 
            </div>
        </div>
    );
};

export default AddCoffe;