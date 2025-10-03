    document.getElementById('yesButton').addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 1s'; 

        const modalContent = document.createElement('div');
        modalContent.style.backgroundColor = 'pink';
        modalContent.style.padding = '40px';
        modalContent.style.borderRadius = '10px';
        modalContent.style.width = '50%';
        modalContent.style.height = '50%';
        modalContent.style.display = 'flex';
        modalContent.style.flexDirection = 'column';
        modalContent.style.justifyContent = 'center';
        modalContent.style.alignItems = 'center';
        modalContent.style.fontSize = '24px';
        modalContent.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        modalContent.style.animation = 'bounceIn 1s ease-in-out'; 

        const message11 = document.createElement('p');
        message11.innerText = 'Thank you, See you on the 14th';
        const message22 = document.createElement('p');
        message22.innerText = 'Time and Place will be (↓) decided at a later date';

        const secretButton = document.createElement('button');
        secretButton.innerText = '...';
        secretButton.style.marginTop = '20px';
        secretButton.addEventListener('click', function() {
            const secretModal = document.createElement('div');
            secretModal.style.position = 'fixed';
            secretModal.style.top = '0';
            secretModal.style.left = '0';
            secretModal.style.width = '100%';
            secretModal.style.height = '100%';
            secretModal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            secretModal.style.display = 'flex';
            secretModal.style.justifyContent = 'center';
            secretModal.style.alignItems = 'center';
            secretModal.style.zIndex = '1000';
            secretModal.style.opacity = '0';
            secretModal.style.transition = 'opacity 1s'; 
            
            const secretModalContent = document.createElement('div');
            secretModalContent.style.backgroundImage = 'url("/images/heartimg.jpg")';
            secretModalContent.style.backgroundPosition = 'center';
            secretModalContent.style.backgroundRepeat = 'no-repeat';
            secretModalContent.style.backgroundSize = 'contain';
            secretModalContent.style.padding = '40px';
            secretModalContent.style.borderRadius = '10px';
            secretModalContent.style.width = '50%';
            secretModalContent.style.height = '50%';
            secretModalContent.style.display = 'flex';
            secretModalContent.style.flexDirection = 'column';
            secretModalContent.style.justifyContent = 'center';
            secretModalContent.style.alignItems = 'center';
            secretModalContent.style.fontSize = '24px';
            secretModalContent.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            secretModalContent.style.animation = 'scaleUp 1s ease-in-out'; 

            const secretMessage = document.createElement('p');
            secretMessage.innerText = 'I love you <3';

            secretModalContent.appendChild(secretMessage);
            secretModal.appendChild(secretModalContent);
            document.body.appendChild(secretModal);

            requestAnimationFrame(() => {
                secretModal.style.opacity = '1';
            });

            secretModal.addEventListener('click', function() {
                secretModal.style.opacity = '0';
                secretModal.addEventListener('transitionend', function() {
                    document.body.removeChild(secretModal);
                }, { once: true });
            });
        });

        modalContent.appendChild(message11);
        modalContent.appendChild(message22);
        modalContent.appendChild(secretButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        requestAnimationFrame(() => {
            modal.style.opacity = '1';
        });

        modal.addEventListener('click', function() {
            modal.style.opacity = '0';
            modal.addEventListener('transitionend', function() {
                document.body.removeChild(modal);
            }, { once: true });
        });
    });

    document.getElementById('noButton').addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 1s'; 

        const modalContent = document.createElement('div');
        modalContent.style.backgroundColor = 'lightblue';
        modalContent.style.padding = '40px';
        modalContent.style.borderRadius = '10px';
        modalContent.style.width = '50%';
        modalContent.style.height = '50%';
        modalContent.style.display = 'flex';
        modalContent.style.flexDirection = 'column';
        modalContent.style.justifyContent = 'center';
        modalContent.style.alignItems = 'center';
        modalContent.style.fontSize = '24px';
        modalContent.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        modalContent.style.animation = 'fadeIn 2s ease-in-out'; 

        const message = document.createElement('p');
        message.innerText = 'Error 404';

        modalContent.appendChild(message);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        requestAnimationFrame(() => {
            modal.style.opacity = '1';
        });

        modal.addEventListener('click', function() {
            modal.style.opacity = '0';
            modal.addEventListener('transitionend', function() {
                document.body.removeChild(modal);
            }, { once: true });
        });
    });