import React from "react";

const Card = (props) => {
    const { name, blood_group, id, academic_year, profile_photo } =
        props.student;

    return (
        <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                {profile_photo ? (
                    <img
                        src={`/storage/${profile_photo}`}
                        alt=""
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                ) : (
                    <img src="./logo.png" alt="" className="w-full" />
                )}
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={route("single.student", { student: id })}>
                            <span aria-hidden="true" className=" inset-0" />
                            {name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{blood_group}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                    {academic_year}
                </p>
            </div>
        </div>
    );
};

export default Card;
