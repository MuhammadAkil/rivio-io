import React from 'react'

export default function VideoSection() {
    return (
        <>
            <div className="bg-[#000000] text-white py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col items-center md:items-start md:max-w-md">

                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:max-w-3xl">
                        <span className="font-bold text-white block sm:inline"> Get a quick</span>
                        <span className="text-[#00D11F]  font-bold block sm:inline"> overview of Rivio in action</span>
                        
                    </h1>



                        <p className="text-gray-400 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod mauris ut enim mollis,
                            a dictum magna pretium. Integer tincidunt, metus et ultricies faucibus, sem enim sollicitudin quam.
                        </p>
                        <button className="mt-6 bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-3 rounded-md">
                            Watch Now
                        </button>
                    </div>

                    <div className="bg-[#0A1B0C] border border-transparent hover:border-[#01C41D] shadow-lg rounded-lg p-4 flex justify-center items-center">
                        <div className="relative w-full h-56 md:h-72 rounded-lg overflow-hidden">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                // src="https://www.youtube.com/embed/VIDEO_ID"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>


                </div>
            </div>



        </>
    )
}
