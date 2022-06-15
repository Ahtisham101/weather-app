import React from 'react'
interface Props {
    title: string;
    num: number;
    desc: string;
    children: React.ReactNode
  }
export const LargeCard = ({title,num,desc,children}:Props) => {
  return (
    <div className="bg-darkblue py-7 px-10 flex flex-col items-center justify-between space-y-4">
    <p>{title}</p>
    <h2 className="text-6xl font-bold">
      {num}
      <span className="text-4xl font-normal">{desc}</span>
    </h2>
    {children}
  </div>
  )
}
