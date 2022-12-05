import "./Home.css"
import {CCard, CCardBody, CCardHeader, CCardText} from "@coreui/react";

function Home() {
    return (
        <div>
            <CCard color='dark'  textColor='white' className="mb-3">
                <CCardHeader>Задание №1</CCardHeader>
                <CCardBody>
                    <CCardText>
                        Калькулятор математический выражений.
                    </CCardText>
                </CCardBody>
            </CCard>

            <CCard color='dark'  textColor='white' className="mb-3">
                <CCardHeader>Задание №2</CCardHeader>
                <CCardBody>
                    <CCardText>
                        Слайдшоу из нескольких картинок.
                    </CCardText>
                </CCardBody>
            </CCard>

            <CCard color='dark'  textColor='white' className="mb-3">
                <CCardHeader>Задание №3</CCardHeader>
                <CCardBody>
                    <CCardText>
                        Написать функционал корзины интернет магазина. Требования: корзина должна быть описана как объект со
                        своими свойствами (список товаров, которые уже в корзине, кол-во товаров в корзине) и методами
                        (добавление нового товара в корзину, удаление товара из корзины, подсчет общей суммы стоимости
                        товаров).
                    </CCardText>
                </CCardBody>
            </CCard>
            <CCard color='dark'  textColor='white' className="mb-3">
                <CCardHeader>Задание №4</CCardHeader>
                <CCardBody>
                    <CCardText>
                        Тест из нескольких вопросов с выводом результата.
                    </CCardText>
                </CCardBody>
            </CCard>

        </div>
    )
}

export default Home;