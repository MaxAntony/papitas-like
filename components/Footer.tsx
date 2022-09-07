import { FC } from "react";

const year = new Date()

export const Footer: FC = () => {
  return (
    <footer className="flex justify-center bg-gray-200 p-4">
      <p>© {year.getFullYear()} Papitas Like</p>
    </footer>
  )
}
