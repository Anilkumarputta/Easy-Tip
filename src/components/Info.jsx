import React from 'react'

const Info = ({ title, value }) => {
    return (
        <div className="flex mb-[1rem] items-center">
            <div className="w-[50%]">
                <p className="text-dark-cyan dark:text-light-cyan font-medium">{title}</p>
                <p className="text-grayish-cyan dark:text-gray-300 text-xs">/ person</p>
            </div>
            <div className="w-[50%]">
                <p className="text-strong-purple dark:text-white text-3xl text-right font-semibold">
                    ${value}
                </p>
            </div>
        </div>
    )
}

export default Info