import foto from "./assets/photo.jpg"

function App() {

  return (
    <>
      <div className="md:flex items-center justify-center mt-5">
        <div className="bg-blue-900 md:w-1/8 p-10 h-auto">
          <div className="flex items-center justify-center mb-10">
            <img src={foto} alt=""
              className="rounded-full w-32 border-2 border-gray-300" />
          </div>
          <h1 className="text-orange-300 uppercase mb-[20px] tracking-widest text-center font-bold">СКОРОДИНСЬКИЙ ВОЛОДИМИР</h1>
          <h1 className="text-gray-400 uppercase tracking-widest text-lg font-bold">МІСТО</h1>
          <hr className="w-[67px] mb-5" />
          <h1 className="text-gray-400 text-sm">Kyiv, Ukraine</h1>
          <hr className="my-5" />
          <h1 className="text-gray-400 mt-2 uppercase tracking-widest text-lg font-bold">ОСВІТА</h1>
          <hr className="w-[75px] mb-5" />
          <h1 className="text-gray-400 text-sm">Закінчив школу з золотою медаллю</h1>
          <h1 className="text-gray-500 text-sm"><span className="italic">Kyiv International School</span>, <span
              className="text-gray-400 font-semibold italic">Kyiv</span> / 2006-2017</h1>
          <br />
          <h1 className="text-gray-400 text-sm">Закінчив IT школу з відзнакою</h1>
          <h1 className="text-gray-500 text-sm"><span className="italic">IT STEP school</span>, <span
              className="text-gray-400 font-semibold italic">Kyiv</span> / 2015-2017</h1>
          <hr className="my-5" />
          
        </div>
        <div className="bg-white md:w-7/12 p-10 h-auto">
          <h1 className="font-semibold uppercase tracking-wider my-6 text-gray-500">ПРО МЕНЕ</h1>
          <h1 className="text-gray-500">Освічений та досвідчений кіберполіцейський з більш ніж 5-річним досвідом роботи в області кібербезпеки та цифрової детективної роботи. Відомий як експерт у виявленні та розслідуванні кіберзлочинів та застосуванні цифрових методів збору доказів.</h1>
          <h1 className="font-semibold uppercase tracking-wider my-6 text-gray-500">ДОСВІД роботи</h1>
          <h1 className="text-gray-600 font-semibold">Департамент Кіберполіції (2018-зараз)</h1>
          <ul className="list-disc ml-5 text-gray-500">
            <li>Проведення кібердетективної роботи та розслідування кіберзлочинів.</li>
            <li>Виявлення та аналіз доказів з використанням цифрових інструментів.</li>
            <li>Співпраця зі спеціалістами з інших державних органів та компаній з метою розслідування кіберзлочинів.</li>
          </ul>
          <h1 className="font-semibold uppercase tracking-wider my-6 text-gray-500">НАВИЧКИ</h1>
          <ul className="list-disc ml-5 text-gray-500">
            <li>Глибокі знання в галузі комп'ютерної безпеки та кібербезпеки.</li>
            <li>Досвід роботи з різними операційними системами та програмним забезпеченням.</li>
            <li>Вміння проводити аналіз кіберзагроз та надавати рекомендації<br/> щодо їх запобігання</li>
            <li>Знання Darknet</li>
            <li>Tor</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
