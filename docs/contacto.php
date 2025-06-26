    <main>
        <section id="welcome">
            <div class="welcomeContainer">
                <img class="principalImg delay-img" src="media/images/habitacionPrueba.jpeg"
                    alt="Habitacion bienvenida">
                <div class="centredTextInImage">
                    <h1 class="visuallyHidden">Cómo contactarse con Andrea Hotel</h1>
                    <h2 class="fade-in">Contacto</h2>
                </div>
                <img src="media/images/arrowCircleDown.svg" alt="Scroll" class="scrollIcon">
            </div>
        </section>

        <section>
            <div class="columns">
                <div class="contactFormContainer columnTextLeft columnTextCenter">
                    <h3 class="colorTitle">¿Tenes alguna duda?</h3>
                    <form id="contactForm" class="contactForm">
                        <input type="text" name="website" id="website" style="display: none;" tabindex="-1" autocomplete="off">
                        <div class="contactFormRow">
                            <div class="contactFormInput">
                                <input name="firstname" type="text" id="firstname" />
                                <div class="contactFormUnderline"></div>
                                <label for="firstname">Nombre</label>
                            </div>
                            <div class="contactFormInput">
                                <input name="lastname" type="text" id="lastname" />
                                <div class="contactFormUnderline"></div>
                                <label for="lastname">Apellido</label>
                            </div>
                        </div>
                        <div class="contactFormRow">
                            <div class="contactFormInput">
                                <input name="email" type="email" id="email" />
                                <div class="contactFormUnderline"></div>
                                <label for="email">Email</label>
                            </div>
                            <div class="contactFormInput">
                                <input name="repeatEmail" type="email" id="repeatEmail" />
                                <div class="contactFormUnderline"></div>
                                <label for="repeatEmail">Repetir email</label>
                            </div>
                        </div>

                        <div class="contactFormRow">
                            <div class="contactFormInput textarea">
                                <textarea name="message" id="message"></textarea>
                                <div class="contactFormUnderline"></div>
                                <label for="message">Mensaje</label>
                            </div>
                        </div>
                        <div class="contactFormRow">
                            <div>
                                <button type="submit" class="button buttonSwipeLeft buttonSwipeLeft--primaryColor-700">
                                    <p>Enviar mensaje</p>
                                </button>
                            </div>
                            <p id="formStatus"></p>
                        </div>
                    </form>
                </div>
                <div class="contact">
                    <div class="columnTextLeft">
                        <div class="diagonalTexts">
                            <h3 class="colorTitle fade-in">Si sos particular</h3>
                            <p class="fade-in">Envianos un Whatsapp <a class="remarkedLink"
                                    href="http://wa.me/+5492983463576">acá</a> para
                                mostrarte las opciones disponibles para vos
                            </p>
                        </div>
                        <div class="diagonalTexts">
                            <h4 class="colorTitle hToh3 fade-in">Si sos empresa</h4>
                            <p class="fade-in">Envianos un mail a <a class="remarkedLink"
                                    href="mailto:elcorreoquequieres@correo.com">elcorreoquequieres@correo.com</a> y te
                                respondemos en el día
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </main>
