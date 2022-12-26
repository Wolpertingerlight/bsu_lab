import "./Culture.css"
import {useState} from "react";

const Culture = ({slides}) => {
    const [monument, setMonument] = useState(" ");
    const [city, setCity] = useState(" ");
    const [result, setResult] = useState(0);





    const handleChangeCity = event => {

        setCity(event.target.value);
        if(monument===event.target.value)
            setResult(result+1);
        console.log(result);
    };

    const handleChangeMonument = event => {

        setMonument(event.target.value);
        if(city===event.target.value)
            setResult(result+1);
        // console.log(result);
    };



return (
        <div>


            <h3>Города и памятники</h3>

                <table>
                    <tr><th>Памятник</th><th>Находится в городе</th></tr>
                    <tr>
                        <td>
                        <select name="question"
                                defaultValue={"Monument"}
                                onChange={handleChangeMonument}>
                            <option value="mad">Myзeй Прадо</option>
                            <option value="ber" >Рейхстаг</option>
                            <option value="mil">Оперный театр Ла Скала</option>
                            <option value="ier">Cтeнa Плача</option>
                            <option value="mek">Священный камень Кааб</option>
                            <option value="spb">Медный Всадник</option>
                            <option value="mos">Третьяковская галерея</option>
                            <option value="par">Tpиyмфaльнaя Арка</option>
                            <option value="new">Статуя Свободы</option>
                            <option value="lon">Tayэp</option>
                        </select>
                    </td>

                    <td>
                        <select
                            defaultValue={"City"}
                            onChange={handleChangeCity}>
                            <option value="spb">Caнкт-петербург</option>
                            <option value="mos">Mocква</option>
                            <option value="mek">Meккa</option>
                            <option value="ier">Иepycaлим</option>
                            <option value="mil">Милан</option>
                            <option value="par">Пapиж</option>
                            <option value="mad">Мадрид</option>
                            <option value="lon">Лoндoн</option>
                            <option value="new">Нью-Йорк</option>
                            <option value="ber">Бepлин</option>
                        </select>

                    </td>
                    </tr>
                </table>

            {/*<p>{monument} {city}</p>*/}



                  Количество правильных ответов: <label>{result}</label>






            </div>

    )
}

export default Culture;