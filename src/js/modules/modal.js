const modal = () => {
    function bindModal (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true){  //closeClickOverlay Не даст закрыться прин ажатии на подложку 
        const trigger = document.querySelectorAll(triggerSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector),
                window = document.querySelectorAll('[data-modal]');


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target){
                    e.preventDefault();  
                }

                window.forEach(item => {
                    item.style.display = 'none';
                });
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        close.addEventListener('click', () => {
            window.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeClickOverlay){
                window.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = ''; 
            }
        });
    }


    function showModalByTime(selector, time){
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden ';
        }, time);
    }


    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close' );
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 60000);
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false )
}; 

export default modal;
