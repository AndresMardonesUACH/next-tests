import { NextResponse } from "next/server";

export const tests = 
    [
        {subjectId:"BAIN083", subjectName:"Cálculo En Varias Variables", testDate: "08 29, 2023 17:30:00 GMT -03:00"},
        {subjectId:"BAIN083", subjectName:"Cálculo En Varias Variables", testDate:"10 03, 2023 17:30:00 GMT -03:00"},
        {subjectId:"INFO099", subjectName:"Estructura Discretas", testDate:"11 23, 2023 09:50:00 GMT -03:00"},
        {subjectId:"INFO099", subjectName:"Estructura Discretas", testDate:"10 17, 2023 09:50:00 GMT -03:00"},
        {subjectId:"BAIN087", subjectName:"Métodos Numéricos", testDate:"09 13, 2023 17:30:00 GMT -03:00"},
        {subjectId:"BAIN087", subjectName:"Métodos Numéricos", testDate:"10 25, 2023 17:30:00 GMT -03:00"},
        {subjectId:"BAIN085", subjectName:"Física: Ondas y Electromagnetismo", testDate:"10 18, 2023 17:30:00 GMT -03:00"},
        {subjectId:"BAIN091", subjectName:"Probabilidad y estadística", testDate:"10 13, 2023 17:30:00 GMT -03:00"},
        {subjectId:"BAIN091", subjectName:"Probabilidad y estadística", testDate:"11 10, 2023 17:30:00 GMT -03:00"},
        {subjectId:"INFO090", subjectName:"Programación orientada a objetos", testDate:"10 19, 2023 09:50:00 GMT -03:00"},
    ]

export async function GET() {
  return new NextResponse.json(tests);
}
