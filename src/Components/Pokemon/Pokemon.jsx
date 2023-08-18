import React from "react";

export default function Pokemon({ id,name, imageURL, types, weight, move1, move2, move3,move4, height,
}) {
  return (
    <>
    <div className="p-4 md:w-1/5 w-[350px]">
        <div className=" border-gray-200 border-opacity-60 rounded-lg overflow-hidden h-96 shadow-[0_20px_50px_rgba(6,_2,_143,_0.2)] border-2 hover:bg-purple-200 cursor-pointer hover:text-purple-900 delay-550 w-55">
        <h1 className="title-font text-lg font-medium text-gray-900 my-5 tracking-[8px]">{name.toUpperCase()}</h1>
          <img className=" w-full h-32 p-3  object-fit object-center border-b-2" src={imageURL} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">Type:{types}</h2>
           

            <p className="mb-2 ">
                <span className="font-semibold">Moves :</span> {move1}, {move2}, {move3},{move4}
            </p>
<span>
<span className="font-semibold">Weight : </span>{weight/10} Kg
<span className="font-semibold"> Height : </span>{(height*10)/100} m
</span>
            </div>
          </div>
        </div>
     
   
    </>
  )
}
