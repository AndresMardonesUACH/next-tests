"use client";
import { useState, useEffect } from "react";

function format(fechaPrueba){
    const num = fechaPrueba - Date.parse(Date().toLocaleString("es-CL")) ;
    if (num < 0){
      return (0 +" Días " + 0 + " : " + 0 +" : "+ 0);
    }
    else{
      const dias = num/(24*60*60*1000);
      const horas = (dias - parseInt(dias))*24;
      const minutos = (horas-parseInt(horas))*60;
      const segundos = (minutos-parseInt(minutos))*60;

    return (parseInt(dias) +" Días " + parseInt(horas) + " : " + parseInt(minutos) +" : "+ parseInt(segundos))
    }

}


export default function Test(props) {
  const formato = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

    const [fecha, setFecha] = useState("");
    const { subjectId, subjectName, testDate } = props;
    const [color, setColor] = useState("testDate")

    useEffect(() => {
      async function fechaActual() {
        setFecha(format(Date.parse(testDate)));
      }
      const intervalo = setInterval(fechaActual, 1000);
      return () => clearInterval(intervalo);
    }, []);

    useEffect(() => {
      if (Date.parse(testDate) - Date.parse(Date().toLocaleString("es-CL")) < 604800000) {
        setColor("testDate2");
      }
    }, [fecha]);
  


    return (
      <div className="contenedor-prueba">
        <div className="subjectId">
            {subjectId}
        </div>
        <div className="subjectName">
            {subjectName}
        </div>
        <div className={color}>
            {fecha}
        </div>
      </div>
    );
  }