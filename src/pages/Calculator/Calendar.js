import { useState } from 'react';

 function Calendar() {
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(message);

     const colors = ["белый", "белый", "голубой", "голубой", "зеленый", "зеленый", "красный", "красный", "желтый",
         "желтый"];
     const animals = ["обезьяна", "петух", "собака", "свинья", "крыса", "бык", "тигр", "заяц", "дракон", "змея",
         "лошадь", "коза"];

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        setUpdated(message);
    };

    return (
        <div>
            <h1>Введите год</h1>
            <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                value={message}
            />
            <button onClick={handleClick}>Узнать!</button>


            <h2>Год: {updated}</h2>
            <h2>Цвет года: {colors[updated % 10]}</h2>
            <h2> Животное года: {animals[updated % 12]}</h2>
           <img src={`images/${animals[updated % 12]}.jpg`}/>
        </div>
    );
}
export default Calendar;