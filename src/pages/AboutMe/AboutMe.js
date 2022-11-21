import "./AboutMe.css"

function AboutMe() {
    return (
        <div className={"main_container"}>
            <div className={"main_container_left_block"}>
                <div className={"main_container_left_block_main"}>
                    <h2 className={"main_container_left_block_main_title"}>Основное</h2>
                    <p><span className={"main_container_left_block_main_FIO"}>ФИО: </span>
                        <span>Исхаков Камиль Робертович</span></p>
                    <p><span className={"main_container_left_block_main_sex"}>Пол: </span>
                        <span>Мужской</span></p>
                    <p className={"main_container_left_block_main_span_3"}><span
                        className={"main_container_left_block_main_date"}>Дата рождения: </span>
                        <span>06.08.2000</span></p>
                </div>
                <div className={"main_container_left_block_education"}>
                    <h2 className={"main_container_left_block_education_title"}>Образование</h2>
                    <p className={"for_border_left"}><h3
                        className={"main_container_left_block_education_title_part"}>Бакалавриат</h3>
                        <p><span className={"main_container_left_block_education_building"}>Учебное заведение: </span>
                            <span>Башкирский государственный университет (БашГУ)</span></p>
                        <p><span className={"main_container_left_block_education_faculty"}>Факультет: </span>
                            <span>Математики и информационных технологий</span></p>
                        <p><span className={"main_container_left_block_education_speciality"}>Специальность: </span>
                            <span>Прикладная информатика</span></p>
                        <p><span className={"main_container_left_block_education_date"}>Период обучения: </span>
                            <span>2018 - 2022 гг.</span></p>
                    </p>
                    <p className={"for_border_left"}><h3
                        className={"main_container_left_block_education_title_part"}>Магистратура</h3>
                        <p><span className={"main_container_left_block_education_building"}>Учебное заведение: </span>
                            <span>Башкирский государственный университет (БашГУ)</span></p>
                        <p><span className={"main_container_left_block_education_faculty"}>Факультет: </span>
                            <span>Математики и информационных технологий</span></p>
                        <p><span className={"main_container_left_block_education_speciality"}>Специальность: </span>
                            <span>Прикладная информатика</span></p>
                        <p><span className={"main_container_left_block_education_date"}>Период обучения: </span>
                            <span>2022 - 2024 гг.</span></p>
                    </p>
                    <br></br>
                </div>
                <div className={"main_container_left_block_contacts"}>
                    <h2 className={"main_container_left_block_contacts_title"}>Контакты</h2>
                    <p><span className={"main_container_left_block_contacts_number_text"}>Телефон: </span>
                        <span className={"main_container_left_block_contacts_number"}>+7 (999) 999 99-99</span>
                    </p>
                    <p className={"main_container_left_block_main_span_3"}>
                        <span className={"main_container_left_block_contacts_email_text"}>email: </span>
                        <span className={"main_container_left_block_contacts_email"}>example@gmail.com</span>
                    </p>
                </div>
            </div>
            <div className={"main_container_right_block"}>
                <h2 className={"main_container_right_block_title"}>Фото</h2>
                <div className={"main_container_right_block_image"}>
                    <img className={"main_container_right_block_about_me_image"} src={"images/avatar.jpg"} alt={"avatar"}/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;