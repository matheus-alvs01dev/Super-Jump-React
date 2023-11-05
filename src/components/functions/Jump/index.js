import '../../Dog/style.css';

export function Jump () {
    document.addEventListener('DOMContentLoaded', () => {
        const dog = document.querySelector('.dogImage');

        
            const jump = () => {
                dog.classList.add('jump');

                setTimeout(() => {
                    dog.classList.remove('jump');
                }, 500);
            }

            document.addEventListener('keydown', jump);
        
    });
};
