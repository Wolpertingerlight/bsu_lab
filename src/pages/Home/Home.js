import "./Home.css"

function Home() {
    return (
        <div className={"quests"}>
            <h2>Список задач:</h2>
            <div className={"quest"}>
                <h4 className={"questTitle"}>Задание №1</h4>
                <p className={"questDesc"}>Калькулятор математический выражений.</p>
            </div>
            <div className={"quest"}>
                <h4 className={"questTitle"}>Задание №2</h4>
                <p className={"questDesc"}>Слайдшоу из нескольких картинок.</p>
            </div>
            <div className={"quest"}>
                <div className={"quest"}>
                    <h4 className={"questTitle"}>Задание №3</h4>
                    <p className={"questDesc"}>Напишите сценарий перемещения цветного квадрата по кругу. Траекторию удобно описывать
                        параметрическими уравнениями: y = R * sin(t), y = R * cos(t), где R - радиус круга, 0 ≤ t ≤ 2Π.
                        Квадратом может служить контейнер div с цветным фоном.</p>
                </div>
            </div>
            <div className={"quest"}>
                <h4 className={"questTitle"}>Задание №4</h4>
                <p className={"questDesc"}>Создайте "карусель". Возьмите пять картинок, разместите их по кругу. Внизу две кнопки - "Запустить
                    карусель" и "Остановить карусель"! При запуске карусели картинки меняются местами по часовой
                    стрелке, создавая эффект вращения.</p>
            </div>
            <div className={"quest"}>
                <h4 className={"questTitle"}>Задание №5</h4>
                <p className={"questDesc"}>Написать функционал корзины интернет магазина. Требования: корзина должна быть описана как объект со
                    своими свойствами (список товаров, которые уже в корзине, кол-во товаров в корзине) и методами
                    (добавление нового товара в корзину, удаление товара из корзины, подсчет общей суммы стоимости
                    товаров).</p>
            </div>
        </div>
    )
}

export default Home;