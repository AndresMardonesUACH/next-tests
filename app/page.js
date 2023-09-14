import Test from '@/app/components/Test.js'

async function getData(){
  const arreglo = await import("@/app/api/route", { method: "GET" });
  return arreglo.tests;
}

function testSort(test){

  test = test.filter(i => Date.parse(i.testDate) - Date.parse(Date().toLocaleString("es-CL")) > 0)

  for (var i = 0; i < test.length; i++) {
    for (var j = 0; j < (test.length - i - 1); j++) {
        if (Date.parse(test[j].testDate) > Date.parse(test[j + 1].testDate)) {
            var temp = test[j]
            test[j] = test[j + 1]
            test[j + 1] = temp
        }
    }
  }
  
  return test;
};

export default async function Home() {
  let data = await getData()
  data = testSort(data)

  return (
    <div className='contenedor'>
      <header className='header'>
        <h1>SENTENCIA DE MUERTE</h1>
      </header>

      <section className='main'>

        {data.map((prueba) =>  {
            const id = prueba?.subjectId || "-";
            const nombre = prueba?.subjectName || "-";  
            const fecha = prueba?.testDate || "-"
            return <Test subjectId={id} subjectName={nombre} testDate={fecha} />;
          })} 

      </section>

      <footer className='footer'>
        <p>
          Desarrollado por Martín Alvarado, Isaías Cabrera, Osvaldo Casas-Cordero, Andrés Mardones, INFO104
        </p>
      </footer>


    </div>
  )
}
