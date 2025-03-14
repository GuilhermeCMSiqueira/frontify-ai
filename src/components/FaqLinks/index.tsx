import React from 'react'

const FaqLinks = () => {
  return (
    <ul className="flex flex-col gap-5">
        <li>
            <p className="font-montserrat text-justify text-black">✰ HTML</p>
            <a href="https://www.w3schools.com/html/" className="font-montserrat text-justify text-gray-500 text-xs pl-4 underline">https://www.w3schools.com/html/</a>
        </li>
        <li>
            <p className="font-montserrat text-justify text-black">✰ CSS</p>
            <a href="https://www.w3schools.com/css/" className="font-montserrat text-justify text-gray-500 text-xs pl-4 underline">https://www.w3schools.com/css/</a>
        </li>
        <li>
            <p className="font-montserrat text-justify text-black">✰ Tailwind</p>
            <a href="https://tailwindcss.com/" className="font-montserrat text-justify text-gray-500 text-xs pl-4 underline">https://tailwindcss.com/</a>
        </li>
        <li>
            <p className="font-montserrat text-justify text-black">✰ NextJS</p>
            <a href="https://nextjs.org/" className="font-montserrat text-justify text-gray-500 text-xs pl-4 underline">https://nextjs.org/</a>
        </li>
        <li>
            <p className="font-montserrat text-justify text-black">✰ React</p>
            <a href="https://react.dev/" className="font-montserrat text-justify text-gray-500 text-xs pl-4 underline">https://react.dev/</a>
        </li>
        <li>
            <p className="font-montserrat text-justify text-black">✰ Angular</p>
            <a href="https://angular.dev/" className="font-montserrat text-justify text-gray-500 text-xs pl-4 underline">https://angular.dev/</a>
        </li>
        <li>
            <p className="font-montserrat text-justify text-black">✰ Vue</p>
            <a href="https://vuejs.org/" className="font-montserrat text-justify text-gray-500 text-xs pl-4 underline">https://vuejs.org/</a>
        </li>
        
    </ul>
  )
}

export default FaqLinks
