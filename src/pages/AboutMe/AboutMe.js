import "./AboutMe.css"
import {CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCardImage, CCardText, CCardTitle} from "@coreui/react";

function AboutMe() {
    return (
        // style={{ maxWidth: '18rem' }}
        <div className={"main_container"}
             style={{"width":"100%", "display": "grid", "grid-template-columns":"70% 30%","grid-gap": "10px"}}
        >
            <div>
                <CCard color='dark'  textColor='white' className="mb-3">
                    <CCardHeader>Основное</CCardHeader>
                    <CCardBody>
                        {/*<CCardTitle> Основное</CCardTitle>*/}
                        <CCardText>
                            <p><span>ФИО: </span>
                                <span>Бикзянов Алмас Аликович</span></p>
                            <p><span>Пол: </span>
                                <span>Мужской</span></p>
                            <p><span>Дата рождения: </span>
                                <span>18.10.2000</span></p>

                        </CCardText>
                    </CCardBody>
                </CCard>

            <CCard color='dark'  textColor='white' className="mb-3">
                <CCardHeader>Образование</CCardHeader>
                <p className={"for_border_left"}>
                <CCardBody>
                    <CCardTitle>Бакалавриат</CCardTitle>
                    <CCardText>
                        <p><span>Учебное заведение: </span>
                            <span>Башкирский государственный университет</span></p>
                        <p><span>Факультет: </span>
                            <span>Математики и информационных технологий</span></p>
                        <p><span>Специальность: </span>
                            <span>Прикладная информатика</span></p>
                        <p><span>Период обучения: </span>
                            <span>2018 - 2022</span></p>

                    </CCardText>
                </CCardBody>
                </p>

                <p className={"for_border_left"}>
                    <CCardBody>
                        <CCardTitle>Магистратура</CCardTitle>
                        <CCardText>
                            <p><span>Учебное заведение: </span>
                                <span>Башкирский государственный университет</span></p>
                            <p><span>Факультет: </span>
                                <span>Математики и информационных технологий</span></p>
                            <p><span>Специальность: </span>
                                <span>Прикладная информатика</span></p>
                            <p><span>Период обучения: </span>
                                <span>2022 - н.в.</span></p>

                        </CCardText>
                    </CCardBody>
                </p>
            </CCard>

            <CCard color='dark'  textColor='white' className="mb-3">
                <CCardHeader>Контакты</CCardHeader>
                <CCardBody>
                    <CCardText>
                        <p><span>Телефон: </span>
                            <span>53465487</span></p>
                        <p><span>email: </span>
                            <span>example@gmail.com</span></p>


                    </CCardText>
                </CCardBody>
            </CCard>

            </div>
            <div>
                <CCard color='dark'  textColor='white'>
                    <CCardImage style={{"width": "100%"}} orientation="top" src='images/PhotoAbout.jpg' />
                    <CCardBody>
                    </CCardBody>
                    <CCardFooter>
                        <small>Фото</small>
                    </CCardFooter>
                </CCard>

            </div>
         </div>
    )
}

export default AboutMe;