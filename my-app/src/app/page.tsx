'use server'

import App from "./App.jsx";
import { prisma } from "../lib/prisma";
import './index.css'


export async function removeEntry(remID: number){ 
  await prisma.task.delete({ where: {id: remID}, }); 
}
export async function addEntry(newName: string, isS1: boolean){ 
  const newEntry = await prisma.task.create({
    data: {
      name: newName,
      pageIsS1: isS1,
      isComplete: false,
    },
    select: { id: true },
  });
  return newEntry.id;
}
export async function toggleComplete(togID: number, comp: boolean){
  await prisma.task.update({ where: { id: togID }, data: { isComplete: comp } });
}

export default async function Home() {
  const initList1 = await prisma.task.findMany({
    where: { pageIsS1: true },
    select: {id: true, name: true, isComplete: true},
  });
  const initList2 = await prisma.task.findMany({
    where: { pageIsS1: false },
    select: {id: true, name: true, isComplete: true},
  });

  return (
    <>
      <App initS1={initList1} initS2={initList2}></App>
    </>
  );
}