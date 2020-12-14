const images = () => {
    const imgPopup = document.createElement('div'),
       workSection = document.querySelector('.works'),
       bigImages = document.createElement('img');

       

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImages);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImages.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
            bigImages.style.cssText = 'width: 500px; height: 500px; border-radius:5%';

            
            

        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
        
    });

};

export default images;